import React, { useEffect, useState } from 'react'
import Film from '../../components/Film'
import { Films } from './styles';

import api from '../../services/apiStarWars';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get('/films');
      setFilms(response.data.results);
    }
    loadFilms();
  }, []);

  console.log(films);

  return (
    <Films>
      {films.map((film) => (
        <Film
          key={film.id}
          id={film.id}
          name={film.title}
          episode_id={film.episode_id}
          opening_crawl={film.opening_crawl}
        />
      ))}
    </Films>
  )
}
