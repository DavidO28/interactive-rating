import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rating from './Rating/Rating';
import Thanks from './Thanks/Thanks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/interactive-rating/" element={<Rating />} />
        <Route path="/thanks/:rating" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;
