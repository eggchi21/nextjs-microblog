import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTile } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getPostsData } from '../lib/post';

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id, title
  return {
    props: {
      allPostsData,
    },
  };
}

// // SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     }
//   }
// }

export default function Home( { allPostsData } ) {
  return <Layout home>
    <Head>
      <title>{siteTile}</title>
    </Head>
    <section className={` ${utilStyles.headingMd} ${utilStyles.padding1px} `}>
      <p>
        私は~~です。
      </p>
    </section>

    <section>
      <h2>ブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({ id, date, title, thumbnail }) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <Image
                alt=""
                src={`${thumbnail}`}
                className={styles.thumbnailImage}
                width={150}
                height={150}
              />
            </Link>
            <Link href={`/posts/${id}`}>
              <a className={utilStyles.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              Feb 2022
            </small>
          </article>
        ))}
      </div>
    </section>

  </Layout>
}
