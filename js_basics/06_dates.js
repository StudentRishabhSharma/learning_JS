let myDate = new Date()

console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toString());



let myNewDate = new Date(2024, 1, 13)

myNewDate.toDateString( `Default`, {
    weekday : "long",
})

console.log("My Birthday on : "+ myNewDate.toDateString());
