import React from 'react'
import buttonStyles from './ActionButton.module.css'

const ActionButton = ({text, link}) => {
  return (
    <a className={buttonStyles.actionBtn} href={link}>{text}</a>
  )
}

export default ActionButton