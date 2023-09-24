import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  const state = props.dialogsPage

  const dialogsElements = state.dialogs
      .map(dialog => <DialogItem name={ dialog.name } id={ `${ dialog.id }` }/>)
  const messagesElements = state.messages
      .map(message => <Message msg={ message.message }/>)
  const newMessageT = state.newMessageText

  const onSendSendMessageClick = () => {
    props.sendMessage()
  }
  const onNewMessageChange = (e) => {
    const body = e.currentTarget.value
    props.updateNewMessageBody(body)
  }

  return (
      <div className={ styles.dialogs }>

        <div className={ styles.dialogsItems }>
          { dialogsElements }
        </div>

        <div className={ styles.messages }>

          <div>
            { messagesElements }
          </div>

          <div>
            <div>
              <textarea value={ newMessageT }
                        onChange={ onNewMessageChange }
                        placeholder='Enter your message'/>
            </div>

            <div>
              <button onClick={ onSendSendMessageClick }>Send</button>
            </div>

          </div>

        </div>
      </div>)
}

export default Dialogs