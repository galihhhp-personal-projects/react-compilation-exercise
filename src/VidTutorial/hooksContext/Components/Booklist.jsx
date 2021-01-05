import React, { Component } from 'react';

export default class Booklist extends Component {
    render() {
        return (
            <div className='book-list d-flex flex-column align-items-center'>
                <ul>
                    <li>the way the king</li>
                    <li>the name of the winds</li>
                    <li>the final empire</li>
                </ul>
            </div>
        );
    }
}
