import styles from '../styles/styles.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>Board</title>
    </Head>
    <div>
      <h1 className={styles.title}>Exemplo de SCSS com cascata:<span> SPAN </span></h1>
    </div>
    </>
  )
}
