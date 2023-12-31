import { usersAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts: [
    { id: 1, message: `It's my first post!`, likesCount: 12 },
    { id: 2, message: `It's my second post!`, likesCount: 23 },
  ],
  newPostText: 'post number 42 ',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }


    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
}
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer