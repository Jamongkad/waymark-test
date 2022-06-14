import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout';
import { Container } from '@mui/material';
import { ConditionApiContextProvider, NoteApiContextProvider } from '../contexts/NoteApiContext';
import App from './app';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
         <Head>
          <title>Waymark Test</title>
        </Head>
        <Container>
          <NoteApiContextProvider>
            <ConditionApiContextProvider>
              <App />
            </ConditionApiContextProvider>
          </NoteApiContextProvider>
        </Container>
      </Layout>
    </>
  )
}

export default Home
