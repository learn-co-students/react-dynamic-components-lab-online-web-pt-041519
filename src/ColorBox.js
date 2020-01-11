import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

      if (this.props.opacity >= 0.2) {
        let op = this.props.opacity - 0.1
        return <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={op} />
        </div>
      }
      else {
        return null
      }
  }

}