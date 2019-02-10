// Your code goes here
let User = prompt('Input your login');
const Time =new Date().getHours();
if(!User||User===""){
    alert("Canceled");
} else if(User.length < 4) {
        (alert("I don't know any users having name length less than 4 symbols"));
}else if(!User === "User"|| !User === "Admin"){
        (alert("I don’t know you"));
}else{
        const password = prompt('Enter your password!');
        if(password === ""){
            alert("Canceled");
        }else
            if(User === "User" && password === "UserPass"|| User === "Admin" && password === "RootPass"){
                if(User === "User"){
                if(Time < 20){
                    alert("Good day, dear User!");   
        }else{
            alert("Good evening,dear User!");
        }
        } else {
            if(Time < 20){
                alert("Good day, dear Admin!");
            } else {
                alert("Good evening, dear Admin!");
            }
            }
        }else{
                alert("Wrong password");
    }
}