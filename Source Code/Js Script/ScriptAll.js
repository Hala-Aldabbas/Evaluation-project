//****************************************************************************************************************************************************************************************** */
//*********************************************************************  Evaluation page Script**************************************************************************** */


let employeeNamex=[];
let select=document.getElementById("EmployeSelector");
let options = document.getElementsByTagName("option");
let employeeName; 

function showUserName(){
// To get data of who loged in from session storage :
let userName=sessionStorage.getItem('name');
document.getElementById('UserName').innerHTML=userName;
}

// ******************************* For Employe info Section  **************************************************

// Araay  For Adding Employee Data 
// let RatingData={};
let names=[];
let idnum=[];
let n=0000;
for(i=1;i<options.length;i++){
idnum.push('000'+n+i)
names.push(options[i].value)
}

let employee = {
Name: names,
id: idnum,
Department: ["Enginering","It Department","It Department","Human Resources","Enginering","Enginering","It Department","It Department","Human Resources","Enginering","Enginering","It Department","It Department","Human Resources","Enginering",],
};


// document.getElementById("EmployeSelector").onchange = function () {getinfo()};    ///  ===> Function on change for the select 
function getinfo() {
  let userName=sessionStorage.getItem('name');
document.getElementById("EmployeData").style.display= 'grid';
document.getElementById("namesLable").style.marginTop= "0px";
 select = document.getElementById("EmployeSelector");
 employeeName = select.options[select.selectedIndex].value;

for(i=0;i<options.length;i++){
  if (employeeName == employee["Name"][i]) {
    document.getElementById("Name-data").innerHTML = employeeName;
    document.getElementById("id-data").innerHTML = employee["id"][i];
    document.getElementById("department-data").innerHTML =employee["Department"][i];
    document.getElementById("userPic").src = "./img/u"+i+".jpg"; 
    let idx = employee["id"][i];
    // let empxarr=employee["employeeAray"][i];
    employeeNamex=employeeName+i;
    employeeNamex=[];
    employeeNamex.push({evaluatedBy: userName,employee: employeeName,idNum: idx,});
    // RatingData[employeeName]=employeeNamex;
    localStorage.setItem(employeeName, JSON.stringify(employeeNamex));

  }}

document.getElementById("formSection").style.display = "none";
// document.getElementById("Start-Evaluation").style.marginBottom = "13%";

}
//*************************************************************************************************************************************** 


// document.getElementById("Start-Evaluation").onclick = function () {StartE()};     ///  ===> Function on click to start evaluation form 
function StartE() {
document.getElementById("formSection").style.display = "block";
document.getElementById("Start-Evaluation").style.marginBottom = "0px";

}

//*************************************************************************************************************************************** 
function submitForm(event) {      
                                              ///  ===> Function on submit to submit Radio input Value
select = document.getElementById("EmployeSelector");
employeeName = select.options[select.selectedIndex].value;
let radioButtons = document.getElementsByTagName("input");


for (i = 0; i < radioButtons.length; i++) {
  if (radioButtons[i].checked) {
    let Qn = radioButtons[i].value;
      obj={Qn}
      employeeNamex.push(obj);
      localStorage.setItem(employeeName, JSON.stringify(employeeNamex));
  }

}
}

// document.getElementById("MainForm").addEventListener('submit',Sucsses)
function Sucsses(){
alert(employeeName+' evaluation successfully')
}



//*************************************************************************************************************************************** 
function clearUserSession(event){                                             ///  ===> Function To Clear Session Storage on LogOut
sessionStorage.clear();
}
//***************************************************************************************************************************************




//****************************************************************************************************************************************************************************************** */
//******************************************************************************  Log in Page script ************************************************************************************* */


