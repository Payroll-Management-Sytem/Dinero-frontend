var token;
if(document.cookie.split("=")[1]){
    token=document.cookie.split("=")[1];
    if(!(token.split('-')[1])){
        alert("Not an admin. Login with proper credentials");
    location.replace("./");
    }
}else{
    alert("Session expired. Login again");
    location.replace("./");
}
function logout(){
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    location.replace("./");
}document.getElementById('logout').addEventListener("click",logout);
const form = document.getElementById('form')

form.onsubmit=(e)=>{
    console.log(e)
    e.preventDefault();
    var pid=document.getElementById('pid').value;
    var uid = document.getElementById('uid').value;
    var empname = document.getElementById('empname').value;  
    var paydate = document.getElementById('paydate').value; 
    var basicpay = document.getElementById('basicpay').value; 
    var da = document.getElementById('da').value; 
    var hra = document.getElementById('hra').value; 
    var cca = document.getElementById('cca').value; 
    var inslic = document.getElementById('inslic').value; 
    var sli = document.getElementById('sli').value; 
    var gpf = document.getElementById('gpf').value; 
    var xtp = new XMLHttpRequest();
    xtp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
        }
    };
    // xtp.open("POST", "https://dinero-server.herokuapp.com/new-emp.php", true);
    // xtp.open("POST", "http://localhost/Server/new-emp.php", true);
    // xtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xtp.send(`pid=${pid} & uid=${uid} & empname=${empname} & paydate=${paydate} & basicpay=${basicpay} & da=${da} & hra=${hra} & cca=${cca} & inslic=${inslic} & sli=${sli} & gpf=${gpf}`);
}