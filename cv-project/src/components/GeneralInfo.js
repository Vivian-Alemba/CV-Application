import React, { Component } from 'react'
import EducationalExp from './EducationalExp'

 class GeneralInfo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            email:'',
            number:''

             
        }
    }
    handleNameChange=event=>{
        this.setState({
            name:event.target.value
        })
    }
    handleEmailChange=event=>{
        this.setState({
            email:event.target.value
        })
    }
    handleNumberChange=event=>{
        this.setState({
            number:event.target.value
        })
    }

    handleFormSubmit=event=>{
        alert(`${this.state.name} ${this.state.email} ${this.state.number}`)
    }
    
    render() {
        return (
           
            <form onSubmit={this.handleFormSubmit}>
                <h1>MY SIMPLE CV APPLICATION USING REACT</h1>
                <h3>General Information</h3>
                <div>
                    <label>Enter your Full Names</label>
                    <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
                </div>

                <div>
                    <label>Enter your EmailAddress</label>
                    <input type='email' value={this.state.email} onChange={this.handleEmailChange} />
                </div>

                <div>
                    <label>Enter your phone Number</label>
                    <input type='number' value={this.state.number} onChange={this.handleNumberChange} />
                </div>
               
                <EducationalExp />
                <button>Edit</button>
                <button>Submit</button>
            </form>
            

            
        )
    }
}

export default GeneralInfo
