import React, { Component } from 'react'

export default class Stats extends Component {
    render() {
        return (
            <div id='stat-bar'>

                <div className='reviews'>
                     <h4> Reviews </h4>
                     <h3>1,281</h3>
                </div>

                <div className ='rating'>
                     <h4> Average Rating </h4>
                     <h3>4.6</h3>
                </div>

                <div className='analysis'>
                     <h4> Analysis </h4>
                     <h3>1,200</h3>
                     <h3>1,281</h3>
                     <h3>1,281</h3>
                </div>
            </div>
        )
    }
}
