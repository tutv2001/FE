import React from "react";
import Head from "next/head";
type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="text-red-600">index</div>
    </>
  );
};

export default index;
