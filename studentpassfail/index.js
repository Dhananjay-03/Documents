
 const calcy=() => {
   let a1=document.getElementById('a1').value;
   let a2=document.getElementById('a2').value;
   let a3=document.getElementById('a3').value;
   let a4=document.getElementById('a4').value;
   let totalGrades= parseFloat(a1)+parseFloat(a2)+parseFloat(a3)+parseFloat(a4);
   alert(totalGrades);
   let per=(totalGrades/400)*100;
   let grades="";
   if(per<100 && per>80)
   {
     //alert("congrats you are pass");
     grades='A';
   }
   else if(per<80 && per>70)
    {
    // alert(" sorry ! you are fail");
    grades='B';
   }
   else if(per<60 && per>50)
   {
     grades='C';
   }
   else if(per<50 && per>33)
   {
     grades='D';
   }
   else
    {
     grades='F';
   }
   if(per>=39.5)
   {
     document.getElementById("showData").innerHTML= `out of 400 your total is ${totalGrades} <br> and percentage is ${per}% <br> and your grade is ${grades} and you are passed`
     }
     else
       {
         document.getElementById("showData").innerHTML= `out of 400 your total is ${totalGrades} <br> and percentage is ${per}% <br> and your grade is ${grades} and you are fail`

       }

 }
