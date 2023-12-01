## 2 - Learn JSX

* JSX stands for Javascript XML

```
  function Alert(){
    return (
        <h1 className="test">
            Hello world
        </h1>
    )
  }
```
* Interpolation JSX

 - single value
```
 function App(){
    const appName = "mon app";
    return (
        <div>
            {{appName}}
        </div>
    )
 }
```

 - Evaluation d'expression

```
function App(){

    const appName = ()=> "Hello world";

    return(
        <div>
            appName()
        </div>
    )
}
```
```
// Arrow function
const App = ()=>{
    return (
        <div>
            { 1 + 1}
        </div>
    )
}

```
- Nommage des composants
```
 Les noms des composants JSX doivent commencer par une lettre majiscule, auquel React les identifiera en tant que des éléments HTML

 Ex : 

 function hello(){
    return (
        <h1>hello</h1>
    )
 }
 
 function App(){
    <!-- Le code ci après générera une erreur
     Warning: The tag <hello> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
     at hello
     at App
     -->
    return <hello/>
 }
```
- Affichage dynamique d'un composant
```

function Photo() {
  return <div>Photo</div>;
}

function Video() {
  return <div>Video</div>;
}

const components: { [key: string]: React.FC } = {
  photo: Photo,
  video: Video,
};

type StoryProps = {
  storyType: keyof typeof components; // Utilisez keyof typeof pour obtenir les clés de l'objet components
};

function Story(props: StoryProps) {
  const SpecificStory = components[props.storyType];
  return <SpecificStory />;
}

function App() {
  return <Story storyType="video" />;
}


```
* Conditions
```
  Les conditions ne sont pas interpretées dans du code JSX car elles ne sont pas 
  des expressions
  Ex : 

  function App = ()=>{
    return (<div className="salutation">Hello JSX</div>)
  }
  Rendu : React.createElement('div',{className:"salutation"},"Hello JSX");
  si on ajoute une condition dans le JSX
  const App = ()=>{
   return (<div className={if(1==1){"salutation"}}}>Hello JSX</div>)
  }
 // le code ci-dessus générera une erreur

 Alternatives : 
 - Utiliser les operateurs ternaires
 const App = ()=>{
   const a:number = 1;
   const b:number = 2;
   return (<div className={(a===b)?"hello":"bonjour"}>Hello JSX</div>)
 }
- Appliquer le bloc conditionnel en dehors de JSX

const App = ()=>{
  const a:number = 1;
  const b:number = 2;
  let classValue;
  if(a===b){
    classValue = "bonjour";
  }
  return (<div className={classValue}>Hello JSX</div>)
}
```
* Un seul noeud Parent
```
 JSX n'accepte qu'un seul noeud parent 

 const App = ()=>{
  return (
    <div>Bonjour</div>
    <div>Test</div>
  )
 }
solutions
 - Un seul noeud Parent
 const App = ()=>{
  return (
    <div>
      <div>Bonjour</div>
      <div>Test</div>
    </div>
  )
 }
 - Un Fragment
 const App = ()=>{
  return (
    <>
      <div>Bonjour</div>
      <div>Test</div>
    </>
  )
 }
```
* Affichage conditionnel
```
 - Le rendu conditionnel améliore l'experience utilisateur en permettant d'afficher dynamiquement des composants en fonctions des besoins

 - IL permet de charger les composants nécessaires au démarrage de notre application

Ex : 

type userLogged = {isLoggedIn:boolean}
const Greeting = (props:userLogged)=>{
  return(
    <div>
       {
       props.isLoggedIn?(
        <h1>WelCome</h1>
       ) : (
        <h1>Please sign in </h1>
       )
     }
    </div>
   
  );
}
const App = ()=>{
   return <Greeting isLoggedIn={true}/>
}

Ex 2 : 
const Greeting = (props:userLogged)=>{
  return(
    <div>
       {
       props.isLoggedIn && 
        <h1>WelCome</h1>
      
     }
    </div>
   
  );
}
Dans le deuxième cas l'operateur && est utilisé pour afficher le message seulement si l'utilisateur est connecté
```