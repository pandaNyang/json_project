import React,{ Component } from "react";

export class BlockTextArea extends Component {
    static defaultProps = {
        type: "",
    }
    
    state = {
        jsonData : "",
        
    }
    
    onChange = (event) => {
        // this.setState({
        //     jsonDataR : event.target.value
        // },() => {
            
        // console.log(this.state);
        // });
        this.props.change(event.target.value, this.props.type);
    }

    render() {
        //const [jsonData, setJsonData] = useState(""); //react hook 은.... function 타입에서만 쓸수 있다!

        return (
            <div className="textDiv">
                <form>
                    <textarea 
                        className="textBlock"
                        value={this.jsonData}
                        type={this.props.type}
                        onChange={this.onChange}
                    >
                    </textarea>
                </form>
            </div>
        );
    }
}