function loginUser() {
  let key = false;
let uIndex = null;
let formData = JSON.parse(localStorage.getItem('formData')) || [];
formData.forEach((element, arrayIndex) => {
    if (element.mail == email.value) {
        key = true;
        uIndex = arrayIndex;
    }
});

if (key && formData[uIndex].pass == password.value) {


    sessionStorage.mail = formData[uIndex].mail;

    sessionStorage.name = formData[uIndex].name;

    console.log("logged in successfuly ");

} else if (key && formData[uIndex].pass !== password.value) {

    document.getElementById("pass_err").innerHTML =
  "Wrong password Please try again";
    return false;

} else if (!key) {

    document.getElementById("email_err").innerHTML =
  "Account not found Sign up please";
    return false;

} else {
    console.log("hey!");
}

}



//****************************************************************************************************************************************************************************************** */
//******************************************************************************  Sign Up Page script ************************************************************************************* */

function validation() {
    var name = document.getElementById("Username").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var Regexname = /^[A-Za-z]{3,20}/;
    var Regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var Regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    var errorNum = 0;
  
    if (Regexname.test(name)) {
      document.getElementById("name_err").innerHTML = "";
    } else {
      document.getElementById("name_err").innerHTML =
        "Please Enter a valid  name";
      errorNum++;
    }
    if (Regexemail.test(email)) {
      document.getElementById("email_err").innerHTML = "";
    } else {
      document.getElementById("email_err").innerHTML =
        "Please Enter a valid email";
        errorNum++;
    }
  
    if (Regexpass.test(pass)) {
      document.getElementById("pass_err").innerHTML = "";
    } else {
      document.getElementById("pass_err").innerHTML =
        "Please Enter a valid password";
        errorNum++;
    }
  
    if (errorNum > 0 ) {
        return false;
    }
  
    if ( Regexname.test(name)&&Regexemail.test(email)&&Regexpass.test(pass)){
      let formData = JSON.parse(localStorage.getItem('formData')) || [];
      formData.push({mail: email,pass: pass,name:name});
      localStorage.setItem('formData', JSON.stringify(formData));
      alert("Your account has been created");
    }}






//****************************************************************************************************************************************************************************************** */
//******************************************************************************  Result Page script ************************************************************************************* */


function clearUserSession(event){
  sessionStorage.clear();
}

