import dynamic from 'next/dynamic'
import { parseCookies } from "nookies";

import React from "react";

const DynamicComponentWithNoSSR = dynamic(
  () => import("./TextEditor/Editor"),
  { ssr: false }
);

export const TextEditor = () => {
  return (
    <DynamicComponentWithNoSSR/>
  );
};

export async function getServerSideProps(ctx) {
  const {Role} = parseCookies(ctx);
  if (Role != "root") {
    const { res } = ctx;
    res.writeHead(302, { Location: "/" });
    res.end();
  }
  return {
    props: { },
  };
}
export default TextEditor;
