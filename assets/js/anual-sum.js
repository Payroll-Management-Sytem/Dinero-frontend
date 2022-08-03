var token;
if(document.cookie.split("=")[1]){
    token=document.cookie.split("=")[1];
}else{
    alert("Session expired. Login again");
    // location.replace("./");
    locationChange("/");
}
function logout(){
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // location.replace("./");
    locationChange("");

}
document.getElementById('logout').addEventListener("click",logout);

function getTotSum(){
    var xtp = new XMLHttpRequest();
    xtp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.response);
            var res=this.response.split('<_o_>');
            // console.log(res);
            document.getElementById('emp-name').innerText=res[0];
            document.getElementById('table-out').innerHTML=res[1];
        }
    };
    xtp.open("POST", "https://dinero-server.herokuapp.com/tsal-sum.php", true);
    // xtp.open("POST", "http://localhost/Server/tsal-sum.php", true);
    xtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xtp.send(`uid=${token}`);
}
getTotSum();