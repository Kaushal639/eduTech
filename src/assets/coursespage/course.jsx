import React from 'react';
import CourseCard from '../components/course-card/course-card.jsx';

import Container from '../components/container/container.jsx';
import { Link } from 'react-router-dom';

function Coursespage() {
    return(<>
    <div className="coursespage" id="courses">
            <div className="container-section">
      <Container title="OUR COURSES">
         <CourseCard title="Software Engineering" discount="50%" description="Learn the fundamentals of software engineering." offerprice="₹4999" price="9000" image="https://images.unsplash.com/photo-1768933294181-82778103e501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"></CourseCard>
         <CourseCard title="Network Security" discount="40%" description="Learn the fundamentals of network security." offerprice="₹3999" price="6500" image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"></CourseCard>
         <CourseCard title="Embedded Systems" discount="35%" description="Learn the fundamentals of embedded systems." offerprice="₹2999" price="4500" image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"></CourseCard>
         <CourseCard title="Thermodynamics" discount="25%" description="Learn the fundamentals of thermodynamics." offerprice="₹2499" price="3200" image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"></CourseCard>
      </Container></div>
    </div>
    </>)}
    export default Coursespage;