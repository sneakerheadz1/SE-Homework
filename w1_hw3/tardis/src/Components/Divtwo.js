import React, { Component } from 'react'
import DivThree from './DivThree'


export default class Divtwo extends Component {

    state = {
        tardis: {
          name: 'Time and Relative Dimension in Space',
          caps: false,
        }
      };

      changeIt = (text) =>{
        if (this.state.tardis.caps) {
          this.setState({
            tardis: {
              name: this.state.tardis.name.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: this.state.tardis.name.toUpperCase(),
              caps: true
            }
          })
        }
      }
    render() {
        return (
            <div>
                {/* <h3>{this.props.divone.divtwo.name}</h3> */}
                <h3>
                    {/* {
                        this.props.divtwo.name
                    } */}
                    <span onClick={this.changeIt}>
                    <DivThree divthree={this.state.tardis} />
                    </span>
                </h3>
                <div>
                <h3>
                    {
                        this.state.tardis.name
                    }
                </h3>
            </div> 
            </div>
            
        )  
        
    }
}
