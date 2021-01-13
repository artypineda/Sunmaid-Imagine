import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Intro from "../components/parts/intro";
import Generator_Start from "../components/generator_start";
import Video from "../components/video";

export default function Home() {
  return (
    <>
      <div className="backgroundImage1 ">
        <Layout homepg>
          <Head>
            <title>{siteTitle}</title>
          </Head>

          <Intro />
          <Generator_Start />
          <Video />
        </Layout>
      </div>
    </>
  );
}
