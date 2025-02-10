username = prompt("Please input your username: ");
password = prompt("Please input your password: ");

const login = function verify(username, password){
    loginStr =""
if(username == "admin" && password == "secret")
    loginStr = "Welcome admin!";
else
    loginStr = "INVALID LOGIN CREDENTIALS";
    let confirm = document.querySelector(".check");
    confirm.innerHTML = loginStr
    console.log(loginStr)
}

login(username, password);