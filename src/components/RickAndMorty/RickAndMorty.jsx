import React, { Component } from 'react'
import axios from 'axios'
import "./RickAndMorty.css"
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
       <div className="grid-container">
       {
          charac.length 
          ? charac.map(chara => (
            <div  className="element" key ={chara.id}>
              <b>{chara.name}</b>
              <img src = {chara.image}></img>
            </div>
          )) : null
        }
       </div>
      </React.Fragment>
    )
  }
}

export default RickAndMorty