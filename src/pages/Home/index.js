import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function index() {
  return (
    <Container>
      <h1>Selecione uma categoria para visualizar</h1>
      <section>
        <Link to="/beers">
          <button type="submit">Beers</button>
        </Link>
        <Link to="/starwars">
          <button>Films</button>
        </Link>

      </section>
    </Container>
  )
}
