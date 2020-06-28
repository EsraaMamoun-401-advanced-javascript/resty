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
        // console.log('cliiiiiiiiiiiiiick');
    }

    render() {
        return (
            <>
                <div id="mainDiv">
                    <form>
                        <label id="URL">
                            <span>URL:</span>
                            <input type="text" name="url" onChange={this.handleUrl}></input>
                        </label>
                        <div id="inputs">
                            <input type="radio" id="" name="rest" value="GET" onChange={this.handleRest}></input><label>GET</label>
                            <input type="radio" id="" name="rest" value="POST" onChange={this.handleRest}></input><label>POST</label>
                            <input type="radio" id="" name="rest" value="PUT" onChange={this.handleRest}></input><label>PUT</label>
                            <input type="radio" id="" name="rest" value="DELETE" onChange={this.handleRest}></input><label>DELETE</label>
                        </div>
                        <button onClick={this.handleClick}>GO!</button>
                    </form>
                    <div id="output">
                        {this.state.rest}  <span> &nbsp; &nbsp; &nbsp; </span>    {this.state.url}
                    </div>
                </div>
            </>
        )
    }
}

export default Form;