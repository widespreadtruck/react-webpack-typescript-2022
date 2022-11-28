import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

type CardProps = {
  alreadyClicked: boolean
}
const Card = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 5px;
  margin-top: 5px;
  border: 0.5px solid black;
  color: black;
  display: flex;
  justify-content: center;
  font-size: 40px;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: #f5f5f5;
    cursor: ${(p: CardProps) => p.alreadyClicked && 'default'};
  }
`
const Row = styled.div`
  display: flex;
`

interface Cell {
  row: number
  col: number
}

const MemoryGame = () => {
  const [matrix, setMatrix] = useState([
    [0, 3, 2, 9],
    [2, 7, 3, 6],
    [0, 7, 6, 9],
  ])
  const [booleanMatrix, setBooleanMatrix] = useState(
    new Array(matrix.length)
      .fill(false)
      .map(() => new Array(matrix[0].length).fill(false)),
  )

  const [prevClick, setPrevClick] = useState<Cell | undefined>()

  const handleClick = (rowIdx: number, colIdx: number) => {
    if (booleanMatrix[rowIdx][colIdx]) return
    const clickedNumber = matrix[rowIdx][colIdx]
    const newBooleanMatrix = [...booleanMatrix]
    newBooleanMatrix[rowIdx][colIdx] = true
    setBooleanMatrix(newBooleanMatrix)

    if (prevClick) {
      console.log('prevClick exists')
      const prevNumber = matrix[prevClick.row][prevClick.col]
      if (prevNumber === clickedNumber) {
        setPrevClick(undefined)
      } else {
        setTimeout(() => {
          newBooleanMatrix[prevClick.row][prevClick.col] = false
          newBooleanMatrix[rowIdx][colIdx] = false
          setBooleanMatrix(newBooleanMatrix)
          setPrevClick(undefined)
        }, 1000)
      }
    } else {
      setPrevClick({
        row: rowIdx,
        col: colIdx,
      })
    }
  }

  return (
    <Container>
      {matrix.map((row, rowIdx) => (
        <Row key={rowIdx}>
          {row.map((number, colIdx) => (
            <Card
              alreadyClicked={booleanMatrix[rowIdx][colIdx]}
              onClick={() => handleClick(rowIdx, colIdx)}
              key={colIdx}
            >
              {booleanMatrix[rowIdx][colIdx] ? number : ''}
            </Card>
          ))}
        </Row>
      ))}
    </Container>
  )
}

export default MemoryGame
