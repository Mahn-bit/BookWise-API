// Interface

// const api_key = () => {
//   return [...Array(30)]
//     .map((e) => ((Math.random() * 36) | 0).toString(36))
//     .join("");
// };

// const createUser = (_username) => {
//   const today = new Date().toISOString().split("T")[0];
//   const user = {
//     id: Date.now(),
//     api_key: api_key(),
//     username: _username,
//     usage: { date: today, count: 0 },
//   };
//   return user;
// };

// console.log(createUser("Ibrahim"));

let today = new Date().toISOString().split("T")[0];
const currentDate = new Date().toDateString();
const date = new Date();

console.log(today);
console.log(currentDate);
console.log(date)
