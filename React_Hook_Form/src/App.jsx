import React from "react";
import Post from "./components/react_query/Post";
import { QueryClient, QueryClientProvider } from "react-query";
import Get from "./components/react_query/Get";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Post />
    </QueryClientProvider>
  );
};

export default App;
