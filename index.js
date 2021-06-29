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
  'what is JSONP?',
];

function capitalFirst(str){
  console.log(str.charAt(0).toUpperCase())
  return str.charAt(0).toUpperCase(); 
}
const titleCased = () => {
  return tutorials.map(function(str){
    let strArray = str.split(' '); 
    for(let i = 0; i < strArray.length; i++){
      let string = strArray[i]; 
      strArray[i] = string.charAt(0).toUpperCase() + string.slice(1); 
    }
    return strArray.join(' '); 
  });
}
