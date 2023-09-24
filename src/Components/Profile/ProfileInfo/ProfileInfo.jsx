import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }
  const contactsEl =[]
  for (let contact in props.profile.contacts) {
    if (props.profile.contacts[contact]) {
      contactsEl.push(<li><span className={styles.fwBold}>{contact} </span>: {props.profile.contacts[contact]}</li>)
    }
        }
  return (
      <div>
        <div>
          <img src="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg" alt=""/>
        </div>
        <div className={styles.descriptionBlock}>
          <img src={props.profile.photos.large} alt=""/>
          <h3>{props.profile.aboutMe}</h3>
          <p>{props.profile.fullName}</p>
          <h3>Contacts:</h3>
          <ul>
            {
             contactsEl
            }
          </ul>
          <h3>Looking for a job: <span className={styles.fwNormal}>{props.profile.lookingForAJob ? 'Yes' : 'No'}</span></h3>
          <p><span className={styles.fwBold}>Looking for a job description</span>: {props.profile.lookingForAJobDescription}</p>
        </div>
      </div>
  )
}

export default ProfileInfo