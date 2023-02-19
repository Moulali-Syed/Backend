/*
html

    <p data-test="1234" data-test-two>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, tenetur!
    </p>
*/

//we can select data attribute as below
const test = document.querySelector('[data-test]');

//we can access its value
console.log(test.dataset);

/*
output

DOMStringMap {test: '1234', testTwo: ''}
test
: 
"1234"
testTwo
: 
""
*/

//we can set data
test.dataset.test = 5555;
test.dataset.testTwo = 'Apple';

/*
DOMStringMap {test: '1234', testTwo: ''}
test
: 
"5555"
testTwo
: 
"Apple"
*/
