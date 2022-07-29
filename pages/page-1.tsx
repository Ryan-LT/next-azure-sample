import type { NextPage } from "next";

export type FirstPage = {
  now: string;
};

const FirstPage: NextPage<FirstPage> = ({ now }) => {
  return (
    <div>
      <h1>First Page</h1>
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

export default FirstPage;
