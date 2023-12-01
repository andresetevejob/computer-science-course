# Javascript

## 1 - const et let

```
const : ne peut plus être modifier après affectation
Exple:
const pizza = true
pizza = false => //TypeError

let : Permet de definir le scope d'une variable
Exple :
Sans let
var topic = "React"
if(topic){
    var topic = "React";
    console.log("bloc", topic);
}
console.log("global",topic);
Avec Let

```

var topic = "React"
if(topic){
var topic = "React";
console.log("bloc", topic);
}
console.log("global",topic);

Exple 2 :
var div,
container = document.getElementById("container");
    for (var i = 0; i < 5; i++) {
        div = document.createElement("div");
        div.onclick = function() {
        alert("This is box #" + i);
    };
    container.appendChild(div);
}
Avec let :
const container = document.getElementById("container");
let div;
    for (let i = 0; i < 5; i++) {
        div = document.createElement("div");
        div.onclick = function() {
        alert("This is box #: " + i);
    };
    container.appendChild(div);
}
## 2 - Function
```
   - Function Declarations
   function logCompliment() {
    console.log("You're doing great!");
   }
   logCompliment();

  - Function Expression
    const logCompliment = function() {
        onsole.log("You're doing great!");
    };
    logCompliment(); 

 - Difference entre Function declaration et function Expression
    hey();
    // Function Declaration
    function hey() {
        alert("hey!");
    }
    // Invoking the function before it's declared
    hey();
    // Function Expression
    const hey = function() {
        alert("hey!");
    };
  - Default Parameter
  function logActivity(name = "Shane McConkey", activity = "skiing") {
        console.log(`${name} loves ${activity}`);
  }

 -  Arrow Function 
 const lordify = (firstName, land) => {
    if (!firstName) {
        throw new Error("A firstName is required to lordify");
    }
    if (!land) {
        throw new Error("A lord must have a land");
    }
    return `${firstName} of ${land}`;
  };
 * Mettre les parenthèses dans les cas ou on doit retourner un objet sur plusieurs lignes
 // Error
    const person = (firstName, lastName) =>
    {
        first: firstName,
        last: lastName
    }
    console.log(person("Brad", "Janson"));
 //Good
 const person = (firstName,lastName)=>({
    first : firstName,
    last: lastName
 })
```

## 3 - Destructing Object And Array

```

```

## 4 - Fetch

```

```



## 5 - Les tableaux

```

```

## 6 - spread operator

```
{ ...contact, firstname: e.target.value } //modifiera le champ firstname si il existe sinon ce dernier sera rajouté
```
