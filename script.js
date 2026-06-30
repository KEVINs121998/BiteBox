// function is made to run a specific task

function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let error=document.getElementById("error")

    if(email==="admin@1234" && password==="1234")
    {
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("user",email)

        window.location.href="home.html"
    }
    else{
        error.innerHTML="Invalid Email or password"
    }
}