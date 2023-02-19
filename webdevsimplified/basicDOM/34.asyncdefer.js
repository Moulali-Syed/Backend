/*
its preferable to use defer keyword


**** always use defer ****
<script defer src="./script.js"></script> - this will run javascript file 
only when all the html code is downloaded and created a DOM Tree 
this way we can start our js file downloading  at begining but it only runs after the
dom tree loaded - the most preferable way to use is defer 


using defer , all js files run in the order defined 

-----------------

using defer is like placing it at end the closing body tag , instead use defer and place 
script tag in head , this saves time 

-----------

using async , will start executing once js file is downloaded , so donot use it 
*/
