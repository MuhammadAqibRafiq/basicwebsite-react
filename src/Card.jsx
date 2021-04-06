import React from 'react';

function Card(props){
    return(
        [
            <div className='cards'>
                <div classname='card'>
                    <img src={props.imgsrc} alt="mypic" className="card_img" />
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <h3 className="card_title">{props.name}</h3>
                        <a href={props.link} target="_blank">
                            <button>WATCH NOW</button>
                        </a>
                    </div>
                 </div>   
            </div>
        ]
    );
}
export default Card;