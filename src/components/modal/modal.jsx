import Styles from './modal.module.scss'
import Button from '../button/button'
import { useState } from 'react'

const Modal = (props) => {

  const handleCloseClick = () => {
    props.setVisible(false)
  }

  if (props.visible) {
    return (
      <div className={Styles.modalWrapper}>
          <div className={Styles.modal}>
            <div className={Styles.modalHeading}>
              <h1>Task Title</h1>
            </div>
            <div className={Styles.modalBody}>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            </div>
            <div className={Styles.modalFooter}>
              <Button text='Close' type='secondary' onClick={handleCloseClick} />
            </div>
          </div>
        </div>
      )
  }
}

export default Modal
























