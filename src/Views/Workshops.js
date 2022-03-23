import { useState, useEffect } from 'react';
import { getWorkshops } from '../services/FetchUtils.js';

export default function Workshops() {
  const [workshops, sw] = useState([]);

  useEffect(() => {
    const fetchWorkshopData = async () => {
      const data = await getWorkshops();
      console.log(data, 'data in workshop.js');
      sw(data);
    };
    fetchWorkshopData();
  }, []);

  return (
    <div>
      <h3>This is all of the workshops!!</h3>
      {workshops.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
