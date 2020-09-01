import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Post({ id, name, tagline, description, image_url, like }) {
  return (
    <Container >
      <img src={image_url} alt="" />
      <h1>{name}</h1>
      <h2>{tagline}</h2>
      <p>{description}</p>
      <button>{like}</button>
    </Container>
  )
}

Post.defaultProps = {
  id: null,
  name: null,
  tagline: null,
  description: null,
  image_url: null,
  like: null,
};
Post.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  tagline: PropTypes.string,
  image_url: PropTypes.string,
  like: PropTypes.number,
};