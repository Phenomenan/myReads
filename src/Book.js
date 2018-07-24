import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarRatingComponent from 'react-star-rating-component'


class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  updateBook(shelf) {
    this.props.onMoveBook(this.props.book, shelf)
  }

  render () {
    const {book} = this.props

    return (
      <div className="book">
       <div className="book-top">
          <div className="book-cover" title={book.description} style={{ height: 192, width: 128, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})` }}>
          </div>
          <div className="book-shelf-changer">
            <select value={book.shelf || 'none'} onChange={(e) => this.updateBook(e.target.value)}>
              <option value="" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
       </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        <div>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={book.averageRating}
            editing={false}
          />
        </div>
      </div>
    )
  }
}

export default Book
