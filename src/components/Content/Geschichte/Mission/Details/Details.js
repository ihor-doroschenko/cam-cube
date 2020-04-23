import React from 'react';
import ContentClasses from '../../../Content.module.css';

const Details = (props) => {

    const text = props.details.text.map( d => <><li>{d}</li><br/></>);
    
    return (
        <div className={`${ContentClasses.details} 
            ${props.id === 1 && ContentClasses.leftElement}
            ${props.id === 6 && ContentClasses.rightElement}`} style={{left: props.id === 1 && "50px", right: props.id === 6 && "50px"}}>
            <p className={ContentClasses.year}> <b>{props.details.name} <br/> {props.year} </b> </p>
            <ul>
                {text}
            </ul>
        </div>
    )
};

export default Details;
