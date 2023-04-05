import React from "react";
import Lifecycle from "./Lifecycle";

export default class Index extends React.Component{
    render(){
        return(
            <div>
                <Lifecycle />
                <h1>App component</h1>
            </div>
        )
    }
}