import React , {useState} from "react";


export default function TextArea(props) {

    const handleOnChange=(event)=>{
        setstate(event.target.value);
    }

    const handleOnClick=()=>{
        let text1=text;
        let newtext=text.toUpperCase()

        setstate(newtext)

    }

    
    
    const handleOnClick1=()=>{
        let text1=text;
        let newtext=text.toLowerCase()

        setstate(newtext)

    }

    const copytoClip=()=>{
           
            var copyText = document.getElementById("textbox");
          
           
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */
          
             
            navigator.clipboard.writeText(copyText.value);
          
            
            alert("Copied the text: " + copyText.value);
          
    }


    const removespaces=()=>{

        let newtext =text.split(" ").join("")
        setstate(newtext)

    }

    const [text, setstate] = useState("");


  return (



    <div>
      <div className="container">
        <h2>{props.title}</h2>
        <div class="mb-5">
         
          <textarea
            class="form-control"
            value={text}
            onChange={handleOnChange}
            id="textbox"
            rows="10"
          />

            <div className="container ">

            <button type="button "  onClick={handleOnClick} class="btn btn-primary  mx-2 my-2">Convert to Uppercase</button> 

            <button type="button  "  onClick={handleOnClick1} class="btn btn-primary mx-2">Convert to Lowercase</button>

            <button type="button  "  onClick={copytoClip} class="btn btn-primary mx-2">Copy</button>

            <button type="button  "  onClick={removespaces} class="btn btn-primary mx-2">Remove spaces </button>

           


            <div className="container">
                
                <h6>Total character count : {text.length}</h6> 
                <h6>Total word count : {text.split(' ').length-1} </h6> 
                <h6>Average read time : {parseInt(text.length*0.003)} minutes </h6> 
                
                 
            </div>

           <div className="container my-3">
                <h2> Complete text </h2>
                <br/> 
                {text}

           </div>
           
            </div>

        </div>
      </div>
    </div>
  );
}
