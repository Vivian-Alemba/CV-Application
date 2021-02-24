import React, { Component } from 'react'
import PracticalExp from './PracticalExp'

class EducationalExp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            school:'',
            title:'',
            date:''
             
        }
    }
    handleSchoolChange=event=>{
        this.setState({
            school:event.target.value
        })
    }
    handleTitleChange=event=>{
        this.setState({
            title:event.target.value
        })
    }
    handleDateChange=event=>{
        this.setState({
            date:event.target.value
        })
    }
    


    render() {
        return (
            <form>
                <h3>Educational Experience</h3>
                <div>
                    <label>Enter the name of school</label>
                    <input type='text' value={this.state.school} onChange={this.handleSchoolChange}/>
                </div>

                <div>
                    <label>Enter the title of your study</label>
                    <input type='text' value={this.state.title} onChange={this.handleTitleChange} />
                </div>

                <div>
                    <label>Enter the date of your study</label>
                    <input type='date' value={this.state.date} onChange={this.handleDateChange} />
                </div>

                <PracticalExp />
            </form>
        )
    }
}

export default EducationalExp
