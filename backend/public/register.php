<?php
require_once __DIR__ . '/../src/php/cors.php';
require_once __DIR__ . '/../src/php/config.php';
require_once __DIR__ . '/../src/php/utils/auth.php';
require_once __DIR__ . '/../src/php/services/user.php';

header('Content-Type: application/json');

// Obsługa preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ODCZYT JSONA – JEDYNA METODA, KTÓRA DZIAŁA Z AXIOS + php -S + WINDOWS
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data || !isset($data['email'], $data['password'], $data['confirmPassword'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Brak danych']);
    exit;
}

$email = trim($data['email']);
$password = $data['password'];
$confirmPassword = $data['confirmPassword'];

if ($password !== $confirmPassword) {
    http_response_code(400);
    echo json_encode(['message' => 'Hasła się nie zgadzają']);
    exit;
}

if (strlen($password) < 6) {
    http_response_code(400);
    echo json_encode(['message' => 'Hasło za krótkie']);
    exit;
}

// TWORZYMY UŻYTKOWNIKA
$user = createUser($pdo, $email, $password);

if (!$user) {
    http_response_code(409);
    echo json_encode(['message' => 'Użytkownik już istnieje']);
    exit;
}

// JWT + CIASTECZKO
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