function assignGrade(score) {
  let grade;
  let remarks;

  // Assign grade based on score
  grade = score >= 97 ? "1.00 Excellent" :
         score >= 94 ? "1.25 Excellent" :
         score >= 91 ? "1.50 Above Average" :
         score >= 88 ? "1.75 Above Average" :
         score >= 85 ? "2.00 Average" :
         score >= 82 ? "2.25 Average" :
         score >= 79 ? "2.50 Below Average" :
         score >= 76 ? "2.75 Below Average" :
         score >= 75 ? "3.00 Below Average" :
         score >= 72 ? "4.00 Poor" :
         "5.00 Poor";

  // Assign remarks based on grade
  if( score >= 90 ){
      console.log("HIGH PASS, Candidate for Cum Laude");
}else if(score >= 80){
     console.log("AVERAGE PASS");
}else if(score >= 75){
     console.log("LOW PASS");
}else{
    console.log("Needs Improvement");
  }
  
  // Log the grade and remarks
  console.log("Your equivalent Grade is " + grade);
  console.log("Final Remarks: " + remarks);
}

// Example usage
assignGrade(86); // Output: Your equivalent Grade is "2.00 Average", Final Remarks: AVERAGE PASS
