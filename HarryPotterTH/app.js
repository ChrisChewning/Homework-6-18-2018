if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {
  console.log('I did it! I linked jQuery and this js file!')
};


 $(() => {
	// put jQuery in here
});

const $body = $('body'); //grabs the body element.
$body.append("<div id='container'></div>") //appends a container element.
const $container = $('container'); //grabs the container element.
console.log($container); //checks for it.

const $h1 = $('h1');
$body.append('<h1>Hogwarts</h1>'); //you don't need a dollar sign on the right.
console.log($h1);


const $h2 = $('h2');
$body.append('<h2>Chris</h2>');
const $h3 = $('h3');
$body.append('<h3>Gryffindor</h3>');

const $h4 = $('h4');
$body.append('<h4>Zombie</h4>');
//$h4.append('<class="cat">');
//$('h4.Zombie').addClass('pet');
$body.append('<h4>FawksWand</h4>');

//neither adding classes work.


console.log('hi');
