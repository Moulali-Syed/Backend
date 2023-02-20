/*
to select children:

<div>
    <p></p>
    <p></p>
</div>

const div = document.querySelector('div');
div.children;//this gives HTMLCollection 

we can access as array elements
div.children[0].style.color = 'red';

-----------
div.children[0].nextElementSibling
----------
div.children[0].previousElementSibling

----------
div.children[0].parentElement;
-------------
div.children[0].closest('.green-parent');//closest works similar to querySelector
instead of selecting children, it selects the parent at any level that has the class green-parent 
-----------
const grandParent = document.querySelector('#grand-parent');
const children = grandParent.querySelectorAll('.child');
children.forEach(child=>child.style.color = 'red');
*/
