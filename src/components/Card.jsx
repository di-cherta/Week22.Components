function Card (props){
    return (
        <div className="card">
            <h2 className="card-name">{props.name}</h2>
            <ul className="card-characteristics">
                <li className="card-universe"> <b>Вселенная:</b> {props.universe}</li>
                <li className="card-alterego"> <b>Альтер-эго:</b> {props.alterego}</li>
                <li className="card-occupation"> <b>Род деятельности:</b> {props.occupation}</li>
                <li className="card-friends"> <b>Друзья:</b> {props.friends}</li>
                <li className="card-superpowers"> <b>Суперсилы:</b> {props.superpowers}</li>
            </ul>
            <img src={props.url} alt={props.name} className="card-src"/>
        </div>
    );
}

export default Card;