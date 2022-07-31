var token;
const form = document.getElementById('form')
var gender="";
document.getElementById('gender_0').addEventListener("click",()=>{gender="Male";})
document.getElementById('gender_1').addEventListener("click",()=>{gender="Female";})
document.getElementById('gender_2').addEventListener("click",()=>{gender="Other";})
form.onsubmit=(e)=>{
    console.log(e)
    e.preventDefault();
    var username=document.getElementById('username').value;
    var empname = document.getElementById('empname').value; 
    var uid = document.getElementById('uid').value; 
    var pass = document.getElementById('pass').value; 
    var empid = document.getElementById('empid').value; 
    var age = document.getElementById('age').value; 
    var dob = document.getElementById('dob').value; 
    // var gender = document.getElementById('gender').value; 
    var doj = document.getElementById('doj').value; 
    var desig = document.getElementById('desig').value; 
    var ofc = document.getElementById('ofc').value; 
    var xtp = new XMLHttpRequest();
    xtp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if(this.responseText=="success"){
                document.getElementById('nef-sub').classList.toggle('d-none');
                document.getElementById('nef-sus-msg').classList.toggle('d-none');
                
                setTimeout(()=>{
                    document.getElementById('new-emp-form').classList.toggle('d-none');
                    document.getElementById('about').classList.toggle('d-none');
                    document.getElementById('nef-sub').classList.toggle('d-none');
                    document.getElementById('nef-sus-msg').classList.toggle('d-none');
                    form.reset();
                },2000);

            }
        }
        else if(this.readyState== 4){
            document.getElementById('nef-err-msg').classList.toggle('d-none');
            setTimeout(()=>{
            document.getElementById('nef-err-msg').classList.toggle('d-none');
            },3000)
        }
    };
    xtp.open("POST", "https://dinero-server.herokuapp.com/new-emp.php", true);
    // xtp.open("POST", "http://localhost/Server/new-emp.php", true);
    xtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xtp.send(`username=${username}&empname=${empname}&uid=${uid}&pass=${pass}&empid=${empid}&age=${age}&dob=${dob}&gender=${gender}&doj=${doj}&desig=${desig}&ofc=${ofc}`);
}