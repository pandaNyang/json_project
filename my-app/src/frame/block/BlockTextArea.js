import { Component } from "react";

export class BlockTextArea extends Component {
    render() {
        //const [aa, setText] = useState("");

        /*const onSubmit = (event) => {
            event.preventDefault();
            setText(aa);
        }*/

        return (
            <div className="textDiv">
                <form>
                    <textarea className="textBlock"></textarea>
                </form>
            </div>
        );
    }
}