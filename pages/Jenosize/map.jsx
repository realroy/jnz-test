import Head from "next/head";

import { DefaultLayout } from "../../layouts";
import { Map } from "../../components";

const title = "Jenosize Map";

const JenosizeMapPage = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <DefaultLayout>
        <Map />
      </DefaultLayout>
    </>
  );
};

export default JenosizeMapPage;
