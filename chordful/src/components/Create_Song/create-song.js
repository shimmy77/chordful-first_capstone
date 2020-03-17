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
                chordId: event.target['chord-chord-id'].value,
                title: event.target['chord-title'].value,
                artist: event.target['chord-artist'].value,
                key: event.target['chord-key'].value,
                tuning: event.target['chord-tuning'].value,
                class: event.target['chord-class'].value,
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
    // const { chords } = this.props
    const options = [
        { value: 'chords', label: 'Chords' },
        { value: 'electric', label: 'Electric'},
        { value: 'bass', label: 'Bass'},
    ];
    return (
        <section className="CreateTab">
            <h2> Create a song(tab) </h2>
            {/* <Link to={'/create-tab/'}></Link>  */}
            <ChordForm>
            <form onSubmit = {this.handleSubmitChord}>
                <div className='field'>
                    <label htmlFor='song-title-input'>
                        Title: 
                    </label>
                    <input type='text' id='song-title-input' />
                </div>
                <br></br>
                <div className='field'>
                    <label htmlFor='song-artist-input'>
                        Artist: 
                    </label>
                    <input type='text' id='song-artist-input'/>
                </div>
                <br></br>
                <div className='field'>
                    <label htmlFor='song-key-input'>
                        Key: 
                    </label>
                    <input type='text' id='song-key-input'/>
                </div>
                <br></br>
                <div className='field'>
                    <label htmlFor='song-tuning-input'>
                        Tuning: (what tune the strings need to be) <br></br>
                    </label>
                    <input type='text' id='song-tuning-input' />
                </div>
                <br></br>
                <div className='field'>
                    <label htmlFor='song-class-select'>
                    Class: 
                    </label>
                    <select id='song-class-select'>
                        <option value={null}>...</option>
                        <option value={options}> Chords</option>
                        <option value={options}> Electric</option>
                        <option value={options}> Bass</option>
                    </select>
                </div>
                <br></br>
                <div className='field'>
                    <label htmlFor='song-lyric-input'>
                        Lyrics: 
                    </label>
                    <br></br>
                    <textarea type='text' id='song-lyric-input' />
                </div>
                    <input type="submit" value="Add Tabs"  />
               </form>
            </ChordForm>

        </section>

    )}

}
