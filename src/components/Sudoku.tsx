import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Cell = styled.div`
  width: 60px;
  height: 60px;
  border: 0.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Matrix = styled.div`
  display: flex;
  flex-direction: row;
` 
const Input = styled.input`
  width: 40px;

`

const Sudoku = () => {
  const [grid, setGrid] = useState<number[][]>(
    new Array(9).fill(new Array(9).fill(0)).map((_,i) => new Array(9).fill(i)),
  )
  console.log(grid)

  const handleInput = (number: number) => {
    console.log(number)
  }

  return (
    <Container>
      {grid.map((row, rowIdx) => (
        <Matrix key={rowIdx}>
          {row.map((number, colIdx) => (
            <Cell key={colIdx}>
              <Input  value={number} onChange={(e)=>handleInput(parseInt(e.target.value))} />
            </Cell>
          ))}
        </Matrix>
      ))}
    </Container>
  )
}

export default Sudoku
