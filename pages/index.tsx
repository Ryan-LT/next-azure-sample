import type { NextPage } from "next";
import { useState } from "react";

export type HomePage = {
  now: string;
};

const Home: NextPage<HomePage> = () => {
  const handleRevalidate = (pageNumber: number) => {
    fetch(`/api/revalidate?pageNumber=${pageNumber}`);
  };

  return (
    <div>
      <button onClick={() => handleRevalidate(1)}>Revalidate Page 1</button>
      <br />
      <br />
      <button onClick={() => handleRevalidate(2)}>Revalidate Page 2</button>
    </div>
  );
};

export default Home;
