<?php
require_once __DIR__ . '/../../vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

$dsn  = $_ENV['DB_DSN']  ?? 'pgsql:host=localhost;port=51214;dbname=backend';
$user = $_ENV['DB_USER'] ?? 'postgres';
$pass = $_ENV['DB_PASS'] ?? 'postgres';

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['message' => 'Błąd połączenia z bazą']);
    error_log($e->getMessage());
    exit;
}