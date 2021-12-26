import React from 'react';
import { Button } from '@material-ui/core';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout tittle="Music App">
      Music App
      <Button variant="contained" color="primary">Procurar</Button>
    </Layout>
  )
}
