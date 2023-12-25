// const person : 
// {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [boolean, number, string];
//     cita: string;

// } 
// = {
//     name: 'Muhammad Rusdan Habibi',
//     age: 8,
//     hobbies: ['Main Bola', 'Playing Gitar'],
//     role: [false, 1, 'two'],
//     cita: 'Pemain Bola Profesional seperti Messi',
// }

enum Role {Admin, Super_Admin, Author, Read_Only, Free_Access };

const person : 
{
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
    cita: string;


} 
= {
    name: 'Muhammad Rusdan Habibi',
    age: 8,
    hobbies: ['Main Bola', 'Playing Gitar'],
    role: Role.Admin,
    cita: 'Pemain Bola Profesional seperti Messi',
}

let favoriteActivities : string[];
favoriteActivities = ['Main Bola'];

// let favoriteActivities : any[];
// favoriteActivities = ['Main Bola', 1];




console.log(person.name);

for (const hobby of person.hobbies){
console.log(hobby.toUpperCase());
}
console.log(person.age);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.cita);
console.log(person.role);