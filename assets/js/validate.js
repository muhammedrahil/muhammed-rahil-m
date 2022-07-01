$(document).ready(function(){
    $("#form-submition").validate({
        rules:{
            name:{
                required:true,
                minlength:4,
            },
            _replyto:{
                required:true,
                email:true
            },
            message:{
                required:true,
                minlength:10,
                maxlength:300,
            }
        },
        messages:{
            name:{
                required:"enter your name ",
                minlength:"please enter at least 4 charector"
            },
            _replyto:{
                required:"enter your mail ",
                email:"please enter only mail",
                
            },
            message:{
                required:"enter  subject ",
                minlength:"please enter at least 10 charector",
                maxlength:"please enter at most 300 charector",
            }

        }
    })
})