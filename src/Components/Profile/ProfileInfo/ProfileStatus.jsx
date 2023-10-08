import React, { Component } from 'react'

class ProfileStatus extends Component {

  state = {
    editMode: false
  }

  toggleEditMode = () => {
    console.log(this)
    this.setState( {editMode: !this.state.editMode})
  }

  render() {
    return (
        <div>
          {
              !this.state.editMode &&
              <div>
                <span onDoubleClick={ this.toggleEditMode }>{ this.props.status }</span>
              </div>
          }

          {
              this.state.editMode &&
              <div>
                <input autoFocus={true} onBlur={ this.toggleEditMode } value={ this.props.status }/>
              </div>
          }
        </div>
    )
  }
}

export default ProfileStatus