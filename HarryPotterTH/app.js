if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {
  console.log('I did it! I linked jQuery and this js file!')
};


const $body = $('body'); //grabs the body element.
$body.append("<div id='container'></div>") //appends a container element.

const $container = $('container'); //grabs the container element. CREATES?
console.log($container); //checks for it.

$("#container").append('<h1>Hogwarts</h1>'); //you don't need a dollar sign on the right.
$("#container").append('<h2>Chris</h2>'); //appended Chris to the body.
$("#container").append('<h3>Gryffindor</h3>'); //appends Gryffindor to body.
$("#container").append('<h4 class="cat">Zombie</h4>');
$("#container").append('<h4>FawksWand</h4>');




//Created a list and appened it to the container div. 
$("#container").append('<ul id="list">STORAGE: TRUNK</ul>');

$("#list").append('<li>butter beer</li');
$("#list").append('<li class="secret">invisibility cloak</li');
$("#list").append('<li class="secret">magic map</li');
$("#list").append('<li class="secret">time turner</li');
$("#list").append('<li class="cat">leash</li');
$("#list").append("<li>Bertie Bott's Every Flavor [Jelly] Beans.</li");
