<?php
require_once __DIR__ . '/../src/php/cors.php';
require_once __DIR__ . '/../src/php/config.php';
require_once __DIR__ . '/../src/php/utils/auth.php';
require_once __DIR__ . '/../src/php/utils/validation.php';
require_once __DIR__ . '/../src/php/services/user.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

switch ($uri) {
    case '/api/register':
        if ($method === 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);
            if (!validateEmail($data['email']) || !validatePassword($data['password'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Invalid input']);
                exit;
            }
            $user = createUser($pdo, $data['email'], $data['password']);
            if ($user) {
                echo json_encode(['message' => 'User registered', 'user' => $user]);
            } else {
                http_response_code(409);
                echo json_encode(['error' => 'User exists']);
            }
        }
        break;

    case '/api/login':
        if ($method === 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);
            $user = loginUser($pdo, $data['email'], $data['password']);
            if ($user) {
                $token = generateJWT($user['id']);
                setcookie('auth_token', $token, time() + 3600, '/', '', false, true); // HttpOnly
                echo json_encode(['message' => 'Logged in', 'user' => $user]);
            } else {
                http_response_code(401);
                echo json_encode(['error' => 'Invalid credentials']);
            }
        }
        break;

    case '/api/logout':
        if ($method === 'POST') {
            setcookie('auth_token', '', time() - 3600, '/');
            echo json_encode(['message' => 'Logged out']);
        }
        break;

    case '/api/me':
        if ($method === 'GET') {
            $userId = verifyJWTFromCookie();
            if ($userId) {
                $user = getUserById($pdo, $userId);
                echo json_encode($user);
            } else {
                http_response_code(401);
                echo json_encode(['error' => 'Unauthorized']);
            }
        }
        break;

    case '/api/user':
        if ($method === 'GET') {
            $users = getAllUsers($pdo);
            echo json_encode($users);
        }
        break;

    default:
        http_response_code(404);
        echo json_encode(['error' => 'Not found']);
}