<?php
require_once __DIR__ . '/../src/php/cors.php';

setcookie('auth_token', '', time() - 3600, '/', 'localhost', false, true);

echo json_encode(['message' => 'Wylogowano']);