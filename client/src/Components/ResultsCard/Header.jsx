import React from 'react'
import {Link} from 'react-router-dom';
export default props => {
    const rating = ()=>{
        var r = [];
        for(var i = 0; i < props.rating; i++){
            r.push(
                <i key={i} className="fas fa-star"></i>
            );
        }
        return r;
    }
    return (
        <>
        <article className="media is-hidden-mobile">
            <div className="media-left ">
                <figure className="image is-96x96">
                    <img src={props.image} alt="LocalsOnly"/>
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{props.name}</strong>
                        <br/>
                        {props.description}
                    </p>
                </div>
                <section className="pl-6 level content">
                    <div className="level-left">
                        <div className="icon has-text-info level-item">
                            {rating(props.rating)}
                        </div>
                        <p className="pl-6 level-item">
                            {props.reviewCount} {props.reviewCount === 1 ? "review" : "reviews"}
                        </p>
                    </div>
                </section>
            </div>
            <div className="media-right">
                <Link className="content row button is-primary is-outlined" to={`/local?id=${props.id}`}>View</Link>
            </div>
        </article>
        <Link className="is-hidden-tablet" to={`/local?id=${props.id}`}>
        <div className="columns is-mobile">
            <div className="column">
                <figure className="image is-96x96">
                    <img src={props.image} alt="LocalsOnly"/>
                </figure>
            </div>
            
        </div>
                <p>
                        <strong>{props.name}</strong>
                        <br/>
                        {props.description}
                    </p>
                    
        </Link>
        </>
    )
}
