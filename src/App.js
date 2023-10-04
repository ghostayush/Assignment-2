import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <Router>
     <Routes>
       <Route path="/" exact element={<Home />} />
       <Route path="/property/:id" element={<Home/>}/>
     </Routes>
    </Router>) ;
}

export default App;
