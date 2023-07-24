import people from "./data.js";

people.forEach((person) => {
    console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
});