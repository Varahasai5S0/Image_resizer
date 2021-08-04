import React,{useEffect, useState} from 'react';
import Resizer from "react-image-file-resizer";
import Button from '@material-ui/core/Button';
import Output from './Output';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const Resize = ({image}) => { 
    const [pic,setPic] = useState();
    const [height,setHeight]=useState();
    const [width,setWidth]=useState();
    const [True,setTrue]=useState(false);

    const changeHeight = (event) => { 
        
         setHeight(event.target.value)
        setTrue(false)
    } 

    const changeWidth = (event) => {
        setWidth(event.target.value) 
        setTrue(false);
    }

    const togglebutton = () => {
        if(height && width){
            setTrue(true);
        }
    }

    useEffect(()=>{
        var fileInput = false;
        if (image) {
          fileInput = true;
        }
        if (fileInput) {
          try {
            Resizer.imageFileResizer(
              image,
              width,
              height,
              "PNG",
              100,
              0,
              (uri) => {
                setPic(uri);
              },
            );
          } catch (err) {
            console.log(err);
          }
        }
      },[height,width])
    
    return (
        <div>
           <h4 className="dim">Enter the dimensions</h4>
        <div className="inputfield">
            <div className="subinputfield">
              
            <label className="label-name">Height:</label>
            
            <div>
            <input type="number" onChange={changeHeight} />
            </div>
            </div>

            <div className="subinputfield">
            <label className="label-name">Width:</label> 
            <input type="number" onChange={changeWidth}/>
            </div>
            
            
            
        </div>
            <div className="button">
            <Button variant="contained" endIcon={<FlashOnIcon/>} onClick={togglebutton} color="primary">
              Get Image 
             </Button>
           
            </div>
              {
            True? 
            <Output image={pic}/>:
            <p></p>
        }
        </div>

    )
}

export default Resize
