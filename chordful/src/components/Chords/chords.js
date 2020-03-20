import React from 'react'
import ApiContext from '../ApiContext'
import config from '../../config'


export default class Chords extends React.Component {
    static defaultProps ={
      onDeleteChord: () => {},
    }
    static contextType = ApiContext;
  
    handleClickDelete = e => {
      e.preventDefault()
      const chordId = this.props.id
  
      fetch(`${config.API_ENDPOINT}/chords/${chordId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(() => {
          this.context.deleteChord(chordId)
        
          this.props.onDeleteChord(chordId)
        })
        .catch(error => {
          console.error({ error })
        })
    }
  
    render() {
      const { title, artist  } = this.props
      return (
        <div className='Chord'>
          <h2 className='Chord__title'> {title} by {artist}
          </h2>
          <button
            className='Chord__delete'
            type='button'
            onClick={this.handleClickDelete}
          >
            Delete Chord
          </button>
        </div>
      )
    }
  }
      