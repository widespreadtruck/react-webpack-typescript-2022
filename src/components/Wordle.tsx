import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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

const Wordle = () => {
  const [answer, setAnswer] = useState<string>()

  const getRandomWord = useCallback(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    setAnswer(randomWord)
  }, [])

  useEffect(() => {
    getRandomWord()
  }, [getRandomWord])

  
  return <div>Wordle</div>
}

export default Wordle
