import React, {useState} from "react";
import "../../styles/home.css";

const wordList = ['chair', 'height', 'racket', 'touch', 'tunic'];

export const Home = () => {
	const [firstLetterArray,setFirstLetterArray] = useState([])
	const [firstLetter,setFirstLetter] = useState("")

	const firstArray = () =>{
		wordList.map((word) => {
			setFirstLetter(word)
			const newFirstLetterArray = [...firstLetterArray,firstLetter]
			setFirstLetterArray(newFirstLetterArray) 
			console.log("firstArray",firstLetterArray)
		})
	}
	console.log("first",firstLetter)
	return(
		<div>
			{wordList.map( (word,index) => {
				return(
					<div key={index}>
					<p> word: {word} </p>	
					<p> first letter: {word.charAt(0) } </p>	
					<p> last letter: {word.charAt(word.length - 1) } </p>	
					<button onClick={firstArray}> click me</button>
					</div>
				)
			})}
		</div>
	)
		};


