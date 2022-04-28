class ReviewSerializer {
  static getSummary(review) {
    const allowedAttributes = ["id", "title", "content", "rating"]
    const serializedReview = {}
    for (const attribute of allowedAttributes) {
      serializedReview[attribute] = review[attribute]
    }

    return serializedReview
  }
}

export default ReviewSerializer