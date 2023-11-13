import {useState} from 'react';

export default function InputComponent(){
    const [inputText, setText] = useState('hello there');

    function handleChange(e){
        setText(e.target.value);
    }

    return(
        <>
        <input value={inputText} onChange={handleChange} />
        <p>You typed: {inputText}</p>
        <button onClick={() => setText('hello there')}>
            Reset
        </button>
        </>
    );
}