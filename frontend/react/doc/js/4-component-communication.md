# Communication entre composants


## 1 - IL existe différentes façon de communication entre le parent et l'enfant
```
 - Les props

 - Les functions de callback (permettent à l'enfant de remonter l'info au Parent)

 - Les context

 - Le Localstorage (moins recommandé sauf dans certains cas)

 - Le store Redux


 Dans cette première partie nous allons nous concentrer sur les deux premières

```

## 1  Les props et les function de callback direction (Parent <---> Enfant)
```

import { useState } from 'react';
import './App.css';

function Name(props:{name:string, onNameChange:(event: React.ChangeEvent<HTMLInputElement>) => void}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" value={props.name} onChange={props.onNameChange} />
    </div>
  )
}
function FavoriteAnimal(props:{animal:string,onNameChange:(event: React.ChangeEvent<HTMLInputElement>)=>void}){
  return(
    <div>
       <label htmlFor="animal">Animal: </label>
      <input id="animal" type="text" value={props.animal} onChange={props.   onNameChange} />
    </div>
  )
}
function Display(props:{name:string,animal:string}){
  return (
    <div>
      Your name is {props.name} and your favorite animal is {props.animal}
    </div>
  )
}
const App = ()=>{
  const [name, setName] = useState('')
  const [animal, setAnimal] = useState('')
  return (
    <>
      <Name name={name} onNameChange={event => setName(event.target.value)}/>
      <FavoriteAnimal animal={animal} onNameChange={event => setAnimal(event.target.value)}/>
      <Display name={name} animal={animal}/>
    </>
  )
}

```
## 2 - Props vs State
```



```