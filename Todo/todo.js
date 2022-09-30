let ul = document.getElementById('list');
let li;


let addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)

let everything = document.getElementById('removeall');
everything.addEventListener('click',removeEvery);


function addItem(){
  let input = document.getElementById('input');
  let item = input.value;
  ul = document.getElementById('list');
  let textnode = document.createTextNode(item);

  if (item === ''){
    return false;
  }
  else{
    li = document.createElement('li');
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id','check');
    
    let label = document.createElement('label');
    label.setAttribute('for',item); //optional

    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li,ul.childNodes[0]);
   
    setTimeout (() => {
      li.className = "visual";
    },10000)
    input.value = '';
  }


}


function removeItem(){
  li = ul.children;
  for(let i=0;i<li.length;i++){
    while (li[i] && li[i].children[0].checked) {
      ul.removeChild(li[i])
    }
}
}

function removeEvery(){
  li=ul.children;
  for(let i = 0 ; i<li.length;i++){
    li[i].children[0].checked = true
  }
  removeItem();
}
