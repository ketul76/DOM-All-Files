let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//-- Form Submit Event --//
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);

// filter event
filter.addEventListener('keyup',filterItems);

//-- add item --//
function addItem(e){
  e.preventDefault();

// get input value 
let newItem = document.getElementById('item').value;

//create new li element
let li = document.createElement('li');

//add class
li.className = 'list-group-item';

//add text node with input value
li.appendChild(document.createTextNode(newItem));

//create del button element
let deleteBtn = document.createElement('button');

//add classes to delete button 
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//append text node
deleteBtn.appendChild(document.createTextNode('x'));

// append button to li
li.appendChild(deleteBtn);

//append li to list
itemList.appendChild(li);

}

// remove item function

function removeItem(d){
  if(d.target.classList.contains('delete')){
    if(confirm('Are You Sure')){
      let li = d.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter Items
function filterItems(f){
  // convert text to lowercase
  let text = f.target.value.toLowerCase();

  // get li
  let items = itemList.getElementsByTagName('li');
  
  //convert to an array
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }else{
      item.style.display = 'none';
    }
  })
}
