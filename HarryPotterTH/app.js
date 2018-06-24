if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {
  console.log('I did it! I linked jQuery and this js file!')
};

///QUESTIONS

// 1. how to add id? Only attr('id','....');
// 2. what does that attr('storage', 'chest') mean? it shows ul storage: "chest"; in elements.
// 3. lines 171 & 172.







// ------YEAR 4----the TABLE PART
// //Jessamyn's code. I got to Tuesday but messed up on creating the new rows to put them in first.
//
// $("#container").append("<h5>Spring 2017</h5>");
//
// $("#container").append('<table>'); //append the table to the div container.
// const $table = $('table'); //made a variable for table so you can grab table.
//
//
// // so now you have your table. You need to make a row. then put in data.
// const $tr0 = $('<tr/>'); // made a table row
// $table.append($tr0);
//
// //made two table datas. they go left to right.
// const $td0 = $('<td/>');
// $td0.text('Monday');
// $tr0.append($td0);
//
// const $td1 = $('<td/>');
// $td1.text('Herbology, Divination');
// $tr0.append($td1);
//
//
//
// // make a tr in the table with two tds
// const $tr1 = $('<tr/>'); //table row index 1, is the 2nd table row.
// $table.append($tr1); //append row 1 to the table.
//
// const $td2 = $('<td/>'); //make a variable td2 and make it table data.
// $td2.text('Tuesday'); //
// $tr1.append($td2);
//
// const $td3 = $('<td/>'); //mak a variable td3 and make it table data. you could make this p or something else.
// $td3.text('Jelly Bean Making');
// $tr1.append($td3);
//
// // do it again wednesday
// const $tr2 = $('<tr/>');
// $table.append($tr2);
//
// const $td4 = $('<td/>');
// $td4.text('Wednesday');
// $tr2.append($td4);
//
// const $td5 = $('<td/>');
// $td5.text('Potions');
// $tr2.append($td5);
//
// // do it again thursday
// const $tr3 = $('<tr/>'); //Row 3.
// $table.append($tr3);
//
// const $td6 = $('<td/>');
// $td6.text('Thursday');
// $tr3.append($td6);
//
// const $td7 = $('<td/>');
// $td7.text('Charms');
// $tr3.append($td7);
//
// //do it again friday
// const $tr4 = $('<tr/>');
// $table.append($tr4);
//
// const $td8 = $('<td/>');
// $td8.text('Friday');
// $tr4.append($td8);
//
// const $td9 = $('<td/>');
// $td9.text('Quidditch practice');
// $tr4.append($td9);
//
//
// // --------------YEAR 5----------------
//
// $('#container h4:nth-child(4)').remove();
// //look in the container.
// //look in the h4:nth-child is your 4th element. goes 1-2-3-4 not 0-1-2-3.
// //.remove();
//
// $('ul li:nth-child(1)').remove();
// // $('#container h2:nth-child(5)').remove(); //removes wand.
// $('ul li:nth-child(1)').remove();
//
// // $('ul li:nth-child(3)').change.css('color', 'blue'));
//
// $('#container h4:nth-child(4)').after($('<h2>New Wand</h2>').css('color', 'indigo'));
// //into container, look at h4's 4th element. after that(create new element) then you can also define css to that new element.
//
// // $('#container h4:nth-child(4)').remove();
// //
// // $('ul').before($('<h4/>').attr('class', 'cat').text('Sims'));




// WHAT JIM SENT....


