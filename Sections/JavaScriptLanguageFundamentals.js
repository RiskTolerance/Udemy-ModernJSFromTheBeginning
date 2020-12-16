//2.6 Using the console

    //Log to console
    console.log('hello world');

    //Log an object as a table
    console.table({a:1, b:2});

    //Log an error
    console.error('ya fucked up');

    //Clear the console
    console.clear();

    //Log a warning
    console.warn('You\'re making me mad');

    //Log the time from the beginning of an operation to the end
    console.time('timer');
    //code to measure goes here
    console.timeEnd('timer');

//2.7 Variables

    //var, let, const
    //variables can only include letters, numbers, _, &
    //cannot start with a number
    //use camelCase!

//2.8 Data Types

    // Primitive Data Types
        // Stored directly in the location the variable accesses
        // Stored on the stack

    // Refrance Data Types
        // Accessed by refrence
        // Objects that are stored on the heap
        // A pointer to a location in memory

    //Types
        //Primitives
            // String
            // Number
            // Boolean
            // Null
            // Undefined
            // Symbols
        // Reference Types
            // Arrays
            // Object Literals
            // Functions
            // Dates
            // Anything else...

//2.9 Type Conversion
    
    String(); // converts to string - can also use .toString();
    Number(); // guess :P
    parseInt(); //returns an integer (no decimals)
    parseFloat(); //returns integer + decimals 

//2.10 Numbers & The Math Object

    // Nothing new here! 

//2.11 String Methods & Concatenation

    let myName = 'Isaac';
    myName = myName.substring(0,2);
    myName = myName.slice(1); //I didn't know that slice works on strings as well as arrays
    console.log(myName)

//2.12 Template Literals

    let amazing = 'AMAZING!'
    let templateLiterals = `${amazing}!`

//2.13 Arrays & Array Methods

    // Check if something is an array
    let myArray = [1,2,3,4,5,6];
    Array.isArray(myArray);

//2.14 Object Literals

    //I really haven't done much with objects, so I suppose I'll do a full follow-along of this section
    const person = {
        firstName: 'Isaac',
        lastName: 'Druin',
        age: 30,
        email: 'idruin9@gmail.com',
        hobbies: ['coding', 'sleeping', 'coding some more'],
        address: {
            city: 'Vermillion',
            state: 'South Dakota',
            zip: '57069'
        },
        getBirthYeah: function(){
            return 1990;
        },
    }
    let val;

    val = person.hobbies[1];
    val = person.address.zip;

    console.log(val)

//2.15 Dates & Times

    let today = new Date();
    val = today.getMonth();
    val = today.getDate();
    val = today.getDay();
    val = today.getFullYear();
    val = today.getHours();
    val = today.getMinutes();
    val = today.getSeconds();
    //month is zero based D:
    //can chage a date object using things like .setMonth, .setDate, .setFullYear, etc.

//2.16 If Statements & Comparison Operators 

    //test to see if a variable is defined
    if(typeof person !== 'undefined'){
        console.log('ya');
    } else {
        console.log('nah')
    }

//2.17 Switches

    //I don't use these enough, might as well cover them again
    //Switches are better when there are lots of cases - vs using many if-else statements.
    const color = 'yellow';

    switch(color){
        case 'red':
            console.log('Color is red');
            break;
        case 'blue':
            console.log('Color is blue');
            break;
        default:
            console.log('Color is neither red nor blue');
            break;
    };


//2.18 Function Declarations & Expressions

    //I hope I know this :D
    //to set a default parameter for a fucntion, you can set a variable in the fucntion constructor = to a value.
    //eg. 
    function greet(greeting = 'hello', language= 'japanese'){
        //say hello
    };

    //Immediatley invokable function expressions - IIFEs
    (function(){
        console.log('IIFE RAN!');
    })();

    (function(name){
        console.log(`Hello ${name}!`);
    })('Isaac');

    //Methods are functions that are defined inside an object. 
    
    const todo = {
        add: function(){
            console.log('add todo..')
        },
        edit: function(id){
            console.log(`Edit todo ${id}`);
        }
    }

    todo.add();
    todo.edit('trash');

//2.19 General Loops

    //in an if loop, you can use 'continue' to break from the current loop itereation
    //'break' stops the loop

    //for in loops
    const user = {
        firstName: 'Jane',
        lastName: 'Smith',
        age: '25',
    }

    for(let x in user){
        console.log(`${x} : ${user[x]}`);
    }

//2.20 A Look At The Window Object

    //log, alert, prompt, confirm
    //height and width of the window (inner and outer width avalible)
    //scroll points
    window.scrollY;
    window.scrollX; //good for animations

//2.21 Block Scope With let & const

    //var is evil because it can change global values from a block scope.
    //but can also be useful in some cases.