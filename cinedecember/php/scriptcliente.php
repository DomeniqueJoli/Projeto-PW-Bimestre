<?php

$_conn = mysqli_connect('127.0.0.1','root','','bd_cinedecember');
if($_conn===FALSE) {
    echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
    echo "Conectado!";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        $nome = $_POST["inputNome"];
        $sobrenome = $_POST["inputSobrenome"];
        $cpf = $_POST["inputCPF"];
        $email = $_POST["inputEmail"];
        $endereco = $_POST["inputEndereco"];
        $cidade = $_POST["inputCidade"];
        $telefone = $_POST["inputTelefone"];
        $estado = $_POST["inputEstado"];
        $cep = $_POST["inputCEP"];

        $sql = "INSERT INTO cliente VALUES ( null, '$email', '$cpf', '$telefone', '$nome', '$endereco', '$cidade', '$cep');";
        
        if ($_conn->query($sql) === TRUE) {
            echo"Dados inseridos com sucesso!";
        } else {
            echo "Erro na inserção: " . $_conn->error;
        }
    
        $_conn->close();
    }
    else{
        echo "Erro Dados";
    }   
}
   
?>