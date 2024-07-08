import Styles from './card.module.scss'

function Card(props) {
  return (
    <div className='card'>
      <div className='card-data'>
        <label className='card-label'>
          <input type="checkbox" checked={props.complete} />
          <div className="checkbox"></div>
          <div className='card-title'>
            <span>{props.title}</span>
            <span className='card-date'>{props.date}</span>
          </div>
        </label>
      </div>
      <div className='card-buttons'>
        <button><i className="fa-solid fa-pen"></i></button>
        <button><i className="fa-solid fa-trash-can"></i></button>
      </div>
    </div>
  )
}

export default Card;
