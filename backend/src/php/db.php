<?php
$DB_HOST = "127.0.0.1";
$DB_PORT = "51214";
$DB_NAME = "jobspot_db";
$DB_USER = "postgres";
$DB_PASS = "postgres";

try {
    $pdo = new PDO("pgsql:host=$DB_HOST;port=$DB_PORT;dbname=$DB_NAME", $DB_USER, $DB_PASS);
    echo "OK - połączono z Postgres!";
} catch (PDOException $e) {
    echo "Błąd: " . $e->getMessage();
}
