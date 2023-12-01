# Style component

## 1 - Inline CSS
```
rajouter un css inline dans un composant react
import { CSSProperties, PropsWithChildren } from "react"

const Letter = (props:PropsWithChildren)=>{
    const letterStyle:CSSProperties = {
        padding: 10,
        margin: 10,
        backgroundColor: "#FFDE00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: 32,
        textAlign: "center"
     };
    return (
        <div style={letterStyle}>
            {props.children}
        </div>
    )

}

- Ajouter un background dynamique
import { CSSProperties, ReactNode } from "react"

type customStyle = {
    bgcolor:string,
    children:ReactNode
}

const Letter = (props:customStyle)=>{
    const letterStyle:CSSProperties = {
        padding: 10,
        margin: 10,
        backgroundColor: props.bgcolor,
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: 32,
        textAlign: "center"
     };
    return (
        <div style={letterStyle}>
            {props.children}
        </div>
    )

}
export default Letter



 <>
      <Letter bgcolor="#58B3FF">A</Letter>
      <Letter bgcolor="#FF605F">E</Letter>
      <Letter bgcolor="#FFD52E">I</Letter>
      <Letter bgcolor="#49DD8E">O</Letter>
      <Letter bgcolor="#AE99FF">U</Letter>
    </>
    
```

## 2 - Ressources additionnels
```
 - https://css-tricks.com/different-ways-to-write-css-in-react/
 - https://caisy.io/blog/vanilla-extract-vs-styled-components

```