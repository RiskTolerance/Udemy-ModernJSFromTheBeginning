let val;

// 3.23 Examining the Document Object

        // val = document;
        // val = document.all; //all is depreciated, but still works?
        // val = document.all[2];
        // val = document.all.length;
        // val = document.head;
        // val = document.body;
        // val = document.doctype;
        // val = document.domain;
        // val = document.URL;
        // val = document.characterSet;
        // val = document.contentType;
        
        // val = document.forms; //access all the forms on the page

        // val = document.links; //access all the links on the page
        // val = document.links[0];
        // val = document.links[0].className;
        // val = document.links[0].classList;

        // val = document.images;

        // val = document.scripts;
        // val = document.scripts[2].getAttribute('src');

    //document objects are not iterable by default.
    //Method to use array methods on document objects:

        // let scripts = document.scripts;
        // let scriptsArray = Array.from(scripts);

        // scriptsArray.forEach(x => {
        //     console.log(x.getAttribute('src'));
        // })

// 3.24 Dom Selectors For Single Elements

        // const taskTitle = document.getElementById('task-title');
        //console.log(taskTitle.id);

    //change styling

        //taskTitle.style.background = '#333';
        //taskTitle.style.color = '#fff';
        //taskTitle.style.padding = '5px';

    //change content

        //taskTitle.textContent = 'Task List';
        //taskTitle.innerText = 'My Tasks';
        //taskTitle.innerHTML = `<span style='color:red'>Task List</span>`;

    //query selector

        // console.log(document.querySelector('#task-title'));
        // console.log(document.querySelector('.card-title'));
        // console.log(document.querySelector('h5'));

        //document.querySelector('li').style.color = 'red';

// 3.25 Dom Selectors For Multiple Elements

        // const items = document.getElementsByClassName('collection-item');
        // console.log(items[0]);
        // items[0].style.color = 'red';
        // items[3].textContent = 'yee';

    //use selectors in a succinct way, because selecting an HTML element in the global scope is dumb (in most cases). 
    
        // const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

    //get elements by tag name

        // const lis = document.getElementsByTagName('li');
        // console.log(lis[0]);
        // lis[0].style.color = 'red';
        // lis[3].textContent = 'yee';
    
    //query selector all

        // const items = document.querySelectorAll('ul.collection li.collection-item');

        // console.log(items);

// 3.26 Traversing The DOM

    //get child nodes using .childNodes on a document query. A child node is any html element that is a direct child to the selected element. 

    //use .nodeName for get the name of the node and .nodeType to get the type of the node.

    // Some node types:
    // 1 - Element
    // 2 - Attribute (depreciated)
    // 3 - Text Node
    // 8 - Comment
    // 9 - Document itself
    // 10 - Doctype

    //use .children to get the child elements of a node list

    // .firstChild .lastChild .childElementCount

    //parents
    // .parentNode .parentElement

    //siblings
    // .nextSibling .nextElementSibling
    // .prevSibling .prevElementSibling
    
// 3.27 Creating Elements

    //create element

        // const li = document.createElement('li');

    //add class

        // li.className = 'collection-item';

    //add id

        // li.id = 'new-item';

    //add attribute

        // li.setAttribute('title','New Item');

    //create text node and append

        // li.appendChild(document.createTextNode('Hello World'));

    //create link element

        // const link = document.createElement('a');
        // link.className = 'delete-item secondary-content';
        // link.innerHTML = '<i class="fa fa-remove"></i>';

    //append li as child to ul

        // document.querySelector('ul.collection').appendChild(li);

    //append the link to the li

        // li.appendChild(link);
        // console.log(li);

// 3.28 Removing & Replacing Elements

    //create element
        // const newHeading = document.createElement('h2');
    //add id
        // newHeading.id = 'task-title';
    //add new text node
        // newHeading.appendChild(document.createTextNode('Task List'));
    //get the old heading
        // const oldHeading = document.getElementById('task-title');
    //parent
        // const cardAction = document.querySelector('.card-action');
    //replace
        // cardAction.replaceChild(newHeading, oldHeading);
        //console.log(newHeading);

    //remove element
        // const lis = document.querySelectorAll('li');
        // const list = document.querySelector('ul');
    //remove list item
        // lis[0].remove();
    //remove child
        // list.removeChild(lis[3]);

    //CLASSES & ATTRIBUTES
        // const firstLi = document.querySelector('li:first-child')
        // const link = firstLi.children[0];
        // console.log(firstLi.children[0])

        //classes

            // val = link.className;
            // val = link.classList;
            // val = link.classList[0];
            // link.classList.add('test');
            // link.classList.remove('test');
            // val = link;

        //attributes

            // val = link.getAttribute('href');
            // val = link.setAttribute('href', 'http://google.com');
            // val = link.hasAttribute('href'); //check for attribute
            // link.setAttribute('title', 'Google');
            // val = link.hasAttribute('title'); //add an attribute
            // link.removeAttribute('title'); //remove an attribute

// 3.29 Event Listeners & The Event Object

    // document.querySelector('.clear-tasks').addEventListener('click',function(e){
    //     console.log('eyyy');
    //     e.preventDefault();
    // });

    // let onClick = (e) => {
    //     // console.log('clicked');
    //     let val;
    //     val = e.target.className;
    //     val = e.target.classList;
    //     // e.target.innerText = "Hello!"

    //     //event type\
    //     val = e.type;
    //     //timestamp
    //     val = e.timestamp;
    //     //coords
    //     val = e.clientY
    //     val = e.clientX
    //     //coords rel to the element
    //     val = e.offsetX
        
    //     console.log(val);
    //     // e.preventDefault();
    // }
    
    // document.querySelector('.clear-tasks').addEventListener('click',onClick);

// 3.30 Mouse Events

    // const clearBtn = document.querySelector('.clear-tasks');
    // const card = document.querySelector('.card');
    // const heading = document.querySelector('h5');

    //event Handler
        // function runEvent(e){
        //     console.log(`Event Type: ${e.type}`);
        //     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
        //     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
        // };

        // clearBtn.addEventListener('click', runEvent);
        // clearBtn.addEventListener('dblclick', runEvent);
        // clearBtn.addEventListener('mousedown', runEvent);
        // clearBtn.addEventListener('mouseup', runEvent);
        // card.addEventListener('mouseenter', runEvent);
        // card.addEventListener('mouseleave', runEvent);
        // card.addEventListener('mouseover', runEvent); 
        // card.addEventListener('mouseout', runEvent);
        // card.addEventListener('mousemove', runEvent);

// 3.31 Keyboard & Input Events

    // const form = document.querySelector('form');
    // const taskInput = document.getElementById('task');
    // const heading = document.querySelector('h5');

    // function runEvent(e){
    //     console.log(`event type: ${e.type}`);
    //     console.log(e.target.value);
    //     // heading.innerText = e.target.value;
    //     // console.log(taskInput.value)
    //     // e.preventDefault(e);
    // };

    // form.addEventListener('submit', runEvent);
    // taskInput.addEventListener('keydown', runEvent);
    // taskInput.addEventListener('keyup', runEvent);
    // taskInput.addEventListener('keypress', runEvent);
    // taskInput.addEventListener('focus', runEvent); //when you click into an element
    // taskInput.addEventListener('blur', runEvent); //opposite of focus
    // taskInput.addEventListener('cut', runEvent); 
    // taskInput.addEventListener('paste', runEvent); 
    // taskInput.addEventListener('input', runEvent); //anything

// 3.32 Event Bubbling & Delegation

    //could this be... something new?

// 3.33 Local & Session Storage


////////////

console.log(val);