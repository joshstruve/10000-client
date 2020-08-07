import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from './../config'
import TokenService from './../services/token-service'
import Header from '../components/Header/Header'
import SkillsCard from '../components/Skills/SkillsCard'

export default class Home extends Component {
    state = {
        skills:[]
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch(`${config.API_ENDPOINT}/skills`, {
          method: 'GET',
          headers:{
            'content-type':'application/json',
            'Authorization':`bearer ${TokenService.getAuthToken()}`,
          }
        })
        .then(res => (!res.ok)
        ?res.json().then(e => Promise.reject(e))
        :res.json())
        .then(res => {
          console.log(res)
            this.setState({skills:res,loading:false})
        })
        .catch(error => {
          this.setState({error:error,loading:false})
        })
    }

    render() {
        const skills = this.state.skills.map(skill => <SkillsCard skill={skill} key={skill.id} /> )
        
        return (
            <div>
                <div className="container">
                    <Header />
                    <div className="section-header">
                    <h2>Skills</h2>
                    </div>
                    {skills}
                    {/* <SkillsCard /> */}
                    <div className="button-center-container">
                    <Link to='/addskill'>
                    <button className="button-primary">Add Skill</button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}