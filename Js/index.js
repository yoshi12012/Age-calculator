function calculate_age()
{
  var birth_year= parseInt (document.getElementById('year').value);
  var raw_birth_year=  (document.getElementById('year').value);
  console.log(birth_year,"year")  
  var birth_day= parseInt (document.getElementById('day').value);
  var raw_birth_day=  (document.getElementById('day').value);
  console.log(birth_day,"day")  
  var birth_month= parseInt (document.getElementById('month').value);
  var raw_birth_month=  (document.getElementById('month').value);
  console.log(birth_month,"month") 
  var current_year= new Date().getFullYear();
  console.log("Currrent year is " , current_year)
  if(birth_day<0 ||birth_month<0 || birth_year<0 ){

   document.getElementById('show-data').innerHTML="Please Enter Number Greater than 0" 
   setTimeout(() => {
     document.getElementById('show-data').innerHTML="" 
    
   },4000);

  }
  else if(birth_day>31 || birth_day<0) {
 document.getElementById('show-data').innerHTML="please enter a number beteween 1-31"

    setTimeout(()=>{
      document.getElementById('show-data').innerHTML="" 
    },4000)

  }
  else if( birth_month>31 || birth_month<0) {

    document.getElementById('show-data').innerHTML="please enter a number beteween 1-12"
    setTimeout(()=>{
      document.getElementById('show-data').innerHTML=""
    },4000)
  }
  else if(birth_year>current_year) {
   
 document.getElementById('show-data').innerHTML="please enter a number less than current year"
 setTimeout(()=>{
  document.getElementById('show-data').innerHTML=""
},4000)
  }
  else if(raw_birth_day=="" || raw_birth_month=="" || raw_birth_year=="") {
   
 document.getElementById('show-data').innerHTML="please enter the Numbers to proceed , empty fields are not accepted"
 setTimeout(()=>{
  document.getElementById('show-data').innerHTML=""
},4000)
  }
  else{

  }

  var current_date = new Date();
  console.log(current_date,"this is current date containing everything like month day year timezone")
  
  var current_year = current_date.getFullYear();
  console.log(current_year,"this is the full year")
  
  var current_month = current_date.getMonth() + 1;
  console.log(current_month,"this is the current month")
  
  var age_years = current_year - birth_year;
  console.log(age_years,"years old")  
 var age_month = current_month - birth_month ;
 console.log(age_month)
  if(current_month<birth_month){
    age_years =age_years - 1;
    age_month= 12 + age_month;
  }
  
  console.log(age_years,"year" ,age_month,"month old")
  document.getElementById('show-data').innerHTML=`<h2> You are ${age_years} years and ${age_month} months old <h2> `

}
// Case 1 : when any number entered is less than 0 ==>> PLease enter number greater than zero
// case 2: When the day is out of range  ==> Please enter days between 1 to 31
// case 3 : when the month is out of range  => Please enter month value in between 1 to 12
// case 4: when year is out of range => PLease enter year less than current year.


// var number = 10; assigning
// number == 10; checking


// HomeWork
// 1. once you got the final caluclated age you can set innerhtml to the folleoing
// `You are ${age_years} and ${age_month} old`
