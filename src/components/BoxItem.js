import React from 'react'

export const BoxItem = (props) => {
    const styleClass = 'job ' + props.data.id;
    return (<div className={styleClass}>
        <h3>{props.data.title}</h3>
        <h6>{props.data.subTitle}</h6>
        <p>{props.data.description}  </p>
    </div>);
};