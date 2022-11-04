import Head from 'next/head';
import { useRecoilState } from 'recoil';
import { counter } from '../store';
import { Button } from '@mfe-nx-sandbox/ui';
import Link from 'next/link';
// import styles from './index.module.scss';

export default function Index() {
  const [count, setCount] = useRecoilState(counter);
  return (
    <>
      <Head>
        <title>Host App</title>
      </Head>
      <section>
        <h2>Host App port 4200</h2>
        <Link href="/hostpage">Inner page in host app link</Link>
        <p>State being carried between apps: {count}</p>
        <Button onClick={() => setCount(count + 1)} />
      </section>
    </>
  );
}
