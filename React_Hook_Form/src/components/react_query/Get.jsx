import React from "react";
import { useQuery } from "react-query";

function Get() {
  const { isLoading, isError, error, data } = useQuery("register", () =>
    fetch("http://localhost:4000/register").then((res) => res.json())
  );

  console.log(isLoading);
  console.log(data);
  console.log(isError);
  console.log(error);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error.....</div>;

  return (
    <div>
      <h1>Register</h1>
      {data.map((value) => {
        return (
          <div key={value.id}>
            <p>{value.name}</p>
            <p>{value.email}</p>
            <p>{value.address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Get;
