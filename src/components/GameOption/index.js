import './index.css'

const GameOption = props => {
  const {optionDetails, updateSelectedOption} = props
  const {id, imageUrl, testId} = optionDetails

  // console.log(optionDetails)

  const onOptionClick = () => {
    updateSelectedOption(optionDetails)
  }

  return (
    <li className="option-list-item">
      <button
        onClick={onOptionClick}
        type="button"
        className="option-image-button"
        data-testid={testId}
      >
        <img src={imageUrl} className="option-image" alt={id} />
      </button>
    </li>
  )
}

export default GameOption
