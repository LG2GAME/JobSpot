<?php
require_once "db.php";
require_once "helpers.php";
require_once "auth.php";

require_method("GET");

$userId = auth_get_user_id();

if (!$userId) {
    json_response(["user" => null], 200);
}

$stmt = $pdo->prepare("SELECT id, email, createdAt FROM User WHERE id = ?");
$stmt->execute([$userId]);
$user = $stmt->fetch();

json_response(["user" => $user]);
