import React, { Component } from 'react'
import ChordForm from './ChordForm'

export default class AddChords extends Component {
    static defaultProps = {
        tabs: []
    }
    render() {
        const { tabs } = this.props
        return (
            <section className= 'CreateSong'>
                <h2> Add Chords </h2>
                <ChordForm>
                    <div className='field'></div>
                </ChordForm>
            </section>
        )
    }
}