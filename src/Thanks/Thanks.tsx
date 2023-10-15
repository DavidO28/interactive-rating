import './Thanks.css'
import { useParams, useNavigate } from 'react-router-dom';


function Thanks() {
  const { rating } = useParams<{ rating: string }>();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/interactive-rating`);
  }

  return (
    <div>
      <h1>Thank You for Your Feedback</h1>
      <h2>You rated our app {rating} out of 5.</h2>
      <button onClick={handleClick}>Go to homepage</button>
    </div>
  );
}

export default Thanks;
