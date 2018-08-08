/* eslint-disable */

$('#cache-div').hide(); 

// home page animations
$('#cache-btn').click(function () {
    $('#cache-div').animate({
        width: 'toggle'
    });
    $('#projs-div').hide(); 
});


$('#projs-btn').click(function () {
    $('#projs-div').animate({
        width: 'toggle'
    });
    $('#cache-div').hide(); 
});
