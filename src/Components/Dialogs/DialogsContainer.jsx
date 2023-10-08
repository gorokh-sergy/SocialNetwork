import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage
})

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => dispatch(sendMessageActionCreator()),
  updateNewMessageBody: (body) => dispatch(updateNewMessageTextActionCreator(body))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)