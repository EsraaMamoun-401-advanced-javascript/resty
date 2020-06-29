import React from 'react';
import './form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            rest: ''
        }
    }

    handleUrl = event => {
        let url = event.target.value;
        this.setState({ url });
    }

    handleRest = event => {
        let rest = event.target.value;
        this.setState({ rest });
    }

    handleClick = event => {
        event.preventDefault();
        this.setState({
            url: this.state.url,
            rest: this.state.rest
        });
    }

    render() {
        return (
            <>
                <div id="mainDiv">
                    <form>
                        <div id="URL">
                        <label id="URL">
                            <span>URL:</span>
                            <input type="text" name="url" onChange={this.handleUrl}></input>
                            <button onClick={this.handleClick}>GO!</button>
                        </label>
                        </div>
                        <div id="inputs">
                        <span class="rest"><input type="radio" name="rest" value="GET" onChange={this.handleRest}></input>GET</span>
                        <span class="rest"><input type="radio" name="rest" value="POST" onChange={this.handleRest}></input>POST</span>
                        <span class="rest"><input type="radio" name="rest" value="PUT" onChange={this.handleRest}></input>PUT</span>
                        <span class="rest"><input type="radio" name="rest" value="DELETE" onChange={this.handleRest}></input>DELETE</span>
                        </div>
                    </form>
                    <div id="output">
                        {this.state.rest}   &nbsp; &nbsp; &nbsp; &nbsp;    {this.state.url}
                    </div>
                </div>
            </>
        )
    }
}

export default Form;