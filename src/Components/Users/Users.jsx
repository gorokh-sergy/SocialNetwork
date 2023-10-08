import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/user.png'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
      <div>
        <div className={ styles.pageSelector }>
          {
            pages
                .map(page => <div
                    className={ props.currentPage === page && styles.selectedPage }
                    onClick={ () => {
                      props.onPageChanged(page)
                    } }>{ page }</div>)
          }
        </div>
        {
          props.users.map(user => <div key={ user.id }>
                <span>
                  <div>
                    <NavLink to={ `/profile/${ user.id }` }>
                      <img src={ user.photos.small ? user.photos.small : userPhoto } className={ styles.userPhoto }
                           alt=""/>
                    </NavLink>
                  </div>

                  <div>
                    { user.followed
                        ? <button
                            disabled={ props.followingInProgress.some(id => id === user.id) }
                            onClick={ () => {
                              props.unFollow(user.id)
                            }  }>Unfollow</button>
                        : <button
                            disabled={ props.followingInProgress.some(id => id === user.id) }
                            onClick={ () => {
                              props.follow(user.id)
                        } }> Follow</button> }

                  </div>
                </span>

                <span>
                  <span>
                    <div>
                      { user.name }
                    </div>

                    <div>
                      { user.status }
                    </div>
                  </span>
                  <span>
                    <div>
                      { 'user.location.country' }
                    </div>
                    <div>
                      { 'user.location.city' }
                    </div>
                  </span>
                </span>
              </div>
          )
        }
      </div>
  )
}

export default Users