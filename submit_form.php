<?php
if(isset($_POST['contactFrmSubmit']) && !empty($_POST['empresa']) && !empty($_POST['email']) && (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === false) && !empty($_POST['fone']) && !empty($_POST['lacre']) && !empty($_POST['quantidade'])){
    
    // Submitted form data
    $empresa   = $_POST['empresa'];
    $email  = $_POST['email'];
    $fone= $_POST['fone'];
    $lacre= $_POST['lacre'];
    $quantidade= $_POST['quantidade'];
    
    /*
     * Send email to admin
     */
    $to     = 'teste@lacreserovitor.com';
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
            <th>Message:</th><td>'.$fone.'</td>
        </tr>
        <tr style="background-color: #e0e0e0;">
            <th>Email:</th><td>'.$lacre.'</td>
        </tr>
        <tr>
            <th>Message:</th><td>'.$quantidade.'</td>
        </tr>
    </table>';
    
    // Set content-type header for sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // Additional headers
    $headers .= 'From: Erovitor' . "\r\n";
    
    // Send email
    if(mail($to,$subject,$htmlContent,$headers)){
        $status = 'ok';
    }else{
        $status = 'err';
    }
    
    // Output status
    echo $status;die;
}
?>