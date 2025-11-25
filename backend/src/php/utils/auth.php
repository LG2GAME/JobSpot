<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function generateJWT(int $userId): string
{
    $secret = $_ENV['JWT_SECRET'] ?? 'fallback_secret_change_me';
    $payload = [
        'iss' => 'jobspot',
        'sub' => $userId,
        'iat' => time(),
        'exp' => time() + 60 * 60 * 24 * 30 
    ];
    return JWT::encode($payload, $secret, 'HS256');
}

function verifyJWTFromCookie(): ?int
{
    if (!isset($_COOKIE['auth_token'])) {
        return null;
    }

    $secret = $_ENV['JWT_SECRET'] ?? 'fallback_secret_change_me';
    try {
        $decoded = JWT::decode($_COOKIE['auth_token'], new Key($secret, 'HS256'));
        return (int)$decoded->sub;
    } catch (Exception $e) {
        return null;
    }
}