$( () => { //this whole thing is in one function?

  // YEAR 1: Create your h1 object.
  const $container = $('#container'); //created a container object.
  const $h1 = $('<h1>'); //created an h1 object.
  $h1.text('Hogwarts'); //put text on the h1 object.
  $('body').append($h1); //append the h1 object to body.

  // YEAR 2: Create your h2, h3, and h4 objects.
  $('<h2>').text('Dylan Williams').appendTo($('body')); //put h2.text('') to body. didn't create an h2 variable.
  $('<h3>').text('Ravenclaw').appendTo($('body')); //put h3.text('') to body. didn't create an h3 variable.
  $('<h4>').text('Corvus').addClass('crow').appendTo($('body')); //put h4.text('') with the class ('crow') on body. no h4 var.
  $('<h4>').text('Holly Wand with Unicorn Hair Core').appendTo($('body')); //put 2nd h4 text('') to body.

  // YEAR 3: Create a list with the attribute "storage," and "trunk" and a list of things. Make a few of the list items disappear.
  const $ul = $('<ul>').attr('storage','trunk'); //create a ul element with the attributes storage and trunk.
  $('<li>').text('butter beer').appendTo($ul); //append an li object with the text('') and class('') to the ul just made.
  $('<li>').text('invisibility cloak').addClass('secret').appendTo($ul);
  $('<li>').text('magic map').addClass('secret').appendTo($ul);
  $('<li>').text('time turner').addClass('secret').appendTo($ul);
  $('<li>').text('leash').addClass('crow').appendTo($ul); //LEASH HAS A CLASS CALLED CROW.
  $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans').appendTo($ul);
  $('<li>').text('professor').attr('id', 'mcGonnall').appendTo($ul);
  // $('<li>').text('human').addId('person').appendTo($ul); //doesn't work. need to use attr('id', '...')? only?
  $('body').append($ul);



  // YEAR 4: Create a table.
  const $h5 = $('<h5>').text('Spring 2017'); //makes an h5 that is like a title for the table.
  const $table = $('<table>'); //make a table you can grab.
  const $thead = $('<thead>'); //make a header you can grab.
  $('<th>').text('Day').appendTo($thead); //in the header put day
  $('<th>').text('Classes').appendTo($thead); //in the header put classes
  $table.append($thead); //append the header to the table.
  $table.append($('<tr>').append($('<td>').text('Monday')).append($('<td>').text('Herbology')));
  $table.append($('<tr>').append($('<td>').text('Tuesday')).append($('<td>').text('Divination')));
  $table.append($('<tr>').append($('<td>').text('Wednesday')).append($('<td>').text('History of Magic')));
  $table.append($('<tr>').append($('<td>').text('Thursday')).append($('<td>').text('Charms')));
  $table.append($('<tr>').append($('<td>').text('Friday')).append($('<td>').text('Potions')));
  $('body').append($h5).append($table);


  // YEAR 5: Remove elements. Make one element a different color. Add a new element in a specific spot.

  $('h4').eq(0).remove(); //this removes  Corvus. In year 2, there are two h4s.
  $('li').eq(0).remove(); //this removes butter beer, lowercase. this is the first, index 0, li
  $('h4').after($('<h4>').text('Rosewood Wand with Warg Hair Core').css('color','crimson').addClass('wand'));
  //^this add an h4 Rosewood Wand... after the only h4 in th body, which is 'Holly Wand'. This is b.c you removed Corvus, the index 0 (eq(0).remove(). If you kept Corvus, you'd get 'Rosewoood Wand with Warg Hair Core' after Corvus and again after
 // 'Hollywood wand...'


//what is with the h4.crow inside the (). usually it's h4.something.something
  $('h4.crow').appendTo($('body')); //append the h4.crow to the body.
  $('h4').eq(0).before($('h4.crow')); //add an h4 before the h4 crow?


  // YEAR 6: Add functionality to one of the classes. Add a class and remove a class.
  $('.secret').hide('slow').delay(2000).show('slow');
  $('li.crow').addClass('cabbage'); //GRABS THE li.crow element? this is leash. Adds the class cabbage. class="crow cabbage"
  $('li.crow').removeClass('cabbage'); //remove the class cabbage to li.crow (leash). Leash retains the class crow.


  // YEAR 7: Add an element. Prepend an element. Update the list's attribute.
  $('h5').text('Fall 2017'); //updated the h5 element with the text Spring 2017 to Fall 2017. It was the only h5 text so you
                            //only had to put in h5 to update it.
  $('ul').prepend($('<li>').text('Butter beer')); //put an li element with Butter Beer first on the ul list.
  $('ul').attr('storage','chest'); //give the ul list an attribute of storage: chest(?) instead of 'storage: trunk'

});
