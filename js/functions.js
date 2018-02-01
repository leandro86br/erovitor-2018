/* NAVIGATION VISIBLE ON SCROLL
*/
mainNav();

$(window).scroll(function () {
    mainNav();
});

function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 200){
        $('nav').removeClass('padding-nav')
    } 
    
    else {
        $('nav').addClass('padding-nav')
    } 
}


/* NAVBAR-COLLAPSE CLOSE ON NAV-LINK CLICK
*/

$(document).click(function(e) {
	if (!$(e.target).is('.navbar-collapse')) {
    	$('.collapse').collapse('hide');	    
    }
});


/* TOOLTIP
*/

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


/* ONE PAGE SCROLL
*/

onePage();

function onePage(){
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
         event.preventDefault();
         $('html, body').stop().animate({
             scrollTop: target.offset().top
         }, 1000);
      }
  });
}

/* FORM VALIDATION
*/

function submitContactForm() {

    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var empresa = $('#inputEmpresa').val();
    var email = $('#inputEmail').val();
    var fone = $('#inputFone').val();
    var lacre = $('#inputLacre').val();
    var quantidade = $('#inputQuantidade').val();

    if(empresa.trim() == '' ) {
        alert('Preencha um nome.');
        $('#inputEmpresa').focus();
        return false;

    } else if(email.trim() == '' ) {
        alert('Preencha um email.');
        $('#inputEmail').focus();
        return false;

    } else if(email.trim() != '' && !reg.test(email)) {
        alert('Preencha um email valido.');
        $('#inputEmail').focus();
        return false;

    } else if(fone.trim() == '' ) {
        alert('Preencha um fone.');
        $('#inputFone').focus();
        return false;

    } else if(quantidade.trim() == '' ) {
        alert('Preencha uma quantidade.');
        $('#inputQuantidade').focus();
        return false;

    } else {
        $.ajax({
            type:'POST',
            url:'submit_form.php',

            data:'contactFrmSubmit=1'+
            '&empresa='+empresa+
            '&email='+email+
            '&fone='+fone+
            '&lacre='+lacre+
            '&email='+quantidade,

            beforeSend: function () {
                $('.submitBtn').attr("disabled","disabled");
                $('.modal-body').css('opacity', '.5');
            },

            success:function(msg){
                if(msg == 'ok'){
                    $('#inputEmpresa').val('');
                    $('#inputEmail').val('');
                    $('#inputFone').val('');
                    $('#inputLacre').val('');
                    $('#inputQuantidade').val('');
                    $('.statusMsg').html('<span style="color:green;">Enviado! Retornaremos em Breve.</p>');
                }else{
                    $('.statusMsg').html('<span style="color:red;">Nao Enviado! Tente Novamente.</span>');
                }
                $('.submitBtn').removeAttr("disabled");
                $('.modal-body').css('opacity', '');
            }
        });
    }
}
