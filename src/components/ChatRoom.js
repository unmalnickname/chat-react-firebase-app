import React, { Component } from 'react';

class ChatRoom extends Component {
    constructor() {
        super()
        this.state = {
            message: '',
            messages: [
                { id: 1, text: 'Hola' },
                { id: 2, text: 'que tal' }
            ]
        }
    }
    render() {
        const currentMessages = this.state.messages.map((message, i) => {
            return (
                <li className="list-group-item list-group-item-action" key={message.id}>{message.text}</li>
            )
        })

        return (
            <div className="card">
                <div className="card-body">
                    <ul className="list-group-item">
                        {currentMessages}
                    </ul>
                </div>
                <div className="card-footer">
                    <input className="form-control" type="text" placeholder="Write A Message " />
                    <button className="btn btn-primary btn-block">Send Message</button>
                </div>
            </div>
        )
    }
}

export default ChatRoom