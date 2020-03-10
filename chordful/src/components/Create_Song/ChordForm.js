import React from 'react'

export default function ChordForm(props) {
    const { className, ...otherProps } = props
    return (
        <form
            className={['Chord-form', className].join('')}
            action='#'
            {...otherProps}
            />
    )
}