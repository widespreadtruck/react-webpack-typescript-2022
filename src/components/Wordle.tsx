import React, {
  ReactEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react'
import styled from 'styled-components'
import axios from 'axios'

// interface CellType {
//   key: string
//   color: string |
// }

// const answerUrl = 'https://api.frontendexpert.io/api/fe/wordle-words'
const words = [
  'ALBUM',
  'HINGE',
  'MONEY',
  'SCRAP',
  'GAMER',
  'GLASS',
  'SCOUR',
  'BEING',
  'DELVE',
  'YIELD',
  'METAL',
  'TIPSY',
  'SLUNG',
  'FARCE',
  'GECKO',
  'SHINE',
  'CANNY',
]

const Cell = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid black;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  text-transform: uppercase;
  background-color: ${props => props.color || 'white'};
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`
const Row = styled.div`
  display: flex;
  margin-bottom: 5px;
`

const Wordle = () => {
  const [answer, setAnswer] = useState<string>()
  const [grid, setGrid] = useState<any>(
    new Array(6).fill(null).map(() => new Array(5).fill({key: null, color: null})),
  )
  const [guess, setGuess] = useState<string>('')
  const [arrayOfGuesses, setArrayOfGuesses] = useState<any>([])
  // const [stop, setStop] = useState<boolean>(false)

  const getRandomWord = useCallback(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    setAnswer(randomWord)
  }, [])

  useEffect(() => {
    getRandomWord()
  }, [getRandomWord])

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      if (guess.length === 5) {
        return
      }
      if (e.keyCode >= 97 && e.keyCode <= 122) {
        const key = e.key

        for (let x = 0; x < grid.length; x++) {
          for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y].key === null) {
              const newGrid = [...grid]
              
              newGrid[x][y] = {key, color: 'green'}
              setGrid(newGrid)

              return
            }
          }
        }
      }
    }

    window.addEventListener('keypress', handleKeyPress)
    return () => {
      window.removeEventListener('keypress', handleKeyPress)
    }
  }, [guess])

  useEffect(() => {
    const handleGuess = (e: any) => {
      if (guess.length === 5 && e.key === 'Enter') {  
        const newArr = [...arrayOfGuesses]
        newArr.push(guess)
        setArrayOfGuesses(newArr)
        return
      }
      
      if (guess.length === 5) {
        return
      }

      if (guess.length < 5 && e.keyCode >= 97 && e.keyCode <= 122) {
        setGuess((guess) => guess + e.key)
      }
    }

    window.addEventListener('keypress', handleGuess)
    return () => {
      window.removeEventListener('keypress', handleGuess)
    }
  }, [guess, arrayOfGuesses])


  

  // console.log('>>',guess.length)
  // console.log('>>',{arrayOfGuesses})
  console.log('>>',{grid})

  return (
    <div>
      <div>{answer}</div>
      <Container>
        {grid.map((row: any, rowIdx: number) => (
          <Row key={rowIdx}>
            {row.map((letter: any, colIdx: number) => (
              <Cell key={colIdx} color={letter.color}>{letter.key}</Cell>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default Wordle
