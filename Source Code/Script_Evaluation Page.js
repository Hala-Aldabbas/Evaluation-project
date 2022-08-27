
  let Steven_King = JSON.parse(localStorage.getItem("Steven_King")) || [];
  let Julia_Markle = JSON.parse(localStorage.getItem("Julia_Markle")) || [];
  let John_Russell = JSON.parse(localStorage.getItem("John_Russell")) || [];
  let Eleni_Rose = JSON.parse(localStorage.getItem("Eleni_Rose")) || [];
  let Peter_Tucker = JSON.parse(localStorage.getItem("Peter_Tucker")) || [];
  let select;
  let employeeName; 
  
// To get data of who loged in from session storage :
  let userName=sessionStorage.getItem('name');
  document.getElementById('UserName').innerHTML=userName

// Araay  For Adding Employee Data 
  let employee = {
    Name: ["Steven King","Julia Markle","John Russell","Peter Tucker","Eleni Rose",],
    id: ["00001", "00002", "00003", "00004", "00005"],
    Department: ["Enginering","It Department","It Department","Human Resources","Enginering",],
    employeeAray:[Steven_King,Julia_Markle,John_Russell,Peter_Tucker,Eleni_Rose,],
  };

// ******************************* For Employe info Section  **************************************************
document.getElementById("EmployeSelector").onchange = function () {getinfo()};    ///  ===> Function on change for the select 
function getinfo() {
   select = document.getElementById("EmployeSelector");
   employeeName = select.options[select.selectedIndex].value;

  for(i=0;i<5;i++){
    if (employeeName == employee["Name"][i]) {
      document.getElementById("Name-data").innerHTML = employeeName;
      document.getElementById("id-data").innerHTML = employee["id"][i];
      document.getElementById("department-data").innerHTML =employee["Department"][i];
      document.getElementById("userPic").src = "./img/u"+i+".jpg"; 
      let idx = employee["id"][i];
      let empxarr=employee["employeeAray"][i];
      empxarr.push({evaluatedBy: userName,employee: employeeName,idNum: idx,});
      localStorage.setItem(employeeName, JSON.stringify(empxarr));
    }}

  document.getElementById("formSection").style.display = "none";
  // document.getElementById("Start-Evaluation").style.marginBottom = "13%";
}
//*************************************************************************************************************************************** 

document.getElementById("Start-Evaluation").onclick = function () {StartE()};     ///  ===> Function on click to start evaluation form 
function StartE() {
  document.getElementById("formSection").style.display = "block";
  document.getElementById("Start-Evaluation").style.marginBottom = "0px";}

//*************************************************************************************************************************************** 
function submitForm(event) {                                                    ///  ===> Function on submit to submit Radio input Value
  select = document.getElementById("EmployeSelector");
  employeeName = select.options[select.selectedIndex].value;
  let radioButtons = document.getElementsByTagName("input");
  
  for (i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {

      let Qn = radioButtons[i].value;
      if (employeeName =="Steven King") {
        let obj = {Qn};
        Steven_King.push(obj);
        localStorage.setItem("Steven King", JSON.stringify(Steven_King));
        // document.getElementById("sk").setAttribute("disabled", "disabled");
      }
       else if (employeeName =="Julia Markle") {
        let obj = {Qn};
        Julia_Markle.push(obj);
        localStorage.setItem("Julia Markle", JSON.stringify(Julia_Markle));
      }
      else if  (employeeName =="John Russell") {
        let obj = {Qn};
        John_Russell.push(obj);
        localStorage.setItem("John Russell", JSON.stringify(John_Russell));
      }
      else if  (employeeName =="Peter Tucker") {
        let obj = {Qn};
        Peter_Tucker.push(obj);
        localStorage.setItem("Peter Tucker", JSON.stringify(Peter_Tucker));
      }
      else if (employeeName =="Eleni Rose") {
        let obj = {Qn};
        Eleni_Rose.push(obj);
        localStorage.setItem("Eleni Rose", JSON.stringify(Eleni_Rose));}}}};

//*************************************************************************************************************************************** 
function clearUserSession(event){                                             ///  ===> Function To Clear Session Storage on LogOut
  sessionStorage.clear();
}
//*************************************************************************************************************************************** 