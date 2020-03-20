import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
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
        console.log(chords)
        return (
          <section className='ChordList'>
            <ul>
              <Link to='/chords'> Chords </Link>
              {chords.map(chord => 
                <li key={chord.id}>
                  <Chords 
                    id={chord.id}
                    title={chord.title}
                    artist={chord.artist}
                    
                  />
                </li>
                )}
            </ul>
            <div className='ChordList__button-container'>
              <Link to='/create-song'> Add Chords </Link>
      
            </div>
          </section>
        )
      }
    }