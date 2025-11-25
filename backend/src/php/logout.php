<?php
require_once "helpers.php";
require_once "auth.php";

require_method("POST");

auth_logout();

json_response(["success" => true]);
