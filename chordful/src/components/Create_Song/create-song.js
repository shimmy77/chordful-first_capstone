import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import ChordForm from './ChordForm'
import AddChords from './add-chords'
import Navbar from '../Navbar/navbar'
import config from '../../config'
import './create-song.css'

export default class CreateSong extends Component {
  static defaultProps = {
      history: {
          push: () => {}
      },
  }
        static contextType = ApiContext;

        handleSubmitChord = (event) => {
            event.preventDefault()
            alert("Are you sure you want to add this tab?");
            console.log(event.target)
            console.log(event.target['chord-title'])
            const newChord = {
                title: event.target['chord-title'].value,
                artist: event.target['chord-artist'].value,
                key: event.target['chord-key'].value,
                tuning: event.target['chord-tuning'].value,
                lyrics: event.target['chord-lyrics'].value
            }
            
            fetch(`${config.API_ENDPOINT}/chords`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newChord),
            })
            .then(res => {
                if (!res.ok)
                    return res.json().then(event => Promise.reject(event))
                return res.json()
            })
            .then(chord => {
                this.context.addChords(chord)
                this.props.history.push(`/chords/${chord.chordId}`)
            } )
            .catch(error => {
                console.error ({ error })
            })
        }
        handleChord = (event) => {
            this.setState({title: event.target.value});
        }
    render() {
    return (
        <section className="CreateTab">
            <h2> Create a song(tab) </h2>
    
            <form onSubmit = {this.handleSubmitChord}>
                <div className='field'>
                    <label htmlFor='chord-title'>
                        Title: 
                    </label>
                    <input type='text' name='chord-title' />
                </div>
                <br></br>
                <div className='field'>
                    <label htmlFor='chord-artist'>
                        Artist: 
                    </label>
                    <input type='text' name='chord-artist'/>
                </div>
                <br></br>
                <div className='field'>
                    <label htmlFor='chord-key'>
                        Key: 
                    </label>
                    <input type='text' name='chord-key'/>
                </div>
                <br></br>
                <div className='field'>
                    <label htmlFor='chord-tuning'>
                        Tuning: (what tune the strings need to be) <br></br>
                    </label>
                    <input type='text' name='chord-tuning' />
                </div>
                <br></br>
                
                <div className='field'>
                    <label htmlFor='chord-lyrics'>
                        Lyrics: 
                    </label>
                    <br></br>
                    <textarea type='text' name='chord-lyrics' />
                </div>
                    <AddChords />
               </form>
            <footer>
    
            </footer>
        </section>

    )}

}
