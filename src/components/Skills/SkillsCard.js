import React, { Component } from 'react'
import config from '../../config'
import TokenService from '../../services/token-service'
// import { Link } from 'react-router-dom'
import Timer from 'react-compound-timer'

export default class SkillsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time_left:this.props.skill.time_left,
            error:null,
            loading:false,
        }
    }
    
    handleStopClick = (time) => {
        console.log(time)
        this.setState({error:null,loading:true})
    
        fetch(`${config.API_ENDPOINT}/skills/${this.props.skill.id}`,{
          method:'PATCH',
          headers: {
            'content-type':'application/json',
            'Authorization':`bearer ${TokenService.getAuthToken()}`,
          },
          body:JSON.stringify({time_left: time

          }) 
        })
        .then(res => !(res.ok)
        ?res.json().then(e => Promise.reject(e))
        :res)
        .then(() => {
          const newTime = this.state.time
    
          this.setState({time:newTime,loading:false})
        })
        .catch(error => {
          this.setState({error,loading:false})
        })
    }


    handleDeleteClick = (e) => {
        this.setState({error:null,loading:true})
        const id = e.target.closest('li').id
    
    
        fetch(`${config.API_ENDPOINT}/:skillId`,{
          method:'DELETE',
          headers: {
            'content-type':'application/json',
            'Authorization':`bearer ${TokenService.getAuthToken()}`,
          }
        })
        .then(res => !(res.ok)
        ?res.json().then(e => Promise.reject(e))
        :res)
        .then(() => {
          const newResults = this.state.results.filter(result => result.id !== Number(id))
    
          this.setState({results:newResults,loading:false})
        })
        .catch(error => {
          this.setState({error,loading:false})
        })
    }  
    
    
    render() {
        console.log(this.state)
        return (
            <div className="skills-card">
                <div className="skills-card-header">
                    <h3>{this.props.skill.title}</h3>
                    <div>delete</div>
                </div>
                <div>
                    <Timer
                    initialTime={this.state.time_left}
                    direction="backward"
                    startImmediately={false}
                    lastUnit="h"
                    >
                    {({ start, pause, timerState, getTime }) => (
                        <React.Fragment>
                            <div className="timer">
                                <Timer.Hours />: 
                                <Timer.Minutes />:
                                <Timer.Seconds />
                            </div>
                            <div hidden>{getTime()}</div>
                            <div className="button-center-container">
                                <button className="button-primary" onClick={()=>{pause(); this.handleStopClick (getTime()) }}>Stop</button>
                                <div className="spacer-h"></div>
                                <button className="button-primary" onClick={start}>Start</button>
                            </div>
                        </React.Fragment>
                    )}
                    </Timer>
                </div>
            </div>
        )
    }}



      // place event handler on stop to send timer to backend, start button fetches remaining time to begin countdown