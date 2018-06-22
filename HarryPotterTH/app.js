if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {
  console.log('I did it! I linked jQuery and this js file!')
};


const $body = $('body'); //grabs the body element.
$body.append("<div id='container'></div>") //appends a container element.

const $container = $('container'); //grabs the container element. CREATES?
console.log($container); //checks for it.


//this was okay to have everything show up.
$("#container").append('<h1>Hogwarts</h1>'); //you don't need a dollar sign on the right.
$("#container").append('<h2>Chris</h2>'); //appended Chris to the body.
$("#container").append('<h3>Gryffindor</h3>'); //appends Gryffindor to body.
$("#container").append('<h4 class="cat">Zombie</h4>');
$("#container").append('<h4>FawksWand</h4>');





//this was not though bc you want it to append to a list. It does not get set a property:value pair either.
// $("#list").append('<li class="secret">invisibility cloak</li');
// $("#list").append('<li class="secret">magic map</li');
// $("#list").append('<li class="secret">time turner</li');
// $("#list").append('<li class="cat">leash</li');
// $("#list").append("<li>Bertie Bott's Every Flavor [Jelly] Beans.</li");


//here was tim's...

const $ul = $('<ul/>');
$ul.attr('storage', 'trunk');
$("#container").append($ul);

const $li = $('<li/>');
$li.text('butter beer');
$ul.append($li);

const $li1 = $('<li/>');
$li1.text('invisibility cloak');
$li1.attr('class','secrective');
$ul.append($li1);

const $li2 = $('<li/>');
$li2.text('magic map');
$li2.attr('class','secrective');
$ul.append($li2);

const $li3 = $('<li/>');
$li3.text('time turner');
$li3.attr('class','secrective');
$ul.append($li3);

const $li4 = $('<li/>');
$li4.text('leash');
$li4.attr('class','cat');
$ul.append($li4);

const $li5 = $('<li/>');
$li5.text('Bertie Botts Every Flavor Jelly Beans.');
$ul.append($li5);

const $h5 = $('<h5/>');
$h5.text("Spring 2017");
$container.append($h5);





//--------------YEAR 4--------------

//Jessamyn's code. I got to Tuesday but messed up on creating the new rows to put them in first.

$("#container").append("<h5>Spring 2017</h5>");

$("#container").append('<table>'); //append the table to the div container.
const $table = $('table'); //made a variable for table so you can grab table.


// so now you have your table. You need to make a row. then put in data.
const $tr0 = $('<tr/>'); // made a table row
$table.append($tr0);

//made two table datas. they go left to right.
const $td0 = $('<td/>');
$td0.text('Monday');
$tr0.append($td0);

const $td1 = $('<td/>');
$td1.text('Herbology, Divination');
$tr0.append($td1);



// make a tr in the table with two tds
const $tr1 = $('<tr/>'); //table row index 1, is the 2nd table row.
$table.append($tr1); //append row 1 to the table.

const $td2 = $('<td/>'); //make a variable td2 and make it table data.
$td2.text('Tuesday'); //
$tr1.append($td2);

const $td3 = $('<td/>'); //mak a variable td3 and make it table data. you could make this p or something else.
$td3.text('Jelly Bean Making');
$tr1.append($td3);

// do it again wednesday
const $tr2 = $('<tr/>');
$table.append($tr2);

const $td4 = $('<td/>');
$td4.text('Wednesday');
$tr2.append($td4);

const $td5 = $('<td/>');
$td5.text('Potions');
$tr2.append($td5);

// do it again thursday
const $tr3 = $('<tr/>'); //Row 3.
$table.append($tr3);

const $td6 = $('<td/>');
$td6.text('Thursday');
$tr3.append($td6);

const $td7 = $('<td/>');
$td7.text('Charms');
$tr3.append($td7);

//do it again friday
const $tr4 = $('<tr/>');
$table.append($tr4);

const $td8 = $('<td/>');
$td8.text('Friday');
$tr4.append($td8);

const $td9 = $('<td/>');
$td9.text('Quidditch practice');
$tr4.append($td9);


// --------------YEAR 5----------------

$('#container h4:nth-child(4)').remove();
//look in the container.
//look in the h4:nth-child is your 4th element. goes 1-2-3-4 not 0-1-2-3.
//.remove();

$('ul li:nth-child(1)').remove();
// $('#container h2:nth-child(5)').remove(); //removes wand.
$('ul li:nth-child(1)').remove();

// $('ul li:nth-child(3)').change.css('color', 'blue'));

$('#container h4:nth-child(4)').after($('<h2>New Wand</h2>').css('color', 'indigo'));
//into container, look at h4's 4th element. after that(create new element) then you can also define css to that new element.

// $('#container h4:nth-child(4)').remove();
//
// $('ul').before($('<h4/>').attr('class', 'cat').text('Sims'));







// WHAT JIM SENT....


$( () => {

  // YEAR 1
  const $container = $('#container');
  const $h1 = $('<h1>');
  $h1.text('Hogwarts');
  $('body').append($h1);

  // YEAR 2
  $('<h2>').text('Dylan Williams').appendTo($('body'));
  $('<h3>').text('Ravenclaw').appendTo($('body'));
  $('<h4>').text('Corvus').addClass('crow').appendTo($('body'));
  $('<h4>').text('Holly Wand with Unicorn Hair Core').appendTo($('body'));

  // YEAR 3
  const $ul = $('<ul>').attr('storage','trunk');
  $('<li>').text('butter beer').appendTo($ul);
  $('<li>').text('invisibility cloak').addClass('secret').appendTo($ul);
  $('<li>').text('magic map').addClass('secret').appendTo($ul);
  $('<li>').text('time turner').addClass('secret').appendTo($ul);
  $('<li>').text('leash').addClass('crow').appendTo($ul);
  $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans').appendTo($ul);
  $('body').append($ul);

  // YEAR 4
  const $h5 = $('<h5>').text('Spring 2017');
  const $table = $('<table>');
  const $thead = $('<thead>');
  $('<th>').text('Day').appendTo($thead);
  $('<th>').text('Classes').appendTo($thead);
  $table.append($thead);
  $table.append($('<tr>').append($('<td>').text('Monday')).append($('<td>').text('Herbology')));
  $table.append($('<tr>').append($('<td>').text('Tuesday')).append($('<td>').text('Divination')));
  $table.append($('<tr>').append($('<td>').text('Wednesday')).append($('<td>').text('History of Magic')));
  $table.append($('<tr>').append($('<td>').text('Thursday')).append($('<td>').text('Charms')));
  $table.append($('<tr>').append($('<td>').text('Friday')).append($('<td>').text('Potions')));
  $('body').append($h5).append($table);


  // YEAR 5
  $('h4').eq(1).remove();
  $('li').eq(0).remove();
  $('h4').after($('<h4>').text('Rosewood Wand with Warg Hair Core').css('color','crimson').addClass('wand'));
  $('h4.crow').appendTo($('body'));
  $('h4').eq(0).before($('h4.crow'));


  // YEAR 6
  $('.secret').hide('slow').delay(2000).show('slow');
  $('li.crow').addClass('cabbage');
  $('li.crow').removeClass('cabbage');


  // YEAR 7
  $('h5').text('Fall 2017');
  $('ul').prepend($('<li>').text('Butter beer'));
  $('ul').attr('storage','chest');

});
