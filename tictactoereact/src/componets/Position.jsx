import React,{useState} from "react";



export default function Position() {
const [matrix,setMatrix]=useState([["","",""],["","",""],["","",""]])
const [player,setPlayer]=useState("X")
const changePlayer=()=>{
    player==="X"?setPlayer("O"):setPlayer("X")
  
  

}
const playing=(row,col)=>{
    if(matrix[row][col]===""){
    let newMatrix=[...matrix]
    newMatrix[row][col]=player
    setMatrix(newMatrix)
    changePlayer()
    }
}
const checkWinner=()=>{
    let winner=""
    for(let i=0;i<3;i++){
        if(matrix[i][0]===matrix[i][1]&&matrix[i][0]===matrix[i][2]&&matrix[i][0]!==""){
            winner=matrix[i][0]
        }
        if(matrix[0][i]===matrix[1][i]&&matrix[0][i]===matrix[2][i]&&matrix[0][i]!==""){
            winner=matrix[0][i]
        }
    }
    if(matrix[0][0]===matrix[1][1]&&matrix[0][0]===matrix[2][2]&&matrix[0][0]!==""){
        winner=matrix[0][0]
    }
    if(matrix[0][2]===matrix[1][1]&&matrix[0][2]===matrix[2][0]&&matrix[0][2]!==""){
        winner=matrix[0][2]
    }
    return winner
}



return(
    <div>
        <h1>Player {player} turn</h1>
        <h1>Winner is {checkWinner()}</h1>
        <div className="background">
        {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
                {row.map((col, colIndex) => (
                    <div key={colIndex} className="position" onClick={() => playing(rowIndex, colIndex)}>
                        {col}
                    </div>
                ))}
            </div>
        ))}
    </div>
    </div>
);            
}
