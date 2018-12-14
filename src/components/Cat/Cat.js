import React from "react";
import './Cat.css'

const Cat = props => (
    <div className="Cat">
            <img onClick={() => props.selectCat(props.alias)} alt={props.alias} src={props.image}/>
    </div>
);

export default Cat