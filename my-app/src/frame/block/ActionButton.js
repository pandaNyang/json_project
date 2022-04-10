import React, {Component} from "react";

export class ActionButton extends Component {
    buttonActionSend = () =>{
        this.props.buttonAction('COMPARE');
    }

    render(){
        if(this.props.resultType == 'INITIAL'){
            return (
            <div>
                <button onClick={this.buttonActionSend} class="btn_initial"> COMPARE </button>
            </div>
            )
        } else if(this.props.resultType == 'SAME'){
            return (
                <div>🥳 SAME 🥳</div>
            )
        } else {
            return (
                <div> NOT SAME</div>
            )
        }
    }

}