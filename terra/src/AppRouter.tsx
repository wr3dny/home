import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Flex } from './pages/Flex/Flex';
import { ROUTES } from './routes';

const AppRouter: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      {/* <Route path={ROUTES.flex} element={<Flex />} /> */}
      {/* <Route path={ROUTES.gallery} element={<Gallery />}>
        <Route path={ROUTES.galleryOne} element={<GalleryOne />} />
        <Route path={ROUTES.galleryTwo} element={<GalleryTwo />} /> */}
      {/* </Route> */}
    </Routes>
  </HashRouter>
);