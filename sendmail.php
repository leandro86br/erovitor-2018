<?php
/*
ini_set('error_reporting', E_ALL);
ini_set( 'display_errors', 1 );
*/
if(isset($_POST['submit'])) {
    
    // Submitted form data
    $empresa    = $_POST['empresa'];
    $email      = $_POST['email'];
    $fone       = $_POST['fone'];
    $lacre      = $_POST['lacre'];
    $quantidade = $_POST['quantidade'];
    
    /*
     * Send email to admin
     */
    $to     = 'contato@lacreserovitor.com.br';
    $subject= 'Mensagem do Site';
    
    $htmlContent = '
    <h4>Orcamento enviado pelo site Lacres Erovitor</h4>
    <table cellspacing="0" style="width: 300px; height: 200px;">
        <tr>
            <th>Name:</th><td>'.$empresa.'</td>
        </tr>
        <tr style="background-color: #e0e0e0;">
            <th>Email:</th><td>'.$email.'</td>
        </tr>
        <tr>
            <th>Fone:</th><td>'.$fone.'</td>
        </tr>
        <tr style="background-color: #e0e0e0;">
            <th>Produto:</th><td>'.$lacre.'</td>
        </tr>
        <tr>
            <th>Quantidade:</th><td>'.$quantidade.'</td>
        </tr>
    </table>';
    
    // Set content-type header for sending HTML email
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // Additional headers
    $headers .= 'From: contato@lacreserovitor.com.br' . "\r\n";
    $headers .= 'Reply-To:' .$email. "\r\n";
    
    
    // Send email
    if(mail($to,$subject,$htmlContent,$headers)){
        echo "<script>alert('Mensagem enviada, retornaremos em breve')</script>";
        echo "<script>window.location.href='/'</script>";
    }else{
        echo "<script>alert('Mensagem nao enviada, entre em contato pelo email contato@lacreserovitor.com.br')</script>";
    }
}

?>