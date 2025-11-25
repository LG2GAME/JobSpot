<?php

function json_response($data, $status = 200) {
    http_response_code($status);
    header("Content-Type: application/json");
    echo json_encode($data);
    exit;
}

function require_method($method) {
    if ($_SERVER['REQUEST_METHOD'] !== $method) {
        json_response(["error" => "Invalid method"], 405);
    }
}

function get_json_body() {
    $body = file_get_contents("php://input");
    return json_decode($body, true) ?? [];
}

// Proste zabezpieczenie emaila
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
