import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './assets/components/card/card.jsx'
import Navbar from './assets/components/navbar/navbar.jsx'
import Loginform from './assets/authentication/loginform.jsx'
import Signupform from './assets/components/signupform/signup.jsx'
import CourseCard from './assets/components/course-card/course-card.jsx'

createRoot(document.getElementById('root')).render(

    <App />
    
)
