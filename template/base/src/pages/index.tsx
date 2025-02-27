import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create JA App</title>
        <meta name="description" content="Generated by create-ja-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>
          Create <span>JA</span> App
        </h1>

        <div>
          <h3>This Stack uses:-</h3>
          <ul>
            <li>
              <a href="https://nextjs.org" target="_blank" rel="noreferrer">
                Next.js
              </a>
            </li>
            <li>
              <a
                href="https://typescriptlang.org"
                target="_blank"
                rel="noreferrer"
              >
                TypeScript
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
