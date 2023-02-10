import './index.css'

const OptionSelected = props => {
  const {optionDetails, choice} = props
  const {imageUrl} = optionDetails
  const altName = choice ? 'your choice' : 'opponent choice'
  return <img className="result-option-image" src={imageUrl} alt={altName} />
}

export default OptionSelected
