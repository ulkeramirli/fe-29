// task 1

// let user = {
//     name: "ulya",
//     surname: "amirli",
//     gender: "qadin",
//     birthday: "2007-09-20"
// };

// console.log(user.birthday);


//  task 2

// let user = {
//     name: "ulya",
//     surname: "amirli",
//     gender: "qadin",
//     birthday: "2007-09-20"
// };

// user.age = 17;
// delete user.birthday;

// console.log(user);


// task 3

// let user = {
//     name: "ulya",
//     surname: "amirli",
//     gender: "qadin",
//     age: 17
// };

// for (let key in user) {
//     console.log("${key}: ${user[key]}");
// }


// task 4

// let user = {
//     name: "ulya",
//     surname: "amirli",
//     gender: "qadin",
//     age: 17,

//         setAge: function(newAge) {
//         this.age = newAge;
//     },

//         getYearsBeforeRetirement: function(retirementAge) {
//         return retirementAge - this.age;
//     }
// };

// user.setAge(20);

// let yearsBeforeRetirement = user.getYearsBeforeRetirement(65); 
// console.log("Pensiyaya qədər qalan illər: ${yearsBeforeRetirement}");


// task 5


// function prop2Taker(obj) {
//     return obj['prop-2'];
// }

// console.log(prop2Taker({ one: 1, 'prop-2': 2 })); // 2
// console.log(prop2Taker({ 'prop-2': 'two', prop: 'test' })); // 'two'


// task 6

// function propertyTaker(obj, propertyName) {
//     return obj[propertyName];
// }


// console.log(propertyTaker({ continent: 'Asia', country: 'Japan' }, 'continent')); // 'Asia'
// console.log(propertyTaker({ country: 'Sweden', continent: 'Europe' }, 'country')); // 'Sweden'
// console.log(propertyTaker({ name: 'Ali', age: 12 }, 'name')); // 'Ali'


// task 7

// function existsAndTruthy(obj, propertyName) {
//     return obj.hasOwnProperty(propertyName) && Boolean(obj[propertyName]);
// }

// console.log(existsAndTruthy({a: 1, b: 2, c: 3}, 'b')); // true
// console.log(existsAndTruthy({x: 'a', y: null, z: 'c'}, 'y')); // false
// console.log(existsAndTruthy({x: 'a', b: 'b', z: undefined}, 'z')); // false
