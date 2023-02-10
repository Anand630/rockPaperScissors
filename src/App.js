import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameOption from './components/GameOption'
import OptionSelected from './components/OptionSelected'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    testId: 'rockButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    testId: 'scissorsButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    testId: 'paperButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const resultConstants = {
  won: 'YOU WON',
  lose: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class App extends Component {
  state = {
    selectedOption: {},
    roundCompleted: false,
    opponentChoice: {},
    score: 0,
    result: '',
  }

  updateSelectedOption = selectedOption => {
    const randomChoiceIndex = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomChoiceIndex]
    // this.setState({
    //   selectedOption: {...selectedOptionDetails},
    //   roundCompleted: true,
    //   opponentChoice,
    // })
    if (selectedOption.id === opponentChoice.id) {
      //   result = resultConstants.draw
      this.setState({
        result: resultConstants.draw,
        selectedOption,
        roundCompleted: true,
        opponentChoice,
      })
    } else if (
      selectedOption.id === choicesList[0].id &&
      opponentChoice.id === choicesList[1].id
    ) {
      // result = resultConstants.won
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: resultConstants.won,
        selectedOption,
        roundCompleted: true,
        opponentChoice,
      }))
    } else if (
      selectedOption.id === choicesList[1].id &&
      opponentChoice.id === choicesList[0].id
    ) {
      // result = resultConstants.lose
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: resultConstants.lose,
        selectedOption,
        roundCompleted: true,
        opponentChoice,
      }))
    } else if (
      selectedOption.id === choicesList[1].id &&
      opponentChoice.id === choicesList[2].id
    ) {
      // result = resultConstants.won
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: resultConstants.won,
        selectedOption,
        roundCompleted: true,
        opponentChoice,
      }))
    } else if (
      selectedOption.id === choicesList[2].id &&
      opponentChoice.id === choicesList[1].id
    ) {
      // result = resultConstants.lose
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: resultConstants.lose,
        selectedOption,
        roundCompleted: true,
        opponentChoice,
      }))
    } else if (
      selectedOption.id === choicesList[2].id &&
      opponentChoice.id === choicesList[0].id
    ) {
      // result = resultConstants.won
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: resultConstants.won,
        selectedOption,
        roundCompleted: true,
        opponentChoice,
      }))
    } else if (
      selectedOption.id === choicesList[0].id &&
      opponentChoice.id === choicesList[2].id
    ) {
      // result = resultConstants.lose
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: resultConstants.lose,
        selectedOption,
        roundCompleted: true,
        opponentChoice,
      }))
    }
  }

  playAgain = () => {
    this.setState({
      selectedOption: {},
      roundCompleted: false,
      opponentChoice: {},
    })
  }

  getGameView = () => (
    <ul className="game-options-container">
      {choicesList.map(eachOption => (
        <GameOption
          optionDetails={eachOption}
          updateSelectedOption={this.updateSelectedOption}
          key={eachOption.id}
        />
      ))}
    </ul>
  )

  getResultView = () => {
    const {selectedOption, opponentChoice, result} = this.state
    // const randomChoiceIndex = Math.floor(Math.random() * choicesList.length)
    // const opponentChoice = choicesList[randomChoiceIndex]
    // let result

    console.log(result)
    return (
      <div className="you-opponent-selected-options-result-container">
        <div className="you-opponent-selected-options-container">
          <div className="player-option-container">
            <h3 className="player-name">YOU</h3>
            <OptionSelected optionDetails={selectedOption} choice />
          </div>
          <div className="player-option-container">
            <h3 className="player-name">OPPONENT</h3>
            <OptionSelected optionDetails={opponentChoice} />
          </div>
        </div>
        <p className="result">{result}</p>
        <button
          onClick={this.playAgain}
          type="button"
          className="play-again-button"
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {roundCompleted, score} = this.state

    // console.log(selectedOption)

    return (
      <div className="main-page-container">
        <div className="game-title-and-score-container">
          <div className="game-title-container">
            <h3 className="game-sub-title">
              ROCK <br />
              PAPER
              <br />
              SCISSORS
            </h3>
          </div>
          <div className="score-container">
            <p className="score">Score</p>
            <p className="score-count">{score}</p>
          </div>
        </div>
        <div className="middle-container">
          {roundCompleted ? this.getResultView() : this.getGameView()}
        </div>
        {/* <button type="button" className="rules-button">
          RULES
        </button> */}
        <Popup
          modal
          trigger={
            <button type="button" className="rules-button">
              RULES
            </button>
          }
        >
          {close => (
            <>
              <div className="rules-container">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  <RiCloseLine size={25} color="#223a5f" />
                </button>

                <img
                  className="rule-image"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </div>
            </>
          )}
        </Popup>
      </div>
    )
  }
}

export default App
