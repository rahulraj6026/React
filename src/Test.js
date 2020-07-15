import React from 'react'
import text from "./files/installini.txt"
import pdf from "./files/test.pdf"

const Test = () => {

    return(
        <div>
            <a href={text} download="summary"> 
                <button type="button">Download TEXT</button> 
            </a>

            <a href={pdf} download="summary"> 
                <button type="button">Download PDF</button> 
            </a>
        </div>
    )
}

export default Test