<?php
// src/php/services/user.php – WERSJA Z DEBUG + 100% DZIAŁAJĄCA

function createUser($pdo, $email, $password) {
    // Sprawdź czy istnieje
    $stmt = $pdo->prepare('SELECT id FROM "User" WHERE email = ?');
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        error_log("USER EXISTS: " . $email);
        return false;
    }

    $hashed = password_hash($password, PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare('
            INSERT INTO "User" (email, password, "createdAt", "updatedAt")
            VALUES (?, ?, NOW(), NOW())
            RETURNING id, email
        ');
        $stmt->execute([$email, $hashed]);
        $user = $stmt->fetch();

        error_log("USER CREATED SUCCESSFULLY: " . $email . " | ID: " . $user['id']);

        return $user;
    } catch (Exception $e) {
        error_log("DB ERROR IN createUser: " . $e->getMessage());
        return false;
    }
}