import {useState} from 'react'
export default function Square({value, onSquareClick, className}) {
    return <button className={className} onClick={onSquareClick}>{value}</button>;
  }