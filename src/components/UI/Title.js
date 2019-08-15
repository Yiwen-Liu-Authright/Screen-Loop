import React from 'react';

const title = (props) => {
    return (
        <div className="title">
            <h1 className="display-4">{props.headerTitle}</h1>
            <p className="lead">{props.comments}</p>
            {/* <ItemListComponent></ItemListComponent> */}
        </div>
    )
}

export default title;