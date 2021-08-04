import React,{useState} from 'react'
import Resize from './Resize';

const Input = () => { 
    const [data,setData]=useState('');
    const [data1,setData1]=useState('');
    const imageupload = (event) => { 
        setData1(event.target.files[0])
        const file = URL.createObjectURL(event.target.files[0]);
        setData(file);
    }

    return (
        <div>
            <div className="heading">
                <h1>Image Resize Uploader</h1>
            </div>
            <div className="sub-heading">
           A place where you can resize your large images at your interest of like

            </div>
            <div className="upload">
                <label className="upload-label">Upload the Image file:</label>
                <input type="file" onChange={imageupload} /> 
            </div>
               
                  
            {
                data?<div> <h1 className="preview">Preview Image</h1>
                
                   <img className="preview-image" src={data}/> 
                  
                
                <Resize image={data1}/>
                </div>:<h1></h1>
            }
        </div>
    )
}

export default Input
