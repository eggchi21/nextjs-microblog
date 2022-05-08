import Head from "next/head";
import Image from 'next/image';
import styles from "./layout.module.css";
import utilStyes from "../styles/utils.module.css";
import Link from "next/link";

const name = "eggchi";
export const siteTile = "Next.js";

function Layout({children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                alt=""
                src="/profile.png"
                width={150}
                height={150}
                className={`${utilStyes.borderCircle} ${styles.headerHomeImage}`}
              />
              <h1 className={utilStyes.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Image
                alt=""
                src="/profile.png"
                width={100}
                height={100}
                className={`${utilStyes.borderCircle} ${styles.headerImage}`}
              />
              <h1 className={utilStyes.heading2Xl}>{name}</h1>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <Link href="/"> ホームへ戻る</Link>
        )}
    </div>
  );
}

export default Layout;