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
}
document.getElementById('logout').addEventListener("click",logout);
document.getElementById('add-emp').addEventListener("click",()=>{
    document.getElementById('new-emp-form').classList.remove('d-none');
    
    document.getElementById('new-pay-form').classList.add('d-none');
    document.getElementById('about').classList.add('d-none');
    document.getElementById('emp-edit').classList.add('d-none');
})
document.getElementById('edit-emp').addEventListener("click",()=>{
    document.getElementById('emp-edit').classList.remove('d-none');
    document.getElementById('new-emp-form').classList.add('d-none');
    document.getElementById('new-pay-form').classList.add('d-none');
    document.getElementById('about').classList.add('d-none');
})
document.getElementById('add-pay').addEventListener("click",()=>{
    document.getElementById('new-pay-form').classList.remove('d-none');
    document.getElementById('new-emp-form').classList.add('d-none');
    document.getElementById('about').classList.add('d-none');
    
    document.getElementById('emp-edit').classList.add('d-none');
})
document.getElementById('home-btn').addEventListener("click",()=>{
    document.getElementById('new-pay-form').classList.add('d-none');
    document.getElementById('new-emp-form').classList.add('d-none');
    document.getElementById('about').classList.remove('d-none');
    document.getElementById('emp-edit').classList.add('d-none');
})