import React , { MouseEventHandler } from 'react'
import "./Board.css"
import Box from './Box'

type BoardProps = {
    onClick: (x: number) => void,
    board: any[],
  }

export const Board = ({board, onClick}: BoardProps) => {
    return (
    <div className='board'>
        {board.map((value, idx) => {
        return <Box value={value} onClick={() => value === null && onClick(idx)} />
    })}
    </div>
    )
}
