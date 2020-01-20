import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" opacity={this.props.opacity}>   
        {/* your conditional code here! */}
        
      </div>
    )
  }

  // reRender(propOpacity) {
  //   let nonFloat = propOpacity * 100
    
  //   while( nonFloat > 20) {
  //     console.log(nonFloat)
  //     <ColorBox opacity={nonFloat / 100} />
  //     nonFloat -= 10
  //   }
  // }

}

