import Link from 'next/link';

export default function GlobalNav() {
  return (
    <ul
      style={{
        paddingRight: '20px',
        borderRight: '2px solid lime',
        marginRight: '20px'
      }}
    >
      <li>
        <b>NAVIGATION SIDEBAR</b>
      </li>
      <li>
        <Link href="/">Home Host App</Link>
      </li>
      <li>
        <Link href="/customer">Remote Customer App</Link>
      </li>
      <li>
        <Link href="/representative">Remote Representative App</Link>
      </li>
    </ul>
  );
}
