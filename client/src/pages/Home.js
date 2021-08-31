import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import Input from '../components/Entry/Input';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-body m-5">
        <h2>Welcome to self help!</h2>
        <div>
          Articles
        </div>
      </div>
      <div className="card-footer text-center m-3">
        <Input />
      </div>
    </div>
  );
};

export default Home;