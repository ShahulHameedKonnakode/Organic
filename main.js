
// function formValidation(event){
//     event.preventDefault(); 



//     let name=document.querySelector('input[placeholder="Enter Your Full Name"]').value;
//     let phone=document.querySelector('input[placeholder="Enter Your Phone Number"]').value;
//     let address=document.querySelector('input[placeholder="Enter Your Address"]').value;
//     let country = document.getElementById('country').value;
//     let email = document.querySelector('input[placeholder="Enter Your E-mail"]').value;
    
    
//     if (name ===" ") {
//         alert('Name must be filled out');
//         return;
//     }
//     if (phone ===" "){
//         alert('Name must be filled out');
//         return;
//     }
//     if (address){
//         alert('Name must be filled out');
//         return;
//     }
//     if (country){
//         alert('Name must be filled out');
//         return;
//     }
//     if (email){
//         alert('Name must be filled out');
//         return;
//     }
//     else{
//     alert("You are submitted Successfully")
//     document.getElementById('register-form').submit();
//     }     

// }

// document.getElementById('register-form').addEventListener('submit', formValidation);

$(document).ready(function(){
    $("#register-form").validate({
        rules:{
            fullname:{
                required:true,
                minlength:4,
                maxlength:50
                
            },
            phonenumber:{
                required:true,
                number:true,
                minlength:10
            },
            address:{
                required:true,
                minlength:5
            },
            country:{
                required:true
            },
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            fullname:{
                required:"Enter Your Full Name",
                minlength:"Enter Minimum 4 Characters",
                maxlength:"Enter Maximum 50 Characters"                
            }
            
        }

    });
    x=0;
    $('.btn-next').click(function(){
        x = (x<=300)?(x+100):0;
    $('.slider-img').css('left', -x+"%");

    });

    $('.btn-prev').click(function(){
        x = (x>=100)?(x-100):400;
    $('.slider-img').css('left', -x+"%");

    });
})