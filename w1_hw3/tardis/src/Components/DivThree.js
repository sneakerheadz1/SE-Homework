import React, { Component } from 'react'

export default class DivThree extends Component {
    render() {
        return (
            <div>
                <h3>
                    {
                        this.props.divthree.name
                    }
                </h3>
            </div>
        )
    }
}
