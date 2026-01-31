import React from 'react';
import './course-card.css';

const CourseCard = (props) => {
    return (<>
        <div className="main-course-card">
            <div className="course-card">
                <div className="course-image">
                    <img src={props.image} alt="tuitor-img" />
                </div>
                <div className="course-details">
                    <div id="h1">
                    <h1>{props.title}</h1><br/>
                    <p>{props.description}</p> <br/>
                  
                    </div>
                    <div className="price-discount-section">
                    <div className="price-section">
                      <h2>Price: {props.offerprice}<h5>{props.price}</h5></h2>
                      </div>
                <div id="h3">
                    <h3>{props.discount}<span>off</span></h3>
                </div>
                   </div>

                </div>
                <div className="buy-now">
                    <button>Enroll Now</button>
                </div>
            </div>
            </div>
</>
    )
}
export default CourseCard;