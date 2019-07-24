import React from 'react';
import styles from './Result.css'

const Result = (props) => {
    return <div className='Result'>
        {props.output!==''?props.output:0}
    </div>
}

export default Result;