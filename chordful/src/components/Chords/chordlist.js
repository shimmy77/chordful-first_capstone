import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddChords from '../Create_Song/add-chords'
import ApiContext from '../ApiContext'
import Chords from './chords'


export default class ChordList extends React.Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
      static contextType = ApiContext
    
      render() {
        const { chords=[] } = this.context
        return (
          <section className='ChordList'>
            <ul>
                <li key={chords.id}>
                  <Chords
                    id={chords.id}
                    artist={chords.artist}
                  />
                </li>
            </ul>
            <div className='ChordList__button-container'>
              <AddChords
                tag={Link}
                to='/create-song'
                type='button'
                className='ChordList__add-chord-button'
              >
                <FontAwesomeIcon icon='plus' />
                <br />
                Chords
              </AddChords>
            </div>
          </section>
        )
      }
    }