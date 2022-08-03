<?php 
switch ($_GET['site']) {
    case 'AD':
        include_once("admin-Dash.html"); 
        break;
    case 'AS':
        include_once("Annual-Summary.html");
        break;
    case 'DU':
        include_once("Dashboard-user.html");
        break;
    case 'E':
        include_once("employees.html");
        break;
    case 'PV':
        include_once("payment-view.html");
        break;
    case 'P':
        include_once("Profile.html");
        break;
    case 'SD':
        include_once("Salary-Details.html");
        break;
    default:
        include_once("index.html"); 
        break;
}
?>