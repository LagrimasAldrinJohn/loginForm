/**
 * Main JS File for the login form
 */

//  Function that hide certain html elements
$('.user-container').hide();
$('.admin-container').hide();

// Trigger when the login button is click
$('#btnLogin').click(function(e){
    e.preventDefault(); 
    checkInputValidity();
})

$('#username').focus(function(e){
    $('#username').css('border','1px gray solid');
})

$('#password').focus(function(e){
    $('#password').css('border','1px gray solid');
})



// Function that check the validity of the users input
function checkInputValidity(){
    if($('#username').val() === ''){
        $('#username').css('border','1px red solid');
    }
    if($('#password').val() === ''){
        $('#password').css('border','1px red solid');
    }

    if($('#username').val() === 'admin' &&$('#password').val() === 'admin'){
        $('.admin-container').show();
        $('.user-container').hide();
    }else if($('#username').val() === 'user' &&$('#password').val() === 'user'){
        $('.user-container').show();
        $('.admin-container').hide();
    }else{
        $('#username').css('border','1px red solid');
        $('#password').css('border','1px red solid');
        alert('Invalid Credentials');
        $('.user-container').hide();
        $('.admin-container').hide();
    }
}
