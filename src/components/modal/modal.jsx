import Styles from './modal.module.scss'
import Button from '../button/button'
import { useState } from 'react'

const Modal = (props) => {
  if (props.visible) {
    return (
      <div className={Styles.modalWrapper}>
          <div className={Styles.modal}>
            { props.children }
          </div>
        </div>
      )
  }
}

const Heading = (props) => {
  return (
    <div className={Styles.heading}>
      { props.children }
    </div>
  )
}

const Body = (props) => {
  return (
    <div className={Styles.body}>
      { props.children }
    </div>
  )
}

const Footer = (props) => {
  return (
    <div className={Styles.footer}>
      { props.children }
    </div>
  )
}

Modal.Heading = Heading
Modal.Body = Body
Modal.Footer = Footer

export default Modal




















