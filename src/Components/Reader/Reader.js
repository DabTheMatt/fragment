import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Reader() {

    const [inputText, setInputText] = useState('');
    const [textArray, setTextArray] = useState([]);
    const [wordColors, setWordColors] = useState([
        '#96ceb4',
        '#622569',
        '#ffcc5c',
        '#ff6f69',
        '#588c7e',
        '#f2e394',
        '#f2ae72',
        '#d96459',
        '#a2b9bc',
        '#b2ad7f',
        '#878f99',
        '#6b5b95',
        '#6b5b95',
        '#feb236',
        '#d64161',
        '#ff7b25',
        '#eca1a6',
        '#bdcebe',
        '#ada397',
        '#b5e7a0',
        '#86af49',
        '#b9936c',
        '#dac292',
        '#c4b7a6',
        '#3e4444',
        '#82b74b',
        '#405d27',
        '#c1946a',
        '#92a8d1',
        '#034f84',
        '#f7786b',
        '#b1cbbb',
        '#eea29a',
        '#c94c4c',
        '#80ced6',
        '#618685',
        '#50394c',
        '#36486b',
        '#4040a1',
        '#bc5a45'
    ])

    const [text, setText] = useState('All known all white bare white body fixed one yard legs joined like sewn.');
    const [clockColor, setClickColor] = useState('plain');

    useEffect(()=>{
        let textToArray = text.split(' ');
        let tempArray = [];
        textToArray.forEach((word, index) => {
            tempArray.push(word = {
                id: index,
                word: word,
                clicked: ''
            })
        })
        console.log('tta', textToArray);
        console.log('ta', tempArray)
        setTextArray([...tempArray]);
    },[])

    const handleWordClick = (e, id, eword) => {
        console.log('click', e.target, id);
        setClickColor('colored');
        textArray.forEach((word) => {
            if(word.word === eword) {
                console.log('tar', typeof word.word)
                word.clicked = 'col'
            } else if (word.id !== id) {
                word.clicked = ''
            }
        })
        setTextArray([...textArray])
    }

    return (
      <div className="fragment-wrapper">
        <h1>Ping</h1>
        <div className="fragment">
            {textArray.map((word) => {
                return (
                    <span key={word.id} className={word.clicked} onClick={(e) => handleWordClick(e, word.id, word.word)}>{word.word} </span>
                )
            })}
        </div>
        
        
      </div>
    );
  }