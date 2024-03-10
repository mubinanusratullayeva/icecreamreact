import stylebtn from './btn.module.scss'

export function Button(props) {
    return (
        <button className={stylebtn.standbt}>{props.text}</button>
    )
}