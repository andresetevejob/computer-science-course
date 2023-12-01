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