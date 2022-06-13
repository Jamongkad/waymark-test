import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '@mui/material/Button';
import Layout from '../components/layout';
import { Box, Container, Grid, Link, Paper, Stack } from '@mui/material';
import ResponsiveAppBar from '../components/appbar';
import React, { useState } from 'react';
import NoteGrid from '../components/notegrid';
import { NoteApiContextProvider } from '../contexts/NoteApiContext';
import AddNoteForm from '../components/addnoteform';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
         <Head>
          <title>Waymark Test</title>
        </Head>
        <Container>
          <NoteApiContextProvider>
            <Grid 
              container
              spacing={2}
            >
              <Grid item xs={6} md={12}>
                <ResponsiveAppBar />
              </Grid>
              <Grid item xs={6} md={3}>
                <AddNoteForm />
              </Grid>
              <Grid item xs={6} md={9}>
                <NoteGrid />
              </Grid>
            </Grid>
          </NoteApiContextProvider>
        </Container>
      </Layout>
    </>
  )
}

export default Home
