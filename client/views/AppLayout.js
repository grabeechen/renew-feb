import React from 'react';
// utils
import inject from '../utils/inject';
// components
import Page from '../components/Page';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const AppLayout = inject(({ children, pageName }) => {
  return (
    <>
      <Header />
      <Main>
        <Page data-page={pageName}>
          {children}
        </Page>
      </Main>
      <Footer />
    </>
  );
});

export default AppLayout;
