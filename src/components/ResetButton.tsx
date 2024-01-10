import React,{ MouseEventHandler } from 'react'
import "./ResetButton.css"
import "./Board"


type ResetButtonProps = {
    resetBoard: any,
  }

export const ResetButton = ({resetBoard}: ResetButtonProps) => {
    return (
        <button className='reset-btn' onClick={resetBoard}>Reset</button>
    )
}