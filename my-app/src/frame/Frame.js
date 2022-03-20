import {Component} from "react";
import {FrameHeader} from "./FrameHeader.js";
import {FrameBody} from "./FrameBody.js";
import { FrameFooter } from "./FrameFooter.js";
import '../App.css';


export class Frame extends Component{
    render() {
        return (
            <div>
                <FrameHeader></FrameHeader>
                <FrameBody></FrameBody>
                <FrameFooter></FrameFooter>
            </div>
        );
    }
}