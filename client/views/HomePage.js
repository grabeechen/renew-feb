import React from 'react';
import { useTranslation } from 'react-i18next';
// utils
import inject from '../utils/inject';
// views
import AppLayout from './AppLayout';
// componsnts
import Hero from '../components/Hero';

const HomePage = inject(() => {
  const [t] = useTranslation();

  return (
    <AppLayout pageName="home">
      <Hero>
        {t('app:title')}
      </Hero>
    </AppLayout>
  );
});

export default HomePage;
