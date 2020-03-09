import React,  { Component } from 'react'

export default class AddChords extends Component {
    static defaultProps = { 
        tabs: [],
    }
    render() {
        const { tabs } = this.props
        return ( 
            <section className ='AddChords'>
                <h2> Create chords for this song </h2>
            </section>
        )
    }
}