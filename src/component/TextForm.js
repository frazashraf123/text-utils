import React,{useState} from 'react'

export default function TextForm(props) { 
  const [text,setText] = useState(''); 

  const handleOnChange =(event) => {
    // console.log('HANdle on change'); 
    setText(event.target.value);
  }  

  const handleUpClick =() => {
    // console.log('Mouse button clicked'); 
    let newText = text.toUpperCase();
    setText(newText);  
    props.showAlert("Converted to uppercase","success");
  }
  
  const handleLoClick =() => {
    // console.log('Mouse button clicked'); 
    let newText = text.toLowerCase();
    setText(newText); 
    props.showAlert("Converted to lowercase","success");
  }

  const handleClearClick =() => {
    let newText ='';
    setText(newText);
    props.showAlert("Cleared successfully","success");
    
  }

  const handleCopy =() => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied successfully","success");
  }

  // const handleExtraSpace = (event) => {
  //   let newText = text.split(/[]+/); 
  //   setText(newText.join(""));
  // }
  return ( 
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Spaces</button> */}

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters  </p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it."}</p>
    </div>
    </>
  )
}
