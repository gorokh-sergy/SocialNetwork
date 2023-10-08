import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToPropsForRedirect = state => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Children) => {

  class RedirectComponent extends Component {
    render() {
      if (!this.props.isAuth) return <Navigate to='/login'/>

      return <Children {...this.props}/>
    }
  }


  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)


  return ConnectedAuthRedirectComponent
}