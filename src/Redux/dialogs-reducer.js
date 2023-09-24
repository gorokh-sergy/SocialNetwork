const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Dumych' },
    { id: 3, name: 'Andrew' },
    { id: 4, name: 'Sascha' },
    { id: 5, name: 'Sveta' },
    { id: 6, name: 'Sascha' },
    { id: 7, name: 'Vicktor' }
  ],
  messages: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'How is you kung-foo?' },
    { id: 4, message: 'Fine!' },
    { id: 5, message: 'Cool!' },
    { id: 6, message: 'Awesome!' },
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case UPDATE_NEW_MESSAGE_TEXT:
      return  {
        ...state,
        newMessageText: action.newMsgText
      }

    case SEND_MESSAGE:
      const msg = state.newMessageText
      return  {
        ...state,
        messages: [...state.messages, { id: state.messages.length + 1, message: msg }],
        newMessageText: ''
      }

    default:
      return state
  }
}

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE
})
export const updateNewMessageTextActionCreator = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMsgText: newText
})

export default dialogsReducer