import {useState, useEffect, useRef} from "react"

export default function useGame() {
    const STARTING_TIME = 5

    const [text, setText] = useState("")
    const [timer, setTimer] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const inputRef = useRef(null)

    function handleChange(event) {
        const {value} = event.target
        setText(value)
    }

    function calculateWordsNumber() {
        const wordsArr = text.trim().split(' ')
        return wordsArr.filter(word => word !== "").length

    }

    function gameStart() {
        setIsTimeRunning(true)
        setText("")
        setTimer(STARTING_TIME)
        inputRef.current.disabled = false
        inputRef.current.focus()
        
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordsNumber(text))
    }

    useEffect(() => {
        if (isTimeRunning && timer > 0) {
            setTimeout(() => {
                setTimer(time => time - 1)
            }, 1000)
        } else if (timer === 0) {
            endGame()
        }
     }, [timer, isTimeRunning])

     return {text, inputRef, timer, isTimeRunning, wordCount, handleChange, gameStart}
}