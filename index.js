

// When the parameter list is only one element, we can drop () !
// const students = ["harry", "ron", "hermione", "ginevra"];
// const rollCall = students.map(student => student.toUpperCase() + " the wizard");
//=> rollCall = ["harry the wizard", "ron the wizard", "hermione the wizard", "ginevra the wizard"];

// const robots = [
//   { name: 'Johnny 5', modes: 5, isActivated: false, },
//   { name: 'C3PO', modes: 3, isActivated: false, },
//   { name: 'Sonny', modes: 2.5, isActivated: false, },
//   { name: 'Baymax', modes: 1.5, isActivated: false, },
// ];

// const activatedRobots = robots.map( robot => {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2, 
//     isActivated: true,
//   });
// });

// console.log(activatedRobots)

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => tutorials.map(element => 
    element.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
  );


console.log(titleCased(tutorials));






// function titleCased(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }

// console.log(titleCased(tutorials))
// const titleCased = array => {
//   const cap = array.split();
//   console.log(cap)
// }
// console.log(titleCased(tutorials))

// const titleCased = tutorials.map( tutorials => {
  
//   const separated = tutorials.split(" ")
//   // console.log(separated)
//   for (const word of separated) {
//     const caps = word.charAt(0)
//     // console.log(caps)
//     return caps.replace(caps[0], caps[0].toUpperCase() )

//   }
//   // const firstLetter = tutorials.charAt(0).toUpperCase()/* + tutorials.slice(0);*/
//   // return firstLetter
// } );
