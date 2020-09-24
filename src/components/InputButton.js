import React, {Component} from "react";



class InputButton extends Component {

    
    render() {
        return(
            <div>
                <button type="button" onClick={this.props.setCount}>Click Me</button>
            </div>
        )
    }
}


export default InputButton