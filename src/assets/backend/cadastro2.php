<?php

include 'conexao.php';


$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];


$sql = "INSERT INTO `usuarios`(`nome`, `email`, `senha`,status) VALUES ('$nome','$email','MD5($senha)','Bloqueado')"
$inserir = misqli_query($conexao,$sql);

header('location: index.php'); //testando
?>
