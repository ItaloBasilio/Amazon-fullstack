import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon Project</title>
      </Head>

      <Header />
     
      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
      <Banner />

        {/* Product feed */}
      </main>


    </div>
  );
}
