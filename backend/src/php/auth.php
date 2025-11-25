<?php

session_start();

function auth_login($userId) {
    $_SESSION['user_id'] = $userId;
}

function auth_logout() {
    session_unset();
    session_destroy();
}

function auth_get_user_id() {
    return $_SESSION['user_id'] ?? null;
}
