import React, { Component } from 'react'
import axios from 'axios'

export class RickAndMorty extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts : [] ,
       errorMessage : ''
    }
  }

  componentDidMount() {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
      console.log(response)
    })
  }
  render() {
    return (
      <div>RickAndMorty</div>
    )
  }
}

export default RickAndMorty