import moment from 'moment';
import Styles from './card.module.scss'
import Button from '../button/button';

function Card(props) {
  return (
    <div className='card'>
      <div className='card-data'>
        <label className='card-label'>
          <input type="checkbox" checked={props.complete} />
          <div className="checkbox"></div>
          <div className='card-title'>
            <span>{props.title}</span>
            <span className='card-date'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>
          </div>
        </label>
      </div>
      <div className='card-buttons'>
      <Button content={<i className="fa-solid fa-pen"></i>} icon={true} type="secondary" />
        <Button content={<i className="fa-solid fa-trash-can"></i>} icon={true} type="error" />
      </div>
    </div>
  )
}

export default Card;
