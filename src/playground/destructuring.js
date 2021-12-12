// const person = {
//     name: 'yad',
//     age: 22,
//     location: {
//         city: 'suli',
//         temp: 92
//     }
// };

// const { name: firstname = 'Anon', age } = person;

// const { city, temp: temperature } = person.location;

// console.log(`${firstname} is ${age}.`);

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Seld-Published' } = book.publisher;

// console.log(publisherName);

//// Aray destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Suli', '19243'];

// const [, city = 'Erbil', state] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);