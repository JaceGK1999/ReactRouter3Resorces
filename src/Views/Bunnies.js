import { getBunnies } from '../services/FetchUtils';
import { useState, useEffect } from 'react';

export default function Bunnies() {
  const [bunnies, setBunnies] = useState([]);

  useEffect(() => {
    const fetchBunnies = async () => {
      const data = await getBunnies();
      setBunnies(data);
    };
    fetchBunnies();
  }, []);

  return (
    <div>
      <h3>This is all of the bunnies!!</h3>
      {bunnies.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
