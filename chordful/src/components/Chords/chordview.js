import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import ApiContext from '../ApiContext'
import Chords from './chords'
import { findChord } from './chords-helpers'


export default class ChordView extends React.Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
      static contextType = ApiContext
    
      render() {
        const { chords=[] } = this.context
        const { chordId } = this.props.match.params
        const chord = findChord(chords, chordId) || { lyrics: ''}
        console.log(chords)
        return (
          <section className='ChordView'>
            <ul>
              {chords.map(chord => 
                <li key={chord.id}>
                  <Chords 
                    id={chord.id}
                    title={chord.title}
                    artist={chord.artist}
                    key={chord.key}
                    tuning={chord.tuning}
                    lyrics={chord.lyrics}

                  />
                </li>
                )}
            </ul>
            <div className='ChordView__content'>
             
            </div>
          </section>
        )
      }
    }