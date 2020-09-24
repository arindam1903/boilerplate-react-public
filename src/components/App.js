import React, {Component, useState} from "react";
import '../styles/App.css';
import CounterNumber from "./CounterNumber";
import InputButton from "./InputButton";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
        const udpateValue = this.udpateValue.bind(this);
      }
    udpateValue() {
        this.setState({
            count: this.state.count+1
        })
    }
    render() {

        return(
            <>
                <CounterNumber count= {this.state.count} />
                <InputButton  setCount = {() => {this.udpateValue(this.state.count+1)}}/>
            </>
        )
    }
}


export default App;