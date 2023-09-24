import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
  _callSubscriber() {
    console.log('state is changed')
  },
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: `It's my first post!`, likesCount: 12},
        {id: 2, message: `It's my second post!`, likesCount: 23},
      ],
      newPostText: 'hui42sm_8=====>'
    },

    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Dumych'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Sascha'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Sascha'},
        {id: 7, name: 'Vicktor'}
      ],
      messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'How is you kung-foo'},
        {id: 4, message: 'Zaebis'},
        {id: 5, message: 'Zaebisa esli pisa pahnet zaebisa'},
        {id: 6, message: 'Bez B'},
        {id: 7, message: 'Ockay'}
      ],
      newMessageText: ''
    }
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state)
  }
}

export default store