import React from 'react'
import config from '../../config'
import TokenService from '../../services/token-service'

export default class AddSkillForm extends React.Component {
  state={
    error:null,
    loading:false
  }

  handleAddSkillFormSubmit = (ev) => {
    ev.preventDefault()
    this.setState({error:null,loading:true})

    const {title} = ev.target

    fetch(`${config.API_ENDPOINT}/skills`, {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        'Authorization':`bearer ${TokenService.getAuthToken()}`,
      },
      body:JSON.stringify({
        title:title.value,
      })
    })
    .then(res => (!res.ok)
    ?res.json().then(e => Promise.reject(e))
    :res.json())
    .then(() => {
      this.setState({loading:false})
      this.props.history.push('/skills')
    })
    .catch(error => {
      this.setState([error,false])
    })    
  }

  render(){
    const error = this.state.error
    return (
      <div>
        <form onSubmit={this.handleAddSkillFormSubmit}>
          <legend hidden>Add Skill Form</legend>
          <fieldset>
            <div>
              <div>
                <label hidden htmlFor='title'>Title</label>
                <input placeholder="title" id='title' name='title' />
              </div>
              {error && <div>{error.error}</div>}
              {this.state.loading && <div className='loading'>Adding Skill</div>}
              <div>
                <button className="button-primary" disabled={this.state.loading}>Add Skill</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
