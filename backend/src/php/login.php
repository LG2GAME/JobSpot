<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

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

// Tabela "User" z migracji PostgreSQL
$stmt = $pdo->prepare('SELECT * FROM "User" WHERE "email" = :email');
$stmt->execute(['email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    json_response(["error" => "Invalid credentials"], 401);
}

if (!password_verify($password, $user["password"])) {
    json_response(["error" => "Invalid credentials"], 401);
}

auth_login($user["id"]);

json_response([
    "success" => true,
    "user" => [
        "id" => $user["id"],
        "email" => $user["email"]
    ]
]);
