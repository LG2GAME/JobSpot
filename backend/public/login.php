<?php
// public/login.php – DZIAŁA Z AXIOS + php -S + WINDOWS
require_once __DIR__ . '/../src/php/cors.php';
require_once __DIR__ . '/../src/php/config.php';
require_once __DIR__ . '/../src/php/utils/auth.php';
require_once __DIR__ . '/../src/php/services/user.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true) ?? [];

if (!isset($data['email'], $data['password'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Brak emaila lub hasła']);
    exit;
}

$user = loginUser($pdo, $data['email'], $data['password']);

if (!$user) {
    http_response_code(401);
    echo json_encode(['message' => 'Nieprawidłowy email lub hasło']);
    exit;
}

// JWT + ciasteczko
$token = generateJWT($user['id']);
setcookie('auth_token', $token, [
    'expires'  => time() + 30*24*60*60,
    'path'     => '/',
    'secure'   => false,
    'httponly' => true,
    'samesite' => 'Lax'
]);

echo json_encode([
    'user' => [
        'id'    => $user['id'],
        'email' => $user['email']
    ]
]);