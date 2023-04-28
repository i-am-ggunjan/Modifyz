import React from "react";
import Post from "./components/react_query/Post";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Post />
    </QueryClientProvider>
  );
};

export default App;
