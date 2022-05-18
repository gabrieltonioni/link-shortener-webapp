$(document).ready(function(){
    $("#fieldSenha").hide();
});

$(document).on('change','#checkSenha',function(){
    if(this.checked){
        $("#fieldSenha").show();
    } else {
        $("#fieldSenha").hide();
    }
});