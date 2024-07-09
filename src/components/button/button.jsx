import Styles from './button.module.scss'

const Button = (props) => {
  return(
    <button className={[Styles.button, Styles[props.type]].join(' ')} onClick={props.onClick}>
      { props.text }
    </button>
  )
}

export default Button




