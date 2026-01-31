import React from 'react';
import Container from '../components/container/container.jsx';

 function About(){
    return(<>
    <Container title="About Us">
          <h7>Edutech</h7>
        <p>
          We are an innovative EdTech company on a mission to make high-quality
          education accessible, practical, and career-focused. Our expertly
          designed courses help learners build real-world skills that matter in
          todays fast-changing job market.
        </p>

        <p>
          From beginners to professionals, our courses are created by industry
          experts and structured to be engaging, flexible, and easy to follow.
          Learn at your own pace with hands-on projects, interactive lessons,
          and continuous support.
        </p>

        <div className="about-highlights">
          <div className="highlight">
            <h4>🎓 Expert-Led Courses</h4>
            <p>Learn from professionals with real industry experience.</p>
          </div>

          <div className="highlight">
            <h4>🚀 Career-Focused Learning</h4>
            <p>Gain practical skills that translate directly to the workplace.</p>
          </div>

          <div className="highlight">
            <h4>🌍 Learn Anytime, Anywhere</h4>
            <p>Access courses online and learn at your own pace.</p>
          </div>
        </div>
    </Container>
        </>)
}
export default About;
