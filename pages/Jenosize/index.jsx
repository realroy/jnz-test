import Head from "next/head";
import { DefaultLayout } from "../../layouts";

const JenosizeIndexPage = () => {
  const title = "Finding X, Y and Z";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <DefaultLayout>
        <h1>{title}</h1>
      </DefaultLayout>
    </>
  );
};

export default JenosizeIndexPage;
