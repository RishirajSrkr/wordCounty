import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);


  const handleTextarea = (text) => {

    const wordsArray = text.split(/\s+/)
    const sentenceArray = text.split(/(?<!\w\.\w.)(?<=\.|\?)\s+/)
    const paragraphArray = text.split(/\n\s*/)

    //calculate words
    if (wordsArray[wordsArray.length - 1] !== '') {
      setWords(wordsArray.length)
    }

    //calculate characters
    setCharacters(text.length)


    //calculate sentences
    if (sentenceArray[sentenceArray.length - 1] !== '') {
      setSentences(sentenceArray.length)
    }


    //calculate paragraphs

    if (paragraphArray[paragraphArray.length - 1] !== '') {
      setParagraphs(paragraphArray.length)
    }



    if (text.length === 0) {
      setCharacters(0)
      setSentences(0)
      setWords(0)
      setParagraphs(0)

    }

  }


const text = `< / Word County / >`

  return (
    <div className='main-main-wrapper'>

<h4>{text}</h4>
      <div className='main-wrapper'>

        {/*heading */}
        <div className='li-wrapper'>
          <ul>
            <li>Words<h3>{words}</h3></li>
            <li>Characters<h3>{characters}</h3></li>
            <li>Sentences<h3>{sentences}</h3></li>
            <li>Paragraphs<h3>{paragraphs}</h3></li>
          </ul>
        </div>

        {/* text-area */}
        <textarea
          placeholder='enter your text here..'
          onChange={(e) => handleTextarea(e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default App


// /: Delimiters in regular expressions. They mark the beginning and end of the expression.

// \s: This is a shorthand character class in regular expressions and represents any whitespace character. Whitespace characters include spaces, tabs, and line breaks.

// +: Quantifier that matches one or more occurrences of the preceding element. In this case, it applies to \s and means "one or more whitespace characters."