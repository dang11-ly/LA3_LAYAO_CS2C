let grade = prompt("Enter your grade:");

  // Assign grade based on score
  grade = score >= 97? alert("1.00 Excellent:");
         score >= 94? alert("1.25 Excellent:");
         score >= 91? alert("1.50 Above Average:);
         score >= 88? alert("1.75 Above Average:);
         score >= 85? alert("2.00 Average:");
         score >= 82? alert("2.25 Average:");
         score >= 79? alert("2.50 Below Average:");
         score >= 76? alert("2.75 Below Average:");
         score >= 75? alert("3.00 Below Average:");
         score >= 72? alert("4.00 Poor:");
         alert("5.00 Poor:");

  // Assign remarks based on grade
  if( score >= 90 ){
      alert("HIGH PASS, Candidate for Cum Laude");
}else if(score >= 80){
     alert("AVERAGE PASS");
}else if(score >= 75){
     alert("LOW PASS");
}else{
    alert("Needs Improvement");
  }
  
  // Log the grade and remarks
  alert("Your equivalent Grade is " + grade);
  alert("Final Remarks: " + remarks);
}

