import React, { useState } from "react"

const NewReviewForm = ({ postReview }) => {
  const [newReview, setNewReview] = useState({
    title: "",
    content: "",
    rating: ""
  })

  const handleInputChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postReview(newReview)
    clearForm()
  }

  const clearForm = () => {
    setNewReview({
      title: "",
      content: "",
      rating: ""
    })
  }

  return (
    <div>
      <h1>Add a Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={handleInputChange} value={newReview.title} />
        </label>
        <label>
          content:
          <input
            type="text"
            name="content"
            onChange={handleInputChange}
            value={newReview.content}
          />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" onChange={handleInputChange} value={newReview.rating} />
        </label>

        <input type="submit" value="Add Review" />
      </form>
    </div>
  )
}

export default NewReviewForm
