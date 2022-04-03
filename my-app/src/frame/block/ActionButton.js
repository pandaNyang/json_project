import React, {Component} from "react";

export class ActionButton extends Component {
    state = {
        actionType : ''
    }

    buttonActionSend = () =>{
        this.props.buttonAction('COMAPRE');
    }

    render(){
        if(this.props.resultType == 'INITIAL'){
            return (
            <div>
                <button onClick={this.buttonActionSend}> COMPARE </button>
            </div>
            )
        }else if(this.props.resultType == 'SAME'){
            return (
                <div>🥳 SAME 🥳</div>
            )
        }else {
            return (
                <div> NOT SAME</div>
            )
        }
    }

}