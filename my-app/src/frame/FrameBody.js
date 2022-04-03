import React, {Component} from "react";
import {BlockTextArea} from "./block/BlockTextArea.js";
import { ActionButton } from "./block/ActionButton.js";


export class FrameBody extends Component{
    // constructor() {

    // }
    
    resultType = 'INITIAL';

    changeResultType = (result) =>{
        this.resultType = result
    }

    buttonAction = (actionType) =>{
        console.log(actionType) // COMPARE
    }

    render() {
        return (
            <div className="bodyFrame">
                <BlockTextArea/>
                <BlockTextArea/>
                <ActionButton buttonAction={this.buttonAction} resultType = {this.resultType} />
            </div>
        );
    }
}