import React,{ MouseEventHandler } from 'react'
import "./ScoreBoard.css"

type ScoreBoardProps = {
    scores: any,
    xPlaying: any
  }
export const ScoreBoard = ({scores, xPlaying}:ScoreBoardProps) => {
    const {xScore, oScore} = scores;
    return (
        <div className='scoreboard'>
            <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
            <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
        </div>
    )
}