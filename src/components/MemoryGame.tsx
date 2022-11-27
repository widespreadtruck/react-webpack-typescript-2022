import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
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
  }
`
const Row = styled.div`
  display: flex;
`

const MemoryGame = () => {
  const [matrix, setMatrix] = useState([
    [0, 0, 2],
    [2, 3, 3],
    [4, 4, 4],
  ])
  const [booleanMatrix, setBooleanMatrix] = useState(
    new Array(matrix.length)
      .fill(false)
      .map(() => new Array(matrix[0].length).fill(false)),
  )
  console.log(booleanMatrix)

  const [prevClick, setPrevClick] = useState(undefined)
  const [currClick, setCurrClick] = useState(undefined)

  const handleClick = (rowIdx: number, colIdx: number) => {
    setPrevClick(matrix[rowIdx][colIdx])
    if (prevClick !== undefined) setCurrClick(matrix[rowIdx][colIdx])

    if (prevClick !== currClick) {
      setTimeout(() => {
        setPrevClick(undefined)
        setCurrClick(undefined)
      }, 2000)
    }
  }

  useEffect(() => {
    if (
      prevClick === currClick &&
      prevClick !== undefined &&
      currClick !== undefined
    )
      console.log('MATCH!!!!!!!!!!!!')
  })

  // console.log({prevClick})
  // console.log({currClick})

  return (
    <Container>
      {matrix.map((row, rowIdx) => (
        <Row key={rowIdx}>
          {row.map((col, colIdx) => (
            <Card onClick={() => handleClick(rowIdx, colIdx)} key={colIdx}>
              {prevClick === matrix[rowIdx][colIdx] ||
              currClick === matrix[rowIdx][colIdx]
                ? matrix[rowIdx][colIdx]
                : ''}
            </Card>
          ))}
        </Row>
      ))}
    </Container>
  )
}

export default MemoryGame
