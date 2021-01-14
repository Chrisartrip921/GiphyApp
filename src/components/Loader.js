import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Loader = () => {
    return (
        <div>
            <FontAwesomeIcon className="fa-4x fa-spin " icon = {faSpinner}/>
        </div>
    )
}

export default Loader;
