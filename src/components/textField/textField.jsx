import { useState } from "react"
import './textField.css'

export const TextField = (props) => {
    const [text, setText] = useState('')
    console.log(text)
    return (
        <div>
            {/* <label 
            htmlFor
            >
                {props.label}
            </label> */}
            <input
            className='text-field' 
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            
            // onChange={(event) => setText(event.target.value)}
            // placeholderText={props.placeholderText}
            // adornment='Search'
            // backgroundColour='transparent'
            // variant='outline'
            >
            
            </input>
        </div>
    )
}