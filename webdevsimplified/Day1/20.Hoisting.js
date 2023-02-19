sum(2, 3); //accessing before function declaration
//this is because of hositing
//all our function declarations will be moved to top

//but this doesnot work with arrow functions
function sum(a, b) {
  return a + b;
}
