import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ChordForm from './ChordForm'
import AddChords from './add-chords'

export default class CreateSong extends Component {
    constructor(props) {
        super(props)
        this.tabs = { 
            title: '',
            artist: '',
            key: '',
            tuning: '',
            class: ''
        }
        this.handleSubmitTab = this.handleSubmitTab.bind(this)
        this.handleSubmitTab = this.handleSubmitTab.bind(this)
    }

        handleSubmitTab = (event) => {
            event.preventDefault()
            alert("Are you sure you want to add this tab?");
        }
        handleTab = (event) => {
            this.setState({title: event.target.value});
        }
    render() {
    const { tabs } = this.props
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
            <form onSubmit = {this.handleSubmitTab}>
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
