import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  follow, getUsers,
  setCurrentPage,
  unFollow
} from '../../Redux/users-reducer'
import Users from './Users'
import styles from './Users.module.css'
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux'

class UsersContainer extends Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return (
        <div className={ styles.usersWrapper }>
          { this.props.isFetching ? <Preloader/> : null }
          <Users totalUsersCount={ this.props.totalUsersCount }
                 pageSize={ this.props.pageSize }
                 currentPage={ this.props.currentPage }
                 onPageChanged={ this.onPageChanged }
                 users={ this.props.users }
                 unFollow={ this.props.unFollow }
                 follow={ this.props.follow }
                 followingInProgress={this.props.followingInProgress}
                 toggleFollowingProgress={this.props.toggleFollowingProgress}
          />
        </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress
})

const mapDispatchToProps = {
  follow,
  unFollow,
  setCurrentPage,
  getUsers
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)