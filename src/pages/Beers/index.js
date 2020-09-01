import React, { useEffect, useState } from 'react';

import Beer from '../../components/Beer';
import { Beers } from './styles';

import api from '../../services/api';

export default function Home() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function loadBeers() {
      const response = await api.get('/beers');
      setBeers(response.data);
    }
    loadBeers();
  }, []);

  return (
    <>
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
    </>
  )
}
