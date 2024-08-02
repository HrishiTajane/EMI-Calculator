

function fetch()
 {
   var loanAmount=document.getElementById("loanAmount").value;
   document.getElementById("Amount").value=loanAmount;
   document.getElementById("pricipalAmount").innerHTML=loanAmount;
   
   var percent=document.getElementById("percent").value;
   document.getElementById("percentshow").value=percent;
   
   var year=document.getElementById("year").value;
   document.getElementById("yearshow").value=year;
   
   
   var months=year * 12;
   var monthlyInterest= percent / (12*100);
   var powervalue= 1+monthlyInterest;
   var monthlyInterestpower = Math.pow(powervalue,months)
   var totalMonthlyEMI = Math.floor([(loanAmount * monthlyInterest) * (monthlyInterestpower)] / (monthlyInterestpower - 1));   
       document.getElementById("monthly_EMI").innerHTML=totalMonthlyEMI+1;
   
   
       
   var Interest_amount=totalMonthlyEMI * months - loanAmount;
	   document.getElementById("Interest_Amount").innerHTML=Interest_amount;
	 
	 
   var total_loan=parseInt(loanAmount) + parseInt(Interest_amount);
       document.getElementById("total_loan-amount").innerHTML=total_loan;
   
 }


 

