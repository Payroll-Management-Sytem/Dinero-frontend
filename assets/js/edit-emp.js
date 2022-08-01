var token, emps, dt,uid;
const uid_select_form = document.getElementById('uid-select');
const detail_form = document.getElementById('details-form');
const uidListP = document.getElementById('euid');
var dgender = "";
document.getElementById('dgender_0').addEventListener("click", () => { dgender = "Male"; })
document.getElementById('dgender_1').addEventListener("click", () => { dgender = "Female"; })
document.getElementById('dgender_2').addEventListener("click", () => { dgender = "Other"; })
function getU() {
    console.log(uidList.value);
    var xtp = new XMLHttpRequest();
    xtp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            emps = this.responseText.split("[o]");
            console.log(emps);
            emps.forEach(emp => {
                dt = emp.split('<>');
                op = document.createElement('option');
                op.value = dt[0];
                op.textContent = dt[0];
                op.id = dt[0];
                uidListP.appendChild(op);
            });
        }
    };
    xtp.open("POST", "https://dinero-server.herokuapp.com/enu.php", true);
    // xtp.open("POST", "http://localhost/Server/enu.php", true);
    xtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xtp.send(`uid=${token}`);
}
document.getElementById('edit-emp').addEventListener("click", getU);
uid_select_form.onsubmit = (e) => {
    uid = document.getElementById('euid').value;
    e.preventDefault();
    xtp = new XMLHttpRequest();
    xtp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var details = this.responseText.split('<>');
            document.getElementById('dusername').value = details[1];
            document.getElementById('dempname').value = details[3];
            document.getElementById('duid').value = details[0];
            document.getElementById('dpass').value = details[10];
            document.getElementById('dempid').value = details[2];
            document.getElementById('dage').value = details[4];
            document.getElementById('ddob').value = details[5];
            document.getElementById('ddoj').value = details[7];
            document.getElementById('ddesig').value = details[8];
            document.getElementById('dofc').value = details[9];
            if (this.responseText) {

            }
        }
    };
    xtp.open("POST", "https://dinero-server.herokuapp.com/aDU.php", true);
    // xtp.open("POST", "http://localhost/Server/new-pay.php", true);
    xtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // console.log(`pid=${pid}&uid=${uid}&empname=${empname}&paydate=${paydate}&basicpay=${basicpay}&da=${da}&hra=${hra}&cca=${cca}&insurancelic=${inslic} & sli=${sli}&gpf=${gpf}`);
    xtp.send(`uid=${uid}`);

}
detail_form.onsubmit = (e)=>{
    e.preventDefault();
    var username=document.getElementById('dusername').value;
    var empname = document.getElementById('dempname').value; 
    var duid = document.getElementById('duid').value; 
    var pass = document.getElementById('dpass').value; 
    var empid = document.getElementById('dempid').value; 
    var age = document.getElementById('dage').value; 
    var dob = document.getElementById('ddob').value;  
    var doj = document.getElementById('ddoj').value; 
    var desig = document.getElementById('ddesig').value; 
    var ofc = document.getElementById('dofc').value; 
    var xtp = new XMLHttpRequest();
    var xtp = new XMLHttpRequest();
    xtp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if(this.responseText=="success"){
                document.getElementById('dnef-sub').classList.toggle('d-none');
                document.getElementById('dnef-sus-msg').classList.toggle('d-none');
                
                setTimeout(()=>{
                    document.getElementById('emp-edit').classList.toggle('d-none');
                    document.getElementById('about').classList.toggle('d-none');
                    document.getElementById('dnef-sub').classList.toggle('d-none');
                    document.getElementById('dnef-sus-msg').classList.toggle('d-none');
                    detail_form.reset();
                    uid_select_form.reset();
                },2000);

            }
        }
        else if(this.readyState== 4){
            document.getElementById('dnef-err-msg').classList.toggle('d-none');
            setTimeout(()=>{
            document.getElementById('dnef-err-msg').classList.toggle('d-none');
            },3000)
        }
    };
    xtp.open("POST", "https://dinero-server.herokuapp.com/update.php", true);
    // xtp.open("POST", "http://localhost/Server/update.php", true);
    xtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xtp.send(`username=${username}&empname=${empname}&uid=${duid}&pass=${pass}&empid=${empid}&age=${age}&dob=${dob}&gender=${dgender}&doj=${doj}&desig=${desig}&ofc=${ofc}&old=${uid}`);

}