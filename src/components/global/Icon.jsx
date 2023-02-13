import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ( { icon, css, event } ) => {
    return (
        <FontAwesomeIcon className={css} icon={icon} onClick={event}/>
    )
}

export default Icon;