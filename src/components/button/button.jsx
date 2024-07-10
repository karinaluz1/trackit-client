import Styles from './button.module.scss'

const Button = (props) => {
  return(
    <button className={[Styles.button, Styles[props.type], props.icon ? Styles.icon : ""].join(' ')} onClick={props.onClick}>
      { props.content }
    </button>
  )
}

export default Button


