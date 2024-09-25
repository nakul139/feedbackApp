import {Component} from 'react'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickButton = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emoji-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                className="emoji-button"
                type="button"
                onClick={this.onClickButton}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-img"
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt=" love emoji" className="love-emoji" />
        <h1 className="thankyou-heading">Thank You</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <diV className="container">
          {isFeedbackSelected ? this.renderThankyou() : this.renderFeedback()}
        </diV>
      </div>
    )
  }
}
export default Feedback
