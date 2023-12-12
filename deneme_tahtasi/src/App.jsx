import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import MeydanOkumaPage from './pages/MeydanOkumaPage'


export default function App() {
  return (
    <>
    
        <Route exact path='/' component={HomePage} />
        <Route exact path='/profile' component={ProfilePage} />
        <Route exact path='/meydanokuma' component={MeydanOkumaPage} />
        
    </>
  )
}
