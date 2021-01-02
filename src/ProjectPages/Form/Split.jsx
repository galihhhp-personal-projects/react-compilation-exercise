import React from 'react'
import './split.css'

export default function Split(props) {
    return (
        <div className="container-fluid split-page d-flex flex-row p-5">
            <div className='split-left mr-5'>
                {props.left}
            </div>
            <div className='split-right'>
                {props.right}
            </div>
        </div>
    )
}
