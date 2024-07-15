import moment from 'moment';
import Styles from './card.module.scss'
import Button from '../button/button';
import { useState } from 'react';

function Card(props) {
  const [done, setDone] = useState(props.complete)

  const handleCheckboxChange = (event) => {
    setDone(event.target.checked)
  }

  return (
    <div className={[Styles.card, done ? Styles.complete : ''].join(' ')}>
      <div className={Styles.data}>
        <label className={Styles.label}>
          <input type="checkbox" onChange={handleCheckboxChange} checked={done} />
          <div className={Styles.checkbox}></div>
          <div className={Styles.title}>
            <span>{props.title}</span>
          </div>
        </label>
        <span className={Styles.date}>{moment(props.dueDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>
      </div>
      <div className={Styles.buttons}>
      <Button content={<i className="fa-solid fa-pen"></i>} icon={true} type="secondary" />
        <Button content={<i className="fa-solid fa-trash-can"></i>} icon={true} type="error" />
      </div>
    </div>
  )
}

export default Card;


