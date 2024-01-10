import React ,{ MouseEventHandler }  from 'react';
import "./Box.css";

type BoxProps = {
  onClick: MouseEventHandler,
  value: string,
}

const Box = ({ value, onClick }: BoxProps) => {
// if the value is X assigned to box x otherwise box o
  const style = value === "X" ? "box x" : "box o" ;
  return (
    <button className={style} onClick={onClick}> {value} </button>
  );
};

export default Box;