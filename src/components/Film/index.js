import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Post({ id, name, opening_crawl, episode_id }) {
  return (
    <Container >
      <h1>{name}</h1>
      <h2>Epsódio: {episode_id}</h2>
      <p>{opening_crawl}</p>
    </Container>
  )
}

Post.defaultProps = {
  id: null,
  name: null,
  opening_crawl: null,
  episode_id: null
};
Post.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  opening_crawl: PropTypes.string,
  episode_id: PropTypes.string
};