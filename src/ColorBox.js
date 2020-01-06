import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newValue = this.props.value - 0.1;
      return this.props.value > 0.1 ? null : (
     
        <div className="color-box" style={{ opacity: newValue }}>   //Note: The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string
          {/* your conditional code here! */}
        </div>
      )
    
  }

}