function resultForm(event){
  event.preventDefault();  
   let steven = JSON.parse(localStorage.getItem("Steven King")) || [];
console.log(steven)
  document.getElementById("res1").innerHTML=steven[1]["Qn"];
  document.getElementById("res2").innerHTML=steven[2]["Qn"];
  document.getElementById("res3").innerHTML=steven[3]["Qn"];
  document.getElementById("res4").innerHTML=steven[4]["Qn"];
  document.getElementById("res5").innerHTML=steven[5]["Qn"];
  document.getElementById("res6").innerHTML=steven[6]["Qn"];
  document.getElementById("res7").innerHTML=steven[7]["Qn"];
  document.getElementById("res8").innerHTML=steven[8]["Qn"];
  document.getElementById("res9").innerHTML=steven[9]["Qn"];

//  for first quastion
  if( steven[1]["Qn"] == "Poor"){
  document.getElementById("res1").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage").innerHTML= "I Recommend make this employee to work flexible hours "
}
else if(steven[1]["Qn"] == "Good"){
  document.getElementById("res1").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(steven[1]["Qn"] == "Excellent"){
  document.getElementById("res1").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for second quastion
if( steven[2]["Qn"] == "Poor"){
  document.getElementById("res2").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage2").innerHTML= "I Recommend make this employee to attend a session about creativity "
}
else if(steven[2]["Qn"] == "Good"){

document.getElementById("res2").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(steven[2]["Qn"] == "Excellent"){
  document.getElementById("res2").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 3 quastion
if( steven[3]["Qn"] == "Poor"){
  document.getElementById("res3").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage3").innerHTML= "I Recommend the company to make party and activities for the employees to improve their Relationships"
}
else if(steven[3]["Qn"] == "Good"){
  document.getElementById("res3").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(steven[3]["Qn"] == "Excellent"){
  document.getElementById("res3").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}

//  for 4 quastion
if( steven[4]["Qn"] == "Poor"){
  document.getElementById("res4").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage4").innerHTML= " I Recommend make this employee to attend a massive courses "
}
else if(steven[4]["Qn"] == "Good"){
  document.getElementById("res4").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(steven[4]["Qn"] == "Excellent"){
  document.getElementById("res4").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 5 quastion
if( steven[5]["Qn"] == "Poor"){
  document.getElementById("res5").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage5").innerHTML= "I Recommend make this employee to work more hours to increase his productivity "
}
else if(steven[5]["Qn"] == "Good"){

document.getElementById("res5").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(steven[5]["Qn"] == "Excellent"){
  document.getElementById("res5").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 6 quastion
if( steven[6]["Qn"] == "Poor"){
  document.getElementById("res6").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage6").innerHTML= "I Recommend make this employee to attend a communication skills courses"
}
else if(steven[6]["Qn"] == "Good"){
  document.getElementById("res6").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(steven[6]["Qn"] == "Excellent"){
  document.getElementById("res6").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 7 quastion
if( steven[7]["Qn"] == "Poor"){
  document.getElementById("res7").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage7").innerHTML= " I Recommend make this employee to attend a massive courses about coding language"
}
else if(steven[7]["Qn"] == "Good"){
  document.getElementById("res7").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(steven[7]["Qn"] == "Excellent"){
  document.getElementById("res7").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 8 quastion
if( steven[8]["Qn"] == "Poor"){
  document.getElementById("res8").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage8").innerHTML= " I Recommend make this employee to focus on understand the problem first before try to solve it "
}
else if(steven[8]["Qn"] == "Good"){

document.getElementById("res8").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(steven[8]["Qn"] == "Excellent"){
  document.getElementById("res8").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 9 quastion
if( steven[9]["Qn"] == "Poor"){
  document.getElementById("res9").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage9").innerHTML= "I Recommend make this employee to attend a massive courses on (SEO) Search Engine Optimization "
}
else if(steven[9]["Qn"] == "Good"){
  document.getElementById("res9").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(steven[9]["Qn"] == "Excellent"){
  document.getElementById("res9").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
}



function resultForm2(event){
  event.preventDefault();  
   let julia = JSON.parse(localStorage.getItem("Julia Markle")) || [];
console.log(julia)
  document.getElementById("res-emp2-1").innerHTML=julia[1]["Qn"];
  document.getElementById("res-emp2-2").innerHTML=julia[2]["Qn"];
  document.getElementById("res-emp2-3").innerHTML=julia[3]["Qn"];
  document.getElementById("res-emp2-4").innerHTML=julia[4]["Qn"];
  document.getElementById("res-emp2-5").innerHTML=julia[5]["Qn"];
  document.getElementById("res-emp2-6").innerHTML=julia[6]["Qn"];
  document.getElementById("res-emp2-7").innerHTML=julia[7]["Qn"];
  document.getElementById("res-emp2-8").innerHTML=julia[8]["Qn"];
  document.getElementById("res-emp2-9").innerHTML=julia[9]["Qn"];

//  for first quastion
  if( julia[1]["Qn"] == "Poor"){
  document.getElementById("res-emp2-1").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp2-1").innerHTML= "I Recommend make this employee to work flexible hours "
}
else if(julia[1]["Qn"] == "Good"){
  document.getElementById("res-emp2-1").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(julia[1]["Qn"] == "Excellent"){
  document.getElementById("res-emp2-1").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for second quastion
if( julia[2]["Qn"] == "Poor"){
  document.getElementById("res-emp2-2").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp2-2").innerHTML= "I Recommend make this employee to attend a session about creativity "
}
else if(julia[2]["Qn"] == "Good"){

document.getElementById("res-emp2-2").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(julia[2]["Qn"] == "Excellent"){
  document.getElementById("res-emp2-2").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 3 quastion
if( julia[3]["Qn"] == "Poor"){
  document.getElementById("res-emp2-3").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp2-3").innerHTML= "I Recommend the company to make party and activities for the employees to improve their Relationships"
}
else if(julia[3]["Qn"] == "Good"){
  document.getElementById("res-emp2-3").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(julia[3]["Qn"] == "Excellent"){
  document.getElementById("res-emp2-3").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}

//  for 4 quastion
if( julia[4]["Qn"] == "Poor"){
  document.getElementById("res-emp2-4").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp2-4").innerHTML= " I Recommend make this employee to attend a massive courses "
}
else if(julia[4]["Qn"] == "Good"){
  document.getElementById("res-emp2-4").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(julia[4]["Qn"] == "Excellent"){
  document.getElementById("res-emp2-4").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 5 quastion
if( julia[5]["Qn"] == "Poor"){
  document.getElementById("res-emp2-5").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp2-5").innerHTML= "I Recommend make this employee to work more hours to increase his productivity "
}
else if(julia[5]["Qn"] == "Good"){

document.getElementById("res-emp2-5").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(julia[5]["Qn"] == "Excellent"){
  document.getElementById("res-emp2-5").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 6 quastion
if( julia[6]["Qn"] == "Poor"){
  document.getElementById("res-emp2-6").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp2-6").innerHTML= "I Recommend make this employee to attend a communication skills courses"
}
else if(julia[6]["Qn"] == "Good"){
  document.getElementById("res-emp2-6").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(julia[6]["Qn"] == "Excellent"){
  document.getElementById("res-emp2-6").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 7 quastion
if( julia[7]["Qn"] == "Poor"){
  document.getElementById("res-emp2-7").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp2-7").innerHTML= " I Recommend make this employee to attend a massive courses about coding language"
}
else if(julia[7]["Qn"] == "Good"){
  document.getElementById("res-emp2-7").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(julia[7]["Qn"] == "Excellent"){
  document.getElementById("res-emp2-7").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 8 quastion
if( julia[8]["Qn"] == "Poor"){
  document.getElementById("res-emp2-8").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp2-8").innerHTML= " I Recommend make this employee to focus on understand the problem first before try to solve it "
}
else if(julia[8]["Qn"] == "Good"){

document.getElementById("res-emp2-8").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(julia[8]["Qn"] == "Excellent"){
  document.getElementById("res-emp2-8").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 9 quastion
if( julia[9]["Qn"] == "Poor"){
  document.getElementById("res-emp2-9").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp2-9").innerHTML= "I Recommend make this employee to attend a massive courses on (SEO) Search Engine Optimization "
}
else if(julia[9]["Qn"] == "Good"){
  document.getElementById("res-emp2-9").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(julia[9]["Qn"] == "Excellent"){
  document.getElementById("res-emp2-9").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
}


function resultForm3(event){
  event.preventDefault();  
   let john = JSON.parse(localStorage.getItem("John Russell")) || [];
console.log(john)
  document.getElementById("res-emp3-1").innerHTML=john[1]["Qn"];
  document.getElementById("res-emp3-2").innerHTML=john[2]["Qn"];
  document.getElementById("res-emp3-3").innerHTML=john[3]["Qn"];
  document.getElementById("res-emp3-4").innerHTML=john[4]["Qn"];
  document.getElementById("res-emp3-5").innerHTML=john[5]["Qn"];
  document.getElementById("res-emp3-6").innerHTML=john[6]["Qn"];
  document.getElementById("res-emp3-7").innerHTML=john[7]["Qn"];
  document.getElementById("res-emp3-8").innerHTML=john[8]["Qn"];
  document.getElementById("res-emp3-9").innerHTML=john[9]["Qn"];

//  for first quastion
  if( john[1]["Qn"] == "Poor"){
  document.getElementById("res-emp3-1").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp3-1").innerHTML= "I Recommend make this employee to work flexible hours "
}
else if(john[1]["Qn"] == "Good"){
  document.getElementById("res-emp3-1").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(john[1]["Qn"] == "Excellent"){
  document.getElementById("res-emp3-1").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for second quastion
if( john[2]["Qn"] == "Poor"){
  document.getElementById("res-emp3-2").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp3-2").innerHTML= "I Recommend make this employee to attend a session about creativity "
}
else if(john[2]["Qn"] == "Good"){

document.getElementById("res-emp3-2").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(john[2]["Qn"] == "Excellent"){
  document.getElementById("res-emp3-2").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 3 quastion
if( john[3]["Qn"] == "Poor"){
  document.getElementById("res-emp3-3").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp3-3").innerHTML= "I Recommend the company to make party and activities for the employees to improve their Relationships"
}
else if(john[3]["Qn"] == "Good"){
  document.getElementById("res-emp3-3").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(john[3]["Qn"] == "Excellent"){
  document.getElementById("res-emp3-3").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}

//  for 4 quastion
if( john[4]["Qn"] == "Poor"){
  document.getElementById("res-emp3-4").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp3-4").innerHTML= " I Recommend make this employee to attend a massive courses "
}
else if(john[4]["Qn"] == "Good"){
  document.getElementById("res-emp3-4").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(john[4]["Qn"] == "Excellent"){
  document.getElementById("res-emp3-4").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 5 quastion
if( john[5]["Qn"] == "Poor"){
  document.getElementById("res-emp3-5").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp3-5").innerHTML= "I Recommend make this employee to work more hours to increase his productivity "
}
else if(john[5]["Qn"] == "Good"){

document.getElementById("res-emp3-5").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(john[5]["Qn"] == "Excellent"){
  document.getElementById("res-emp3-5").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 6 quastion
if( john[6]["Qn"] == "Poor"){
  document.getElementById("res-emp3-6").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp3-6").innerHTML= "I Recommend make this employee to attend a communication skills courses"
}
else if(john[6]["Qn"] == "Good"){
  document.getElementById("res-emp3-6").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(john[6]["Qn"] == "Excellent"){
  document.getElementById("res-emp3-6").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 7 quastion
if( john[7]["Qn"] == "Poor"){
  document.getElementById("res-emp3-7").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp3-7").innerHTML= " I Recommend make this employee to attend a massive courses about coding language"
}
else if(john[7]["Qn"] == "Good"){
  document.getElementById("res-emp3-7").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(john[7]["Qn"] == "Excellent"){
  document.getElementById("res-emp3-7").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 8 quastion
if( john[8]["Qn"] == "Poor"){
  document.getElementById("res-emp3-8").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp3-8").innerHTML= " I Recommend make this employee to focus on understand the problem first before try to solve it "
}
else if(john[8]["Qn"] == "Good"){

document.getElementById("res-emp3-8").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(john[8]["Qn"] == "Excellent"){
  document.getElementById("res-emp3-8").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 9 quastion
if( john[9]["Qn"] == "Poor"){
  document.getElementById("res-emp3-9").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp3-9").innerHTML= "I Recommend make this employee to attend a massive courses on (SEO) Search Engine Optimization "
}
else if(john[9]["Qn"] == "Good"){
  document.getElementById("res-emp3-9").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(john[9]["Qn"] == "Excellent"){
  document.getElementById("res-emp3-9").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
}


function resultForm4(event){
  event.preventDefault();  
   let peter = JSON.parse(localStorage.getItem("Peter Tucker")) || [];
console.log(peter)
  document.getElementById("res-emp4-1").innerHTML=peter[1]["Qn"];
  document.getElementById("res-emp4-2").innerHTML=peter[2]["Qn"];
  document.getElementById("res-emp4-3").innerHTML=peter[3]["Qn"];
  document.getElementById("res-emp4-4").innerHTML=peter[4]["Qn"];
  document.getElementById("res-emp4-5").innerHTML=peter[5]["Qn"];
  document.getElementById("res-emp4-6").innerHTML=peter[6]["Qn"];
  document.getElementById("res-emp4-7").innerHTML=peter[7]["Qn"];
  document.getElementById("res-emp4-8").innerHTML=peter[8]["Qn"];
  document.getElementById("res-emp4-9").innerHTML=peter[9]["Qn"];

//  for first quastion
  if( peter[1]["Qn"] == "Poor"){
  document.getElementById("res-emp4-1").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp4-1").innerHTML= "I Recommend make this employee to work flexible hours "
}
else if(peter[1]["Qn"] == "Good"){
  document.getElementById("res-emp4-1").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(peter[1]["Qn"] == "Excellent"){
  document.getElementById("res-emp4-1").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for second quastion
if( peter[2]["Qn"] == "Poor"){
  document.getElementById("res-emp4-2").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp4-2").innerHTML= "I Recommend make this employee to attend a session about creativity "
}
else if(peter[2]["Qn"] == "Good"){

document.getElementById("res-emp4-2").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(peter[2]["Qn"] == "Excellent"){
  document.getElementById("res-emp4-2").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 3 quastion
if( peter[3]["Qn"] == "Poor"){
  document.getElementById("res-emp4-3").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp4-3").innerHTML= "I Recommend the company to make party and activities for the employees to improve their Relationships"
}
else if(peter[3]["Qn"] == "Good"){
  document.getElementById("res-emp4-3").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(peter[3]["Qn"] == "Excellent"){
  document.getElementById("res-emp4-3").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}

//  for 4 quastion
if( peter[4]["Qn"] == "Poor"){
  document.getElementById("res-emp4-4").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp4-4").innerHTML= " I Recommend make this employee to attend a massive courses "
}
else if(peter[4]["Qn"] == "Good"){
  document.getElementById("res-emp4-4").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(peter[4]["Qn"] == "Excellent"){
  document.getElementById("res-emp4-4").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 5 quastion
if( peter[5]["Qn"] == "Poor"){
  document.getElementById("res-emp4-5").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp4-5").innerHTML= "I Recommend make this employee to work more hours to increase his productivity "
}
else if(peter[5]["Qn"] == "Good"){

document.getElementById("res-emp4-5").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(peter[5]["Qn"] == "Excellent"){
  document.getElementById("res-emp4-5").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 6 quastion
if( peter[6]["Qn"] == "Poor"){
  document.getElementById("res-emp4-6").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp4-6").innerHTML= "I Recommend make this employee to attend a communication skills courses"
}
else if(peter[6]["Qn"] == "Good"){
  document.getElementById("res-emp4-6").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(peter[6]["Qn"] == "Excellent"){
  document.getElementById("res-emp4-6").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 7 quastion
if( peter[7]["Qn"] == "Poor"){
  document.getElementById("res-emp4-7").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp4-7").innerHTML= " I Recommend make this employee to attend a massive courses about coding language"
}
else if(peter[7]["Qn"] == "Good"){
  document.getElementById("res-emp4-7").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(peter[7]["Qn"] == "Excellent"){
  document.getElementById("res-emp4-7").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 8 quastion
if( peter[8]["Qn"] == "Poor"){
  document.getElementById("res-emp4-8").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp4-8").innerHTML= " I Recommend make this employee to focus on understand the problem first before try to solve it "
}
else if(peter[8]["Qn"] == "Good"){

document.getElementById("res-emp4-8").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(peter[8]["Qn"] == "Excellent"){
  document.getElementById("res-emp4-8").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 9 quastion
if( peter[9]["Qn"] == "Poor"){
  document.getElementById("res-emp4-9").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp4-9").innerHTML= "I Recommend make this employee to attend a massive courses on (SEO) Search Engine Optimization "
}
else if(peter[9]["Qn"] == "Good"){
  document.getElementById("res-emp4-9").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(peter[9]["Qn"] == "Excellent"){
  document.getElementById("res-emp4-9").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
}


function resultForm5(event){
  event.preventDefault();  
   let eleni = JSON.parse(localStorage.getItem("Eleni Rose")) || [];
console.log(eleni)
  document.getElementById("res-emp5-1").innerHTML=eleni[1]["Qn"];
  document.getElementById("res-emp5-2").innerHTML=eleni[2]["Qn"];
  document.getElementById("res-emp5-3").innerHTML=eleni[3]["Qn"];
  document.getElementById("res-emp5-4").innerHTML=eleni[4]["Qn"];
  document.getElementById("res-emp5-5").innerHTML=eleni[5]["Qn"];
  document.getElementById("res-emp5-6").innerHTML=eleni[6]["Qn"];
  document.getElementById("res-emp5-7").innerHTML=eleni[7]["Qn"];
  document.getElementById("res-emp5-8").innerHTML=eleni[8]["Qn"];
  document.getElementById("res-emp5-9").innerHTML=eleni[9]["Qn"];

//  for first quastion
  if( eleni[1]["Qn"] == "Poor"){
  document.getElementById("res-emp5-1").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp5-1").innerHTML= "I Recommend make this employee to work flexible hours "
}
else if(eleni[1]["Qn"] == "Good"){
  document.getElementById("res-emp5-1").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(eleni[1]["Qn"] == "Excellent"){
  document.getElementById("res-emp5-1").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for second quastion
if( eleni[2]["Qn"] == "Poor"){
  document.getElementById("res-emp5-2").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp5-2").innerHTML= "I Recommend make this employee to attend a session about creativity "
}
else if(eleni[2]["Qn"] == "Good"){

document.getElementById("res-emp5-2").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(eleni[2]["Qn"] == "Excellent"){
  document.getElementById("res-emp5-2").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 3 quastion
if( eleni[3]["Qn"] == "Poor"){
  document.getElementById("res-emp5-3").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp5-3").innerHTML= "I Recommend the company to make party and activities for the employees to improve their Relationships"
}
else if(eleni[3]["Qn"] == "Good"){
  document.getElementById("res-emp5-3").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(eleni[3]["Qn"] == "Excellent"){
  document.getElementById("res-emp5-3").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}

//  for 4 quastion
if( eleni[4]["Qn"] == "Poor"){
  document.getElementById("res-emp5-4").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp5-4").innerHTML= " I Recommend make this employee to attend a massive courses "
}
else if(eleni[4]["Qn"] == "Good"){
  document.getElementById("res-emp5-4").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(eleni[4]["Qn"] == "Excellent"){
  document.getElementById("res-emp5-4").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 5 quastion
if( eleni[5]["Qn"] == "Poor"){
  document.getElementById("res-emp5-5").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp5-5").innerHTML= "I Recommend make this employee to work more hours to increase his productivity "
}
else if(eleni[5]["Qn"] == "Good"){

document.getElementById("res-emp5-5").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(eleni[5]["Qn"] == "Excellent"){
  document.getElementById("res-emp5-5").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 6 quastion
if( eleni[6]["Qn"] == "Poor"){
  document.getElementById("res-emp5-6").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp5-6").innerHTML= "I Recommend make this employee to attend a communication skills courses"
}
else if(eleni[6]["Qn"] == "Good"){
  document.getElementById("res-emp5-6").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(eleni[6]["Qn"] == "Excellent"){
  document.getElementById("res-emp5-6").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 7 quastion
if( eleni[7]["Qn"] == "Poor"){
  document.getElementById("res-emp5-7").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp5-7").innerHTML= " I Recommend make this employee to attend a massive courses about coding language"
}
else if(eleni[7]["Qn"] == "Good"){
  document.getElementById("res-emp5-7").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(eleni[7]["Qn"] == "Excellent"){
  document.getElementById("res-emp5-7").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 8 quastion
if( eleni[8]["Qn"] == "Poor"){
  document.getElementById("res-emp5-8").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp5-8").innerHTML= " I Recommend make this employee to focus on understand the problem first before try to solve it "
}
else if(eleni[8]["Qn"] == "Good"){

document.getElementById("res-emp5-8").style.cssText = `
background-color :yellow;
color: white ;
width : 150px ;
padding : 8px ;
text-align : center ;
`;
}else if(eleni[8]["Qn"] == "Excellent"){
  document.getElementById("res-emp5-8").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
//  for 9 quastion
if( eleni[9]["Qn"] == "Poor"){
  document.getElementById("res-emp5-9").style.cssText = `
  background-color :red;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
  document.getElementById("poorMassage-emp5-9").innerHTML= "I Recommend make this employee to attend a massive courses on (SEO) Search Engine Optimization "
}
else if(eleni[9]["Qn"] == "Good"){
  document.getElementById("res-emp5-9").style.cssText = `
  background-color :yellow;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}else if(eleni[9]["Qn"] == "Excellent"){
  document.getElementById("res-emp5-9").style.cssText = `
  background-color :green;
  color: white ;
  width : 150px ;
  padding : 8px ;
  text-align : center ;
`;
}
}