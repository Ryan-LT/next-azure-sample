import type { NextPage } from "next";

export type SecondPage = {
  now: string;
};

const SecondPage: NextPage<SecondPage> = ({ now }) => {
  return (
    <div>
      <h1>Second Page</h1>
      <h1>Render at: {now}</h1>
    </div>
  );
};

export async function getStaticProps() {
  const now = new Date().toLocaleTimeString();
  return {
    props: { now },
  };
}

export default SecondPage;
