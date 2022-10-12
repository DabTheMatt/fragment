import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Reader() {

    const [inputText, setInputText] = useState('');

    const handleInput = (value) => {
        setInputText(value);
        readToArray(inputText);
    }

    const readToArray = (inputText) => {
        let textArray = inputText.split(' ');
    }

    return (
      <div className="fragment-wrapper">
        <h1>Samuel Beckett - Ping</h1>
        <div className="fragment">
            <p>{inputText}</p>
        </div>
        <input className="reader-input" autoFocus onChange={(e) => handleInput(e.target.value)} value={inputText}></input>
      </div>
    );
  }