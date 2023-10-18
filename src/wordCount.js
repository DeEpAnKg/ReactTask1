import React from "react";
import { useState, useRef } from 'react';
// import "./style.css";
function WordCount(props){
    
    const [text, setText] = useState('');

            const handleTextChange = (event) => {
                setText(event.target.value);
            };

            const getWordCount = () => {
                // Split the text by whitespace and filter out empty strings
                const words = text.trim().split(/\s+/).filter(Boolean);
                return words.length;
            };

            return (
                <div className='container'>
                    <h3>Responsive Paragraph Word Counter</h3>
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Enter your text here..."
                    />
                    <p>Word Count: {getWordCount()}</p>
                </div>
            )
}
export default WordCount;