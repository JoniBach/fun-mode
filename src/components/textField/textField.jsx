import { useState } from "react"
import './textField.css'

export const TextField = (props) => {
    const [text, setText] = useState('')
    return (
        <div>
            {props.label && (
                <>
                      <label 
            htmlFor
            >
                {props.label}
            </label>
            <br/>
            </>

            )}
      
            <input
            className='text-field' 
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            style={{
                marginBottom: props.mb ? props.mb : 0,
                marginTop: props.mt ? props.mt : 0,
                width: props.width ? props.width : 'auto' ,
            }}
            
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