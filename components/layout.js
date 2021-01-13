import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Clouds from "./parts/clouds";

export const siteTitle = "Sunmaid Imagination";

export default function Layout({ children, homepg }) {
  return (
    <>
      <div className={`${styles.container}`}>
        <Clouds />

        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta name="description" content={siteTitle} />
          <meta
            property="og:image"
            //content={`https://og-image.now.sh/SunMaid%20Imagination.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Farturoweb.com%2Fapis%2Fsunmaid%2Fsunmaid.png&widths=undefined&widths=auto&heights=undefined&heights=200`}
            content={`https://sunmaidimagination.com/images/ogimage1.png`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          <a href="https://www.sunmaid.com/imaginethat/">
            <img
              src="/images/smr_logo.png"
              alt="Sunmaid Logo"
              className="moveDown"
              width="238"
              height="100%"
            />
          </a>
        </header>

        <main>{children}</main>
        <footer
          className={`
          ${styles.goTo}
      `}
        >
          <a href="https://www.sunmaid.com/imaginethat/">
            <img src="/images/goTo.png" />
          </a>

          {!homepg && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back Home</a>
              </Link>
            </div>
          )}
        </footer>
      </div>
    </>
  );
}
