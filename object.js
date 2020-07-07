var car = { type: "Fiat", model: "500", color: "white" };
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.firstName)
console.log(person["firstName"])
console.log(person.fullName())