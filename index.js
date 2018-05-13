// Write your code in this file!

function scuberGreetingForFeet(someValue){
  
  let ride = someValue;
  
  let greeting;
  
  if(ride < 400)
   greeting = "This one is on me!"
   
   else if(ride > 2000 && ride < 2500)
    greeting = "I will gladly take your thirty bucks."
    
    else if(ride > 2500)
      greeting = "No can do."
    
  return greeting;
  
}

