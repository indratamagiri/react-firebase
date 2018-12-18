import React from 'react'
//import spinner from './spinner.gif';

class Spinner extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")

    let randomColor = () =>{
      let r = Math.floor(Math.random()*256);
      let g = Math.floor(Math.random()*256);
      let b = Math.floor(Math.random()*256);
      return "rgb("+ r + "," + g + "," + b +")";
  }
  
  let texter = (str, x, y) => {
      for(let i = 0; i <= str.length; ++i){
          let ch = str.charAt(i);
          ctx.font = "90px Arial";
          ctx.fillStyle = randomColor();
          ctx.fillText(ch, x, y);
          x += ctx.measureText(ch).width;
      }
  }
  
  this.interval = setInterval(() =>texter("LOADING......", 400, 400), 500);

  }

  render() {
  return (
      <div>
          {/* <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block'}}/> */}
          <canvas ref="canvas" width="1000" height="1000"/>
      </div>
    )
  }
}

export default Spinner;