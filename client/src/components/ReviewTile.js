import React from "react"

const ReviewTile = ({ title, rating, content }) => {
  return (
    <li className="callout review">
      <h3>{title}</h3>
      <h5>{rating} stars</h5>
      <p>{content}</p>
    </li>
  )
}

export default ReviewTile
