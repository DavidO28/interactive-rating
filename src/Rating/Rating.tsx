import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rating.css'

function Rating() {
  const [rating, setRating] = useState<number | 0>(0);
  const navigate = useNavigate();

  const buttons: number[] = [1, 2, 3, 4, 5];

  const handleRating = (value: number) => {
    setRating(value);
    navigate(`/thanks/${value}`);
  };

  return (
    <div>
      <h1>Rate Our App</h1>
      {buttons.map((value) => (
        <button key={value} onClick={() => handleRating(value)}>
          {value}
        </button>
      ))}
    </div>
  )
}

export default Rating;
