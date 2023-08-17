const forms = document.querySelector(".forms"),

links = document.querySelectorAll(".link");

links.forEach(link=> {
link.addEventListener("click", e => {
 e.preventDefault(); 
 forms.classList.toggle("show-signup");
})
})


 function validatelogin(){
    var email=document.getElementById("loginemail").value;
    var password=document.getElementById("loginpass").value;

if(!email){
    document.getElementById("emailerror").innerHTML ="Please Enter Email";
    document.getElementById("emailerror").style.display = "flex";
    return false;
    
}
else if(!password){
    document.getElementById("passerror").innerHTML ="Please Enter Password";
    document.getElementById("passerror").style.display = "flex"
    return false;
}else{
    alert("Login Successfull");
    window.open("home.html");
}
}

 var SignUp = document.getElementById("Signup");
 SignUp.addEventListener("click",validateSignUp)

 function validateSignUp(){
    var Username =  document.getElementById("username").value;
    var signupemail = document.getElementById("signupEmail").value;
    var signuppassword = document.getElementById("signupPass").value;
    var confirmpassword = document.getElementById("confirmpwd").value;
    if(!Username){
        document.getElementById("usernameerror").innerHTML ="Please Enter Username";
    document.getElementById("usernameerror").style.display = "flex"
    return false;
    }

   else if(!signupemail){
        document.getElementById("Semailerror").innerHTML ="Please Enter Email";
    document.getElementById("Semailerror").style.display = "flex"
    return false;
    }
    else if(!signuppassword){
        document.getElementById("Spasserror").innerHTML ="Please Enter Password";
    document.getElementById("Spasserror").style.display = "flex"
    return false;
    }
    else if(!confirmpassword){
        document.getElementById("SCpasserror").innerHTML ="Please Enter password";
    document.getElementById("SCpasserror").style.display = "flex"
    return false;
    }
    else if(signuppassword !==confirmpassword){
        passdoesntmatch();
    }else{
        alert("Registered Succesfully");
        
    }
 }
 function passdoesntmatch(){
    alert("Password doesn't match");
 }

 var dropdown = document.getElementById("dropdown");
dropdown.addEventListener("click", listitems);
 function listitems(){
    document.getElementById("dropdowncontent").style.display = "block";
 }
//  document.addEventListener("click", (e)=> {
//     if (document.getElementById("dropdowncontent").style.display == "block") {
//         document.getElementById("dropdowncontent").style.display = "none";
//     }
// });
var closedropdown = document.getElementById("closedropdown");
closedropdown.addEventListener("click" ,(e)=>{
    e.preventDefault();
    console.log("closed");
    document.getElementById("dropdowncontent").style.display = "none";
    e.stopPropagation();
})