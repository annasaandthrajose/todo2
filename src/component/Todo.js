
// import { Component } from "react";

// class Todo extends Component {




//     render() {

//         return (
//             <div>
//                 <h1>Hello{this.props.myStringValues.myString}</h1>
//                 <h1>Hello{this.props.myStringValues.myStringOne}</h1>
//             </div>
//         )



//     }
// }
// export default Todo;

import { Button } from "@mui/material";
import { Component, useState } from "react";

const Todo = () => {
    const [value, setValue] = useState(0);
    const [colour, setColour] = useState("Violet");
    const increment = () => {
        setValue(value + 1);
    }
    const decrement = () => {
        setValue(value - 1);
    }
    const changeColour = () => {
        // setColour("Yellow");
        setColour(colour === "Violet" ? "Yellow" : "Violet");
    }
    return (
        <div>
            {/* <h1>Hello{this.props.myStringValues.myString}</h1>
            <h1>Hello{this.props.myStringValues.myStringOne}</h1> */}
            <h1>Counter value {value}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>decrement</Button>
            <h1>Colour is {colour}</h1>
            <Button onClick={changeColour}>changeColour</Button>
        </div>
    )




}
export default Todo;