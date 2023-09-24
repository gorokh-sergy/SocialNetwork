import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unFollow
} from '../../Redux/users-reducer'
import axios from 'axios'
import Users from './Users'
import styles from './Users.module.css'
import Preloader from '../common/Preloader/Preloader'


class UsersContainer extends Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
        .then(response => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`)
        .then(response => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items)
        })
  }

  render() {
    return (
        <div className={styles.usersWrapper}>
          { this.props.isFetching ? <Preloader /> : null }
          <Users totalUsersCount={ this.props.totalUsersCount }
                 pageSize={ this.props.pageSize }
                 currentPage={ this.props.currentPage }
                 onPageChanged={ this.onPageChanged }
                 users={ this.props.users }
                 unFollow={ this.props.unFollow }
                 follow={ this.props.follow }
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
  isFetching: state.usersPage.isFetching
})

const mapDispatchToProps = {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)