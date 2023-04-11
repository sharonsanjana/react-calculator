import React, { Component } from 'react'

export class CalculatorComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       input: ''
    }
  }

  CalculateHandler = event => {
    this.setState({
      input : event.target.value
    })

    console.log(this.state.input)
  }

  SubmitHandler = event => {
    
    let answer = eval(this.state.input)
    event.preventDefault()
    this.setState({
      input:answer
    })
  }

  clearHandler = event => {
    
    this.setState({
      input:""
    })
  }
  buttonHandler = eve => {
let previous = this.state.input
this.setState({
  input: previous + eve.target.value
})

  }


  

  render() {
    // const {input} = this.state
    return (
      
      <React.Fragment>
        <div>Calculator
      <div className="calci">
        <form>
          
          <br/>

          <table>
            <tr><input type="text" value = {this.state.input} onChange = {this.CalculateHandler}/></tr>
            <tr>
                <button type="button" value="1"onClick = {this.buttonHandler} > 1 </button>
              <button type="button" value="2" onClick = {this.buttonHandler}> 2 </button>
              <button type="button" value="3" onClick = {this.buttonHandler}> 3 </button>
              <button type="button" value="+" onClick = {this.buttonHandler}> + </button>
            </tr>
          
         <tr>
            <button type="button" value="4"onClick = {this.buttonHandler} > 4 </button>
              <button type="button" value="5"onClick = {this.buttonHandler} > 5 </button>
              <button type="button" value="6"onClick = {this.buttonHandler} > 6 </button>
              <button type="button" value="-" onClick = {this.buttonHandler}> - </button>
         </tr>
         <tr>
          <button type="button" value="7" onClick = {this.buttonHandler}> 7 </button>
            <button type="button" value="8"onClick = {this.buttonHandler} > 8 </button>
            <button type="button" value="9" onClick = {this.buttonHandler}> 9 </button>
            <button type="button" value="*"onClick = {this.buttonHandler} > * </button>
         </tr>
          
          <tr><button type="button" value="0" onClick = {this.buttonHandler}> 0 </button>
          <button type="button" value="/" onClick = {this.buttonHandler}> / </button>
          <button type ="submit" onClick = {this.SubmitHandler} >=</button>
          <button type="button" onClick = {this.clearHandler} > clear </button></tr>
          </table>
          
          

          
        </form>
      </div>
    </div>
      </React.Fragment>
    )
  }
}

export default CalculatorComponent