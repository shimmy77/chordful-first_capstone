import React, { Component } from 'react'
import Header from './Header.js'

export default class Chords extends Component {
    static defaultProps = {
        tabs: [],
    }
    render() {
        const { tabs } = this.props
        return (
            <Header></Header>
            

        )
    }
}