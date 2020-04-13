import Head from "next/head";
import { DefaultLayout } from "../../layouts";

const JenosizeIndexPage = () => {
  const title = "Finding X, Y and Z";
  const n = [3, 5, 9, 15]
  
  const calculateN = (i) => n[0] + ((n[1] - n[0]) * i)
  
  const x = calculateN(4)
  const y = calculateN(5)
  const z = calculateN(6)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <DefaultLayout>
        <h1>{title}</h1>
        <div>
          <p>
            Let n = [ {n.join(', ')}, X, Y, Z ]
          </p>
          <p>
            Assume that series has fix interval <br />
            ni = n0 + (n1 - n0) x i
          </p>
          <p>
            Then<br /> 
              x = n4 = {n[0]} + ({n[1]} - {n[0]}) x 4 = {x} <br/>
              y = n5 = {n[0]} + ({n[1]} - {n[0]}) x 5 = {y} <br/>
              z = n6 = {n[0]} + ({n[1]} - {n[0]}) x 6 = {z} <br/>
          </p>
        </div>
      </DefaultLayout>
    </>
  );
};

export default JenosizeIndexPage;
