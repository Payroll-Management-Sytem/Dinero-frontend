var token,emps,dt;
const pay_form = document.getElementById('pay-form')

function getENU(){
    var xtp = new XMLHttpRequest();
    xtp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            emps=this.responseText.split("[o]");
            console.log(emps);
            emps.forEach(emp => {
               dt=emp.split('<>');
               console.log(dt); 
            });
        }
    };
    // xtp.open("POST", "https://dinero-server.herokuapp.com/enu.php", true);
    xtp.open("POST", "http://localhost/Server/enu.php", true);
    xtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xtp.send(`uid=${token}`);
}
document.getElementById('add-pay').addEventListener("click",getENU);

pay_form.onsubmit=(e)=>{
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
            if(this.responseText=="success"){
                document.getElementById('npf-sub').classList.toggle('d-none');
                document.getElementById('npf-sus-msg').classList.toggle('d-none');
                
                setTimeout(()=>{
                    document.getElementById('new-pay-form').classList.toggle('d-none');
                    document.getElementById('about').classList.toggle('d-none');
                    document.getElementById('npf-sub').classList.toggle('d-none');
                    document.getElementById('npf-sus-msg').classList.toggle('d-none');
                    pay_form.reset();
                },2000);

            }
        }
        else if(this.readyState== 4){
            document.getElementById('npf-err-msg').classList.toggle('d-none');
            setTimeout(()=>{
            document.getElementById('npf-err-msg').classList.toggle('d-none');
            },3000)
        }
    };
    // xtp.open("POST", "https://dinero-server.herokuapp.com/new-emp.php", true);
    // xtp.open("POST", "http://localhost/Server/new-emp.php", true);
    // xtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xtp.send(`pid=${pid} & uid=${uid} & empname=${empname} & paydate=${paydate} & basicpay=${basicpay} & da=${da} & hra=${hra} & cca=${cca} & inslic=${inslic} & sli=${sli} & gpf=${gpf}`);
}