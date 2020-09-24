import React, {Component} from "react";



class CounterNumber extends  Component {

    render() {

        return(
            <div>
             <h1>{this.props.count}</h1>
            </div>
            
        )
    }
}


export default CounterNumber