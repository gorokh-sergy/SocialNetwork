import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage
})

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => dispatch(sendMessageActionCreator()),
  updateNewMessageBody: (body) => dispatch(updateNewMessageTextActionCreator(body))
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer