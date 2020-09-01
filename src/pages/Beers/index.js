import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Beer from '../../components/Beer';
import { Beers } from './styles';

import api from '../../services/api';

export default function Home() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadBeers() {
      try {
        setLoading(true);
        const response = await api.get('/beers');
        setBeers(response.data);
        setLoading(false);
      } catch {
        alert("error");
      }
    }
    loadBeers();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
          <Beers>
            {beers.map((beer) => (
              <Beer
                key={beer.id}
                id={beer.id}
                name={beer.name}
                tagline={beer.tagline}
                description={beer.description}
                image_url={beer.image_url}
              />
            ))}
          </Beers>
        )}
    </>
  )
}
