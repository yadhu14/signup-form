$(document).ready(function () {        
    
    $(".email").blur(function () {    
    var inputvalues = $(this).val();    
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
    if(!regex.test(inputvalues)){    
        // alert("invalid email id");    
        $("#erroremail").show()
    return regex.test(inputvalues);    
    }else{
        $("#erroremail").hide()
    } 
    });
    $("#address").keyup(function(){
        var addtxt=$(this).val()
        if(addtxt.length!=0){
            $("#erroradd").hide()
        }else{
            $("#erroradd").show()
        }
    });
    var pattern =new RegExp('[0-9,~,!,@,#,$,%,^,&,*,(,),_,+,/,?,]');
    $("#name").keyup(function(){
        var namtxt=$(this).val()
        if(namtxt.length<3){
            $("#errorn").show()
        }else{
            $("#errorn").hide()
        }
        if(namtxt.match(pattern)){
            $("#errorn1").show()
        }else{
            $("#errorn1").hide()
        }   
    });
    // $("#dob").keyup(function(){
    //     var dobtxt=$(this).val()
    //     if(dobtxt.length!=0){
    //         $("#errordob").hide()
    //     }else{
    //         $("#errordob").show()
    //     }
    // });
      //Uppercase ,special character and number check variables
    var uppercase = new RegExp('[A-Z]');
    var numbers = new RegExp('[0-9]');
    var special = new RegExp('[~,!,@,#,$,%,^,&,*,(,),_,+,/,?,]');
    var lowerCase = new RegExp('[a-z]');
    $("#password").keyup(function () {
        var passtxt = $(this).val()
        if (passtxt.length >= 8) {
            $("#errorpass").hide()
        } else {
            $("#errorpass").show()
        }
        if (passtxt.match(uppercase)) {
            $("#errorpass2").hide()
        } else {
            $("#errorpass2").show()
        }
        if (passtxt.match(lowerCase)) {
            $("#errorpass3").hide()
        } else {
            $("#errorpass3").show()
        }
        if (passtxt.match(special)) {
            $("#errorpass4").hide()
        } else {
            $("#errorpass4").show()
        }
        if (passtxt.match(numbers)) {
            $("#errorpass5").hide()
        } else {
            $("#errorpass5").show()
        }
    });
    $("#confirmpassword").keyup(function checkPasswordMatch() {
        var password = $("#password").val();
        var confirmPassword = $("#confirmpassword").val();
    
        if (password != confirmPassword)
            $("#errorcon").show();
        else
            $("#errorcon").hide();
    });
    $("#confirmpassword").keyup(function() {

        var _name=$("#name").val()
        var _email=$("#email").val()
        var _address=$("#address").val()
        var _password=$("#address").val()
        var _confirmpassword=$("#confirmpassword")
        

        if(_name !="" && _email!="" && _address!="" && _password!="" && _confirmpassword!=""){

            $("#bttn").removeAttr("disabled");
          

        }else{


        $("#bttn").removeAttr("disabled",false);


        }

    })
})