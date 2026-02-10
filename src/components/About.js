import React,{useState} from 'react'

export default function About(props) {
    //const [myStyle,setStyle]=useState(
    //{
      //  color:'white',
        //backgroundColor:'black'
    //}
//)
let myStyle = {
    color : props.mode==='dark'?'white':'black',
    backgroundColor : props.mode==='dark'?'black':'white'
}
  return (
    
        <div>
            <div className='container' style={myStyle}>
                <h2>About Us!</h2>
                <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>About TextUtils</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <strong>TextUtils is a powerful and easy-to-use text manipulation tool built using React.
                It helps users analyze, format, and transform text efficiently.
                Whether you want to convert text to uppercase, remove extra spaces, or count words and characters, TextUtils makes it simple and fast.</strong>
                </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Features & Capabilities</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>🔹 Convert text to Uppercase / Lowercase<br/>
                    🔹 Word and Character Counter<br/>
                    🔹 Remove Extra Spaces<br/>
                    🔹 Copy text to clipboard instantly<br/>
                    🔹 Real-time text preview<br/>
                    🔹 Clean and responsive UI
                    </strong>
                </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>How to Use TextUtils</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <strong>Enter or paste your text into the input box.
                        Choose the operation you want to perform.
                        View the transformed text and text summary instantly.
                        Copy the output if needed with a single click.
                </strong>                 
                </div>
                </div>
                </div>
                </div>
            </div>
            
            
        </div>
  )
}
