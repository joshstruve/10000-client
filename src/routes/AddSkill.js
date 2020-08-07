import React from 'react'
import AddSkillForm from '../components/AddSkillForm/AddSkillForm'
import Header from '../components/Header/Header'

export default class AddSkill extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
          <div className='hero'>
            <div className="form-container">
            <h2>Add Skill</h2>
        <AddSkillForm {...this.props}/>
        </div>
        </div>
      </div>
    )
  }
}