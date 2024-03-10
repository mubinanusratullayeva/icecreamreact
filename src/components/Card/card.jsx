import stylecard from './card.module.scss';

export function Card(props) {
    return (
        <div className={stylecard.card}>
            <img className={stylecard.card_img} src={props.asset} alt={props.altas} />
            <h3 className={stylecard.card_title}>{props.title}</h3>
            <p className={stylecard.desc}>{props.desc}</p>
        </div>
    )
}