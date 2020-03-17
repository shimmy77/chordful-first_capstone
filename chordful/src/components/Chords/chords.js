import React, { Component } from 'react'
import Header from './Header.js'

export default class Chords extends Component {
    static defaultProps = {
       onDeleteTabs: () => {},
    }
    static contextType = ApiContext;

    handleDelete = e => {
        e.preventDefault() 
        const chordId = this.props.id

        fetch(`${config.API_ENDPOINT}/tabs/${chordId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok) 
            return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then(() => {
            this.context.deleteChord(tabId)
            this.props.onDeleteChords(tabId)
        })
        .catch(error => {
            console.error({ error })
        })
    }
    render() {
        
        return (
            

        )
    }
}