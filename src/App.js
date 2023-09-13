import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchRepos } from './components/SearchRepos';
import { ErrorBoundary } from './components/ErrorBoundary';

// kill ort kill -9 $(lsof -ti:3000,3001) &&

const queryClient = new QueryClient();
function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <QueryClientProvider client={queryClient}>
        <SearchRepos />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
