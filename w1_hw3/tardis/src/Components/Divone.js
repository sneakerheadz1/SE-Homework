import React, { Component } from 'react'
import Divtwo from './Divtwo'




export default class Divone extends Component {
    // state = {
    //     tardis: {
    //       name: 'Time and Relative Dimension in Space',
    //       caps: false,
    //     }
    //   };

    //   changeIt = (text) =>{
    //     if (this.state.tardis.caps) {
    //       this.setState({
    //         tardis: {
    //           name: this.state.tardis.name.toLowerCase(),
    //           caps: false
    //         }
    //       })
    //     } else {
    //       this.setState({
    //         tardis: {
    //           name: this.state.tardis.name.toUpperCase(),
    //           caps: true
    //         }
    //       })
    //     }
    //   }
    render() {
        return (
            <div>
                {/* <h3 >{this.props.divone.name}</h3> */}
                <h3>
                <Divtwo />
                    {/* {this.state.tardis} */}
                    {/* <span onClick={this.changeIt}>
                    <Divtwo divtwo={this.state.tardis}  />
                    <Divtwo />
                    </span> */}
                </h3>
            </div>
        )
    }
}
