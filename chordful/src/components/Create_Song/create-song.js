import React, { Component } from 'react'
import ChordForm from './ChordForm'

export default class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('button was clicked')
    }
        render() {
            return (
                <button onClick={this.handleSubmit}></button>
            )
        }
    }
