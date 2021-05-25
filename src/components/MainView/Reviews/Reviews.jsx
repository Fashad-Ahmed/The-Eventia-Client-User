import React from 'react';
import Admin from '../../../admin/Admin';
import ReviewCards from "./ReviewCards"

const Reviews = () => {
  return <Admin>
    <div className="row">
      <div style={{ marginBottom: "0px", paddingBottom: "0px" }} className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
        <h2>Filter Harsh Reviews</h2>
        <p style={{ marginTop: "-10px", paddingBottom: "5px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae odit sapiente magni eaque vero.
          </p>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "20px 0px" }}>
      <ReviewCards />
      <ReviewCards />
      <ReviewCards />
      <ReviewCards />
    </div>
  </Admin>
}

export default Reviews;