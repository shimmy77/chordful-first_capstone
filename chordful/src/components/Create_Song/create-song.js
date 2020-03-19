import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import ChordForm from './ChordForm'
import AddChords from './add-chords'

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
            const newChord = {
                //chordId: event.target['chord-chord-id'].value,
                title: event.target['chord-title'].value,
                artist: event.target['chord-artist'].value,
                key: event.target['chord-key'].value,
                tuning: event.target['chord-tuning'].value,
                lyrics: event.target['chord-lyrics'].value
            }
            fetch(`$config.API_ENDPOINT/chords`, {
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
     const { chords } = this.props
  
    return (
        <section className="CreateTab">
            <h2> Create a song(tab) </h2>
            {/* <Link to={'/create-tab/'}></Link>  */}
            <ChordForm>
            <form onSubmit = {this.handleSubmitChord}>
                <div className='field'>
                    <label htmlFor='chord-title'>
                        Title: 
                    </label>
                    <input type='text' id='chord-title' />
                </div>
                <br></br>
                <div className='field'>
                    <label htmlFor='chord-artist'>
                        Artist: 
                    </label>
                    <input type='text' id='chord-artist'/>
                </div>
                <br></br>
                <div className='field'>
                    <label htmlFor='chord-key'>
                        Key: 
                    </label>
                    <input type='text' id='chord-key'/>
                </div>
                <br></br>
                <div className='field'>
                    <label htmlFor='chord-tuning'>
                        Tuning: (what tune the strings need to be) <br></br>
                    </label>
                    <input type='text' id='chord-tuning' />
                </div>
                <br></br>
                
                <div className='field'>
                    <label htmlFor='chord-lyrics'>
                        Lyrics: 
                    </label>
                    <br></br>
                    <textarea type='text' id='chord-lyrics' />
                </div>
                    <AddChords />
               </form>
            </ChordForm>

        </section>

    )}

}
