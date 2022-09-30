// const heading = document.getElementById('heading');
// console.log(heading);      //unique id 

// const heading = document.getElementsByTagName('h1');
// console.log(heading);      // tags Collections 

// const heading = document.getElementsByClassName('heading');
// console.log(heading);

// const heading = document.querySelector('.heading');
// console.log(heading);


// const heading = document.querySelectorAll('.heading');
// console.log(heading);

//=------========-------------------==============-----------=/\
//traverse
//1- parentNode -----property

// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);

// 2.- childNodes

// const parent = document.querySelector('.parent');
// console.log(parent.childNodes);

//3.- nextElementsSibling

// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);

//4.- previouselementsibbling

// const subheading = document.querySelector('h3');
// console.log(subheading.previousElementSibling);

// 5. Basic Manipulation

// const heading = document.querySelector('.heading');
// heading.innerHTML = 'web dev is awesome';
// heading.style.color = 'red';                  //font color change
// heading.style.fontSize = '100px';            // font change
// heading.classList.add('title');             //new class name  add
// heading.classList.remove('heading');       // class name Remove

// create elements

// const heading = document.createElement('h1');
// heading.innerHTML = 'javascript is awesome'
// const parent = document.querySelector('.parent');
// parent.appendChild(heading)

// const subheading = document.createElement('h3');
// subheading.innerHTML = 'web iS awesome';
// // parent.appendChild(subheading);

// heading.insertAdjacentElement('beforebegin',subheading)
// console.log(subheading);



// dom events
const button = document.getElementById('btn');
const heading = document.getElementById('heading');

button.addEventListener('click',function(){
  heading.style.color ='Red';
})




