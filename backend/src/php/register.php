<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

// Obsługa preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once "db.php";
require_once "helpers.php";
require_once "auth.php";

require_method("POST");

$data = get_json_body();

$email = $data["email"] ?? "";
$password = $data["password"] ?? "";

if (!$email || !$password) {
    json_response(["error" => "Missing fields"], 400);
}

if (!validate_email($email)) {
    json_response(["error" => "Invalid email"], 400);
}

// Poprawna tabela PostgreSQL (Twoja migracja)
$stmt = $pdo->prepare('SELECT id FROM "User" WHERE email = ?');
$stmt->execute([$email]);

if ($stmt->fetch()) {
    json_response(["error" => "Email already exists"], 409);
}

$hash = password_hash($password, PASSWORD_DEFAULT);

$stmt = $pdo->prepare(
    'INSERT INTO "User" (email, password, createdAt, updatedAt) VALUES (?, ?, NOW(), NOW())'
);

$stmt->execute([$email, $hash]);

$userId = $pdo->lastInsertId();

auth_login($userId);

json_response([
    "success" => true,
    "user" => [
        "id" => $userId,
        "email" => $email
    ]
]);
