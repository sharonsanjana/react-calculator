import React, { Component } from 'react'
import axios from 'axios'

export class RickAndMorty extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       charac : [] ,
       errorMessage : ''
    }
  }

  componentDidMount() {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
      this.setState({charac : response.data.results})
      console.log( response.data.results)
    })
  }
  render() {
    const {charac, errorMessage} = this.state;
    return (
      <React.Fragment>
        Rick and Morty 
        {
          charac.length 
          ? charac.map(chara => (
            <div id ={chara.id}>
              <b>{chara.name}</b>
              <img src = {chara.image}></img>
            </div>
          )) : null
        }
      </React.Fragment>
    )
  }
}

export default RickAndMorty