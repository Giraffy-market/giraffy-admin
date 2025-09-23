import type { FC } from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

// Remove for future updates
const dataProvider = jsonServerProvider(import.meta.env.VITE_API_BASE_URL);

export const App: FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={<ListGuesser />} />
    <Resource name="comments" list={<ListGuesser />} />
  </Admin>
);
