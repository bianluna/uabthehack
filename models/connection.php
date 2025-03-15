<?php
$host = "pr-az-pro-ai-mysql-fw.mysql.database.azure.com";
$port = "3306";
$database = "pr-az-pro-ai-mysql-fw-db-uab15"; 
$username = "xVmTQ3fy";
$password = "wUwZND5ufUh1sCWE"; 

$conn = new mysqli($host, $username, $password, $database, $port);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
} else {
    echo "Conexión exitosa a la base de datos.";
}
?>
