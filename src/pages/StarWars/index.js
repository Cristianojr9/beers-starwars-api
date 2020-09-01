import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Film from '../../components/Film';
import { Films } from './styles';

import api from '../../services/apiStarWars';

export default function Home() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadFilms() {
      try {
        setLoading(true);
        const response = await api.get('/films');
        setFilms(response.data.results);
        setLoading(false);
      } catch {
        alert('error');
      }
    }
    loadFilms();
  }, []);

  const filmsByEp = films.filter((film) => film.episode_id === 3);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
          <>
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
          </>
        )}
    </>
  )
}
