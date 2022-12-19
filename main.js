function handleClose(params) {
  if (document.getElementById(params).style.display == "none") {
    document.getElementById(params).style.display = "block";
  } else {
    document.getElementById(params).style.display = "none";
  }
}
handleConformation = () => {
  let id = Math.round(Math.random() * 10000000);
  let Username = document.getElementById("incName").value;
  let email = document.getElementById("inEmail").value;
  let password = document.getElementById("inpass").value;
  let contactNum = document.getElementById("contactNum").value;
  let nomineeName = document.getElementById("nomineeName").value;
  let relationship = document.getElementById("relationship").value;
  let check = document.getElementById("check");
  console.log(check);
  if( Username==="" || email==="" || password==="" || contactNum==="" || nomineeName==="" || relationship===""){
    alert('Please Enter Required Field');
  }else if( check.checked===false ){
    alert('Please Check the Check Box');
  }
  else{
  window.localStorage.setItem("username", Username);
  window.localStorage.setItem("password", password);
  window.localStorage.setItem("id", id);
  let policy=""
  window.localStorage.setItem("Policys", policy);
  document.getElementById("customerId").innerText = id;
  document.getElementById("customerName").innerText = Username;
  document.getElementById("customerEmail").innerText =
    document.getElementById("inEmail").value;
  handleClose("conformation");
  handleClose("registerForm");
}
};
function handleLogin() {
  document.getElementById("conformation").style.display = "none";
  document.getElementById("login").style.display = "block";
}
login = () => {
  let x = document.getElementById("inuserName").value;
  let y = document.getElementById("inpassword").value;
  
  if ( x==="" && y===""){
        alert('pls enter the details');

  }else if (y===""){
    alert('pls enter the password'); 
}
  else if (x===""){
    alert('pls enter the username'); 
}
  else{
      console.log(x,y);
    if (
        x === window.localStorage.getItem("username") &&
        y === window.localStorage.getItem("password")
    ) {
        console.log("correct");
        // document.getElementById('loginSuccess').style.display='block';
        document.getElementById("welcomemassg").innerText = "welcome"+"  " + window.localStorage.getItem("username");
        handleClose("login");
        handleClose("customerPage");
        document.getElementById('loginBtn').innerHTML=window.localStorage.getItem('username')+" "+'<i class="fa-solid fa-user">'
    } else {
        handleClose("login");
        console.log("incorrect");
        alert('your password incorrect');
  }
  }
  
};
function logout(){
    handleClose('login');
    handleClose('customerPage')
    document.getElementById('loginBtn').innerHTML=" login "+'<i class="fa-solid fa-user">'
    document.getElementById("inuserName").value="";
    document.getElementById("inpassword").value="";
    

}
function handleSelectPolicy(){
  let policyType=document.getElementById('policyType').value;
  let policyTitle=document.getElementById('policyTitle').value;
  let sumAssured=document.getElementById('sumAssured').value;
  let preinumAmount=document.getElementById('preminumAmont').value;
  let policyTerm=document.getElementById('policyTerm').value;
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let dYear = currentDate.getFullYear() +1;
  let cDate= cDay + "/" + cMonth + "/" + cYear;
  let dDate = cDay +"/"+cMonth+"/"+dYear;
  let userPolicy = {
    'cdate':cDate,
    'PolicyType':policyType,
    'PolicyTitle':policyTitle,
    'SumAssured':sumAssured,
    'PreinumAmount':preinumAmount,
    'PolicyTerm':policyTerm,
    'DueDate': dDate
  }
  window.localStorage.setItem('Policys',JSON.stringify(userPolicy));
  handleClose('choosepolices');
  document.getElementById('massg').innerText='Policy Taken Succesfully !'
}
function handleViewPolicy(){
  handleClose('viewpolices');
  let x= window.localStorage.getItem('Policys');
  let y=JSON.parse(x)
  document.getElementById('cdate').innerHTML=y['cdate'];
  document.getElementById('pType').innerHTML=y['PolicyType'];
  document.getElementById('pTitle').innerHTML=y['PolicyTitle'];
  document.getElementById('pAmount').innerHTML=y['PreinumAmount'];
  document.getElementById('ddate').innerHTML=y['DueDate'];
  document.getElementById('sumAssu').innerHTML=y['SumAssured'];
  
}