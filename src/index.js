import React from "react";
import ReactDOM from "react-dom";
 import Commerce from "./Commerce";
 import Title from "./Title";
function App()
{
    return(
        <div>
            <Title/>
            <Commerce/> 
        </div>
       
    );
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
