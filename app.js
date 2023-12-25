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
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Super_Admin"] = 1] = "Super_Admin";
    Role[Role["Author"] = 2] = "Author";
    Role[Role["Read_Only"] = 3] = "Read_Only";
    Role[Role["Free_Access"] = 4] = "Free_Access";
})(Role || (Role = {}));
;
var person = {
    name: 'Muhammad Rusdan Habibi',
    age: 8,
    hobbies: ['Main Bola', 'Playing Gitar'],
    role: Role.Admin,
    cita: 'Pemain Bola Profesional seperti Messi',
};
var favoriteActivities;
favoriteActivities = ['Main Bola'];
// let favoriteActivities : any[];
// favoriteActivities = ['Main Bola', 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.age);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.cita);
console.log(person.role);
