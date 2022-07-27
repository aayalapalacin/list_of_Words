import React from "react";
import "../../styles/home.css";

const wordList = ['chair', 'height', 'racket', 'touch', 'tunic'];


const enumarate = () =>{
	for (let i = 0; i <= wordList.length; i += 1) {
		for(let k = i +1; k <= wordList.length; k++) {
		if(wordList[i] != wordList[k]){
				const compareArray1 = []
				const compareArray2 = []
				compareArray1.push(wordList[i]);
				compareArray2.push(compareArray1.slice(wordList[0]));
				// compareArray1.push(wordList[k])
				console.log("CA1",compareArray1)
				console.log("CA2",compareArray2)
			
			}
		// wordObject.push({"index":i, "word": wordList[i]});
		

		
	 }
} 
}
enumarate()

const test = () => {
    var sub_array = [];
    var super_array = [];
    for (let i = 0; i <= wordList.length -1; i++) {
		for (let j = i+1; j < wordList.length -1; j++) {
			if(wordList[i] != wordList[j]){
				sub_array.push(wordList[j]);
				super_array.push(sub_array.slice(wordList[0]));
			}
    }



console.log(compareArray);

	console.log("CA1test",sub_array);
	console.log("CA2test",super_array);
	console.log("compareArray",compareArray);

}
}
test()

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


