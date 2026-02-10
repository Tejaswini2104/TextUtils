import React,{useState} from 'react'
/*import About from './About'*/

export default function TextForm(props) {
    const [text,setText]=useState('');
    const handleUpClick=()=>
    {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = ()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleOnChange=(event)=>
    {
        setText(event.target.value);
    }
    const handleClear = () =>
    {
        let newText="";
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    
    const handleCopy = ()=>
    {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
    }

    const handleExtraSpace = () =>
    {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h2 className='mb-3'>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} /*style={{backgroundColor:props.mode==='dark'?'grey':'white'}}*/></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClear}>Clear</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove extra space</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h3>Preview of your Text</h3>
                <p>{text.length>0?text:"Nothing to preview"}</p>
                {/*<About />*/}
            </div> 
        </>
    )
}
