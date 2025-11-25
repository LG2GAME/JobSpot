<?php
require_once __DIR__ . '/../src/php/cors.php';
require_once __DIR__ . '/../src/php/config.php';
require_once __DIR__ . '/../src/php/utils/auth.php';

header('Content-Type: application/json');

$userId = verifyJWTFromCookie();

if (!$userId) {
    http_response_code(401);
    echo json_encode(['message' => 'Brak autoryzacji']);
    exit;
}

$stmt = $pdo->prepare('SELECT id, email FROM User WHERE id = ?');
$stmt->execute([$userId]);
$user = $stmt->fetch();

if (!$user) {
    http_response_code(401);
    echo json_encode(['message' => 'Użytkownik nie istnieje']);
    exit;
}

echo json_encode([
    'id'    => $user['id'],
    'email' => $user['email']
]);