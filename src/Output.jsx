import React, {useEffect, useRef,useState} from 'react';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const Output = ({image}) => {  
    const [height,setHeight]=useState();
    const [width,setWidth]=useState();

    const textImage = useRef(); 

    useEffect(()=>{
        var canvas = document.getElementById("myCanvas");
        canvas.width  = textImage.current.clientWidth;
    canvas.height = textImage.current.clientHeight;
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img,0,0);
    setHeight(textImage.current.clientHeight);
    setWidth(textImage.current.clientWidth)

    
    img.style.display = "none";
    
    },[])
    return (
        <div>
        <div className="output">
            <img  id="scream" ref={textImage}
src={image} alt="The Scream"/>
  
            <canvas id="myCanvas" className="canvas">
Your browser does not support the HTML5 canvas tag.
</canvas>
        </div>
        <div className="download">
            <a href={image} style={{textDecorationLine:"none"}}download>
                <Button endIcon={<CloudDownloadIcon/>} variant="contained" color="secondary">
                    Download Image
                </Button>
            </a>
        </div>
        </div>
    )
}

export default Output
