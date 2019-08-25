import React from 'react'

export const BuyNowButton = ({ show = false, imageURL }) =>
  show ? (
    <a
      target="_blank"
      className="buy-now"
      href={`mailto:barlow.collette+lettesart@gmail.com?subject=${
        EMAIL.SUBJECT
      }&body=${EMAIL.CREATE_BODY(imageURL)}`}
    >
      Buy Now
    </a>
  ) : null
