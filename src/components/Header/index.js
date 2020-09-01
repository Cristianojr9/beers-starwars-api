import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <span>Desafio</span>
      </Link>
    </Container>
  )
}