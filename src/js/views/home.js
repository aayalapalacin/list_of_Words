import React from "react";
import "../../styles/home.css";

const wordList = ['chair', 'height', 'racket', 'touch', 'tunic'];
const wordList2 = ['chair', 'racket', 'touch', 'height', 'tunic']

const doesItChain = (arr) =>{
	let numberOfTruths = []
	for (let i = 0; i < arr.length; i++){
		console.log(arr[i])
		if(i === arr.length - 1) {
			if(arr[i].charAt(arr[i].length-1)=== arr[0].charAt(0)){
				numberOfTruths.push(true)
			}
		}
		else if(arr[i].charAt(arr[i].length-1) === arr[i+1].charAt(0)){
			numberOfTruths.push(true)
		}
	}

	console.log("numofTruth", numberOfTruths)		
	if (numberOfTruths.length ===arr.length){
		console.log("answer", true)
	}
	else{console.log("answer", false)}
	 
}

const reOrder = (array)=>{
	let updatedWordList= [array[0]]
	for (let i = 0; i < array.length; i++){
		if(i === array.length - 1) {
			if(array[i].charAt(array[i].length-1)=== array[0].charAt(0)){
				updatedWordList.push(array[i]);
			}
		}
		else if(arr[i].charAt(arr[i].length-1) === arr[i+1].charAt(0)){
			numberOfTruths.push(true)
		}
	}
	doesItChain(updatedWordList)
};

	reOrder(wordList)	
	// compare(wordList)

export const Home = () => {
//    const compare = () =>{
// 	for (let word of wordList){
// 		if(word.charAt(0) === word.charAt(word.length -1)){
// 			numberOfTruths.push(word);
// 		}
// 		else{
// 			return false
// 		}
// 	}
//  let numberOfTruths = []
//  console.log("numofTruth", numberOfTruths)

//    }
	
	return(
		<div>
			{wordList.map( (word,index) => {
				return(
					<div key={index}>
					<p> word: {word} </p>	
					<p> first letter: {word.charAt(0) } </p>	
					<p> last letter: {word.charAt(word.length - 1) } </p>	
					</div>
				)
			})}
		</div>
	)
		};


