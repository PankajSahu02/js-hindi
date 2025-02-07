 //singleton

 //object literala
 const JsUser = { 
  name : " Pankaj ",
  "full name":"Pankaj sahu",
  age : 23,
  location : "Bareilly",
  email : "pankaj0123@gmil.com",
  isLoggedIn : false,
  lastLoggedInDays : ["Monday", "saturday"]
}

// console.log(JsUser.email);
// /console.log(JsUser["email"])
//console.log(JsUser["full name"])

JsUser.email = "boy01243@gmail.com"
Object.freeze(JsUser)
JsUser.email = "ram01243@gmail.com"
//console.log (JsUser);

JsUser.greeting = function(){
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
  console.log('Hello JS user.$(this.name)');
}

console.log(JsUser);
// console.log(JsUser.greetingTwo);

