<?php
header("Cache-control: no-cache, no-store, must-revalidate");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf8");

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "centralderisco";
$port = 3307;
$dsn = "mysql: host".$host.";dbname:".$dbname.";port".$port;

try{
    $conn = new pdo($dns, $user, $pass);
    $conn = exec("set names utf8");
    $sql = "SELECT * FROM listacredores";
    $result -> $conn->prepare($sql);
    $result -> exec(array());
    $resultSelect - $result->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($resultSelect);
    echo $json;
}catch(PDOException $erro){
    echo "ERRO DE CONEXAO A BASE DE DADOS".$erro->getMessage();
}


?>