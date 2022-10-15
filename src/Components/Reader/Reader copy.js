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

    const handleInput = (value) => {
        setInputText(value);
        console.log('v', value)
    }
    
    let id = 0;

    const handleWordClick = (e, index) => {
        console.log('clik', e.target, index);
        textArray.forEach((clickedEl) => {
            clickedEl.clicked = 'word-colorize';
            clickedEl.colorIndex = 2;
        })
    }

    const readToArray = () => {
        let tempArray = inputText.split(' ');
        console.log('ta', tempArray);
        let objArray = [];
        let temp2Array = [];
        let outerArray = [];
        let internalArray = [];
        let uniquArray = [...new Set(tempArray)];
        console.log('uniq', uniquArray);
        let uniqueObjArray = [];
        let wId = 1;

        uniquArray.forEach((word) => {
            uniqueObjArray.push({word: word, colorIndex: wordColors[wId]})
            wId += 1;
        })
        tempArray.forEach((tWord) => {
            
            uniqueObjArray.forEach((word) => {
                if (word.word === tWord) {
                    internalArray.push({word: word.word, color: word.colorIndex})
                };
                console.log('iiiaaa', internalArray)
            })
            
          
        })
        console.log('uoA', uniqueObjArray);
        outerArray.push(...internalArray);
console.log('ia', internalArray);
console.log('oa', outerArray);
        

        setTextArray(outerArray);
        console.log('tta', textArray )
        console.log('t2', temp2Array)
    }



    return (
      <div className="fragment-wrapper">
        <h1>Małe kobietki</h1>
        <div className="fragment">
            <
        </div>
        
        
      </div>
    );
  }