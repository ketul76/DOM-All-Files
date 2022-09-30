//examine the document object
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.body);


//GETELEMENTBYID

// console.log(document.getElementById('header-title'));
//  let header = document.getElementById('main-header');
// console.log(hedaertitle);
// hedaertitle.textContent = 'Ketulpatel';
// header.style.border = "50px solid pink";

// GETELEMENTBYCLASSNAME


// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = "ketul";
// items[1].style.fontWeight = 'bold';
// //items[1].style.backgroundColor = 'indianred';

// for (let i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#387' 
// }



// GETELEMENTSBYTAGNAME//
// let li = document.getElementsByTagName('li');
// console.log(li);

// for(let i =0; i < li.length;i++){
//   li[i].style.backgroundColor = 'red';
// }

// Query Selector // 

// let header = document.querySelector('#main-header');

// header.getElementsByClassName.borderBottom = 'solid 50px #ccc';


// let input = document.querySelector('input');
// input.value = "hello world";

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "send"

// let defaultfirstitems = document.querySelector('.list-group-item');
// defaultfirstitems.style.color = 'red';

// let lastelement = document.querySelector('.list-group-item:last-child');

// lastelement.style.color ='blue';

// let secondelement = document.querySelector('.list-group-item:nth-child(2)');

// secondelement.style.color ='orange';

// let thirdelement = document.querySelector('.list-group-item:nth-child(3)');

// thirdelement.style.color ='green';

// queryselector all

// let title = document.querySelectorAll('.title');
// console.log(title);

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i=0; i<odd.length;i++){
//   odd[i].style.backgroundColor = 'orange';
//   even[i].style.backgroundColor = 'green';
// }


// TRAVERSING THE DOM


// let itemlist = document.querySelector('#items');
//parentnode method

// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = 'red';
// console.log(itemlist.parentNode.parentNode.parentNode.parentNode);

//parentelement method
//console.log(itemlist.parentElement);
//itemlist.parentElement.style.backgroundColor = 'red';
// console.log(itemlist.parentElement.parentElement);

//childnodes

// console.log(itemlist.childNodes);


//children 


// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = 'red';


//first Child

// console.log(itemlist.firstChild);
// first child not ignoring spaces break


// firstelementchild
//firstelementchild is ignoring spaces.
// console.log(itemlist.firstElementChild);


// lastChild

// console.log(itemlist.lastChild);
// last child not ignoring spaces break


// firstelementchild
// lastelementchild is ignoring spaces.
// console.log(itemlist.lastElementChild);


// nextsibbling


// console.log(itemlist.nextSibling);

//nextelementsibbling

// console.log(itemlist.nextElementSibling);

//previos sibbling

// console.log(itemlist.previousSibling);


//previouselementsibbling

// console.log(itemlist.previousElementSibling);




//createelement

// //createadiv
// let newdiv = document.createElement('div');

// //add class
// newdiv.className ="hello";

// // add id
// newdiv.id = "ke";

// //add attr
// newdiv.setAttribute('title','hello div');

// //add text node
// let newdivtext = document.createTextNode("hello world======");

// //add text to div
// newdiv.appendChild(newdivtext);

// console.log(newdiv);

// EVENTS:-

// let button = document.getElementById('button').addEventListener('click',buttonClick)

// function buttonClick(e){
  //console.log('Button Clicked');
//   console.log(e.target);
// console.log(e.target.className);
// console.log(e.target.id);
// console.log(e.clientX);
// console.log(e.clientY);

// console.log(e.offsetY);
// console.log(e.offsetX);

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }



// let button = document.getElementById('button');
// addEventListener('click',runEvent);
//addEventListener('dblclick',runEvent);
//addEventListener('mousedown',runEvent);
// addEventListener('mouseup',runEvent);




// let box = document.getElementById('box');
// // box.addEventListener('mouseenter',runEvent);
// // box.addEventListener('mouseleave',runEvent);


// // box.addEventListener('mousemove',runEvent);




// // let iteninput = document.querySelector('input[type="text"]');
// // let form = document.querySelector('form');

// // iteninput.addEventListener('keydown',runEvent);


// let select = document.querySelector('select');

// select.addEventListener('change',runEvent);



// function runEvent(e){
  
  
//   console.log('Event Type: '+e.type);



//   // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';


//   // output.innerHTML = '<h3>MouseX IS: ' + e.offsetX + ' </h3><h3>MouseY Is: ' + e.offsetY + ' </h3>'; 


//   // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"


// }
//-----------------------------------------------------------------------------------//




























































