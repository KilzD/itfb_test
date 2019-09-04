import React from "react"

function Card(props) {
    return (<div className="Card">
            <img src={props.item.url}/>
            <h2>{props.item.title}</h2>
            <p>{"AlbumId:" + props.item.albumId}</p>
        </div>
    )
}

export default Card;