import React, {Component} from "react";
import {BlockTextArea} from "./block/BlockTextArea.js";
import { ActionButton } from "./block/ActionButton.js";


export class FrameBody extends Component{
    constructor(props) {
        super(props);
        this.state = {
            resultType : 'INITIAL',
            jsonData : '',
            jsonDataL : '',
            jsonDataR: '',
            buttonActionStatus : 'INITIAL'
        }
    }
    
    changeResultType = (result) =>{
        this.resultType = result
    }

    changeJsonDataL = (jsonL) =>{
        if(this.state.buttonActionStatus == 'INITIAL')
        this.setState({jsonDataL  : jsonL})
    };
    changeJsonDataR = (jsonR) =>{
        if(this.state.buttonActionStatus == 'INITIAL')
        this.setState({jsonDataR  : jsonR})
    };

    changeJsonData = (json, type ) =>{
        if(type == 'left')
        this.setState({jsonDataL  : json})
        if(type =='right')
        this.setState({jsonDataR : json})
    };


    buttonAction = (actionType) =>{
        console.log(actionType); 
      
        this.setState({buttonActionStatus : actionType},() =>{
    

            if(this.state.buttonActionStatus == 'COMPARE') {
/**
 * 여기서 이제 jsonDataL,jsonDataR을 들고와서
 * 요로콩콩하게 compare 해주면 되지 않을까..?
 */
                console.log(this.state);
                this.state.jsonDataL = "";
                
            }
        })
    }

    render() {
        return (
            <div className="bodyFrame">
                <BlockTextArea type='left'  change={this.changeJsonData}/>
                <BlockTextArea type='right' change={this.changeJsonData}/>
                <ActionButton buttonAction={this.buttonAction} resultType = {this.state.resultType} />
            </div>
        );
    }
}