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
   if(!email || !password){
    alert("Please enter some value");
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

    if(!Username || !signupemail || !signuppassword ||!confirmpassword){
        alert("Please Enter value");
    }else if(signuppassword !==confirmpassword){
        passdoesntmatch();
    }else{
        alert("Registered Succesfully");
        
    }
 }
 function passdoesntmatch(){
    alert("Password doesn't match");
 }