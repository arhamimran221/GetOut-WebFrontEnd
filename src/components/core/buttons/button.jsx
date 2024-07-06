import styles from './button.module.scss';

export default function Button(props) {
    const button_styles = props.hollow ? styles.primary_button_hollow : styles.primary_button;
    return <button
        className={`${button_styles} btn btn-outline-success`}
        type={props.type}
        style={props.styles}
        onClick={() => props.onClick()}
        disabled={props.disabled}
    >{props.text}</button>
}