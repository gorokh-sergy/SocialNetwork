import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../Redux/profile-reducer'
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

export function withRouter(Children) {

  return (props) => {

    const match = { params: useParams() }
    return <Children { ...props } match={ match }/>
  }
}

class ProfileContainer extends Component {

  componentDidMount() {

    const userId = this.props.match.params.userId
    this.props.getUserProfile(userId)

  }

  render() {

    return (
        <Profile { ...this.props } profile={ this.props.profile }/>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter
)(ProfileContainer)
