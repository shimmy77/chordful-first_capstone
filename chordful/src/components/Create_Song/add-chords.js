import React, { Component } from 'react'
import ChordForm from './ChordForm'

export default class AddChords extends Component {
    render() {
        return (
            <section className= 'CreateSong'>
                <ChordForm>
                    <div className='button'></div>
                    <button type='submit'>
                        Add Chords
                    </button>
                </ChordForm>
            </section>
        )
    }
}