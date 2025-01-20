import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';

const AppQuery = graphql`
  query AppQuery {
    viewer {
      id
    }
  }
`;

export default function App() {
  const data = useLazyLoadQuery(AppQuery, {});
  return <div>Viewer ID: {data.viewer.id}</div>;
}