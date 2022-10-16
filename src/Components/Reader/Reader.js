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

    const [text, setText] = useState('All known all white bare white body fixed one yard legs joined like sewn. Light heat white floor one square yard never seen. White walls one yard by two white ceiling one square yard never seen. Bare white body fixed only the eyes only just. Traces blurs light grey almost white on white. Hands hanging palms front white feet heels together right angle. Light heat white planes shining white bare white body fixed ping fixed elsewhere. Traces blurs signs no meaning light grey almost white. Bare white body fixed white on white invisible. Only the eyes only just light blue almost white. Head haught eyes light blue almost white silence within. Brief murmurs only just almost never all known. Traces blurs signs no meaning light grey almost white. Legs joined like sewn heels together right angle. ');
    const [clockColor, setClickColor] = useState('plain');
    const [textWordCount, setTextWordCount] = useState(0);
    const [characters, setCharacters] = useState(0);
    const [selectedWords, setSelectedWords] = useState(0);

    useEffect(()=>{
        let textToArray = text.split(' ');
        let tempArray = [];
        textToArray.forEach((word, index) => {
            tempArray.push(word = {
                id: index,
                word: word,
                clicked: 'word-plain'
            })
        })
        console.log('tta', textToArray);
        console.log('ta', tempArray)
        setTextArray([...tempArray]);
        setTextWordCount(tempArray.length)
        setCharacters(text.length);
    },[])

    const handleWordClick = (e, id, eword) => {
        console.log('click', e.target, id);
        setClickColor('colored');
        let selectedCount = 0;
        textArray.forEach((word) => {
            if(word.word === eword) {
                console.log('tar', typeof word.word)
                word.clicked = 'word-colorize'
                selectedCount += 1;
            } else if (word.id !== id) {
                word.clicked = 'word-plain'
            }
        })
        setSelectedWords(selectedCount);
        setTextArray([...textArray])
    }

    return (
      <div className="fragment-wrapper">
        <h1>Ping</h1>
        <div className="fragment">
            {textArray.map((word) => {
                return (
                    <button key={word.id} className={word.clicked} onClick={(e) => handleWordClick(e, word.id, word.word)}>{word.word} </button>
                )
            })}
        </div>
        <div >
            <p className="stats"><span className="transparent-5">words:</span> {textWordCount}<span className="transparent-7">, characters: </span>{characters}<span className="transparent-7">, occurances: </span>{selectedWords}</p>
        </div>
        
        
      </div>
    );
  }