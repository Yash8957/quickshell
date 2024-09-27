import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

function Api() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && !isLoading && <KanbanBoard data={data} />}
    </div>
  );
}

export default Api;
