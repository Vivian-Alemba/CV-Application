import React, { Component } from 'react'

 class PracticalExp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             company:'',
             position:'',
             jobs:'',
             start:'',
             end:''
              
         }
     }

     handleCompanyChange=event=>{
         this.setState({
             company:event.target.value
         })
     }
     handlePositionChange=event=>{
         this.setState({
             position:event.target.value
         })
     }
     handleJobChange=event=>{
         this.setState({
             jobs:event.target.value
         })
     }
     handleStartChange=event=>{
         this.setState({
             start:event.target.value
         })
     }
     handleEndChange=event=>{
         this.setState({
             end:event.target.value
         })
     }
     
    render() {
        return (
            <form>
                <h3>Practical Experience</h3>
                <div>
                    <label>Enter the name of the Company</label>
                    <input type='text' value={this.state.company} onChange={this.handleCompanyChange} />
                </div>

                <div>
                    <label>Enter the title of your position</label>
                    <input type='text' value={this.state.title} onChange={this.handlePositionChange} />
                </div>

                <div>
                    <label>What is your main tasks of the jobs</label>
                    <textarea type='text' value={this.state.jobs} onChange={this.handleJobChange}></textarea>
                </div>

                <div>
                    <label>Start date</label>
                    <input type='date' value={this.state.start} onChange={this.handleStartChange}/>
                    <label>End date</label>
                    <input type='date' value={this.state.end} onChange={this.handleEndChange} />
                </div>
            </form>
        )
    }
}

export default PracticalExp
