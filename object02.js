// const tinderUser = new object{}
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Tonny"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
  email: "pankaj@gmail.com",
  fullname: {
     userfullname: {
      firstname:"Pankaj",
      lastname: "Sahu"
     }
   }
}

// console.log(regularUser.fullname.userfullname.firstname,regularUser.fullname.userfullname.lastname);

const obj1 = {1 : "a", 2: "b" }
const obj2 = { 3: "a", 4: "b"}

const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2}
console.log("Spread ",obj4);

//user[1].email
// console.log("tinderUser", tinderUser);

//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

const course = {
  coursename : "Js in hindi",
  price: "999",
  courseInstructor: "hitesh"
  
}

//this is destructure

//course.courseInstructor

const {courseInstructor : instructor} = course

//console.log(courseInstructor);
console.log(instructor)

//API raandom userme and code copy on json formate paste  and tree struture
