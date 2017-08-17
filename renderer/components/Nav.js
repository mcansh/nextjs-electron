import React from 'react';
import Link from 'next/link';

const Nav = ({ pathname }) => (
  <ul>
    <li>
      <Link href="/about" prefetch>
        <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
      </Link>
    </li>
    <li>
      <Link href="/start" prefetch>
        <a className={pathname === '/start' ? 'is-active' : ''}>Start</a>
      </Link>
    </li>
    <li>
      <Link href="/info" prefetch>
        <a className={pathname === '/info' ? 'is-active' : ''}>Info</a>
      </Link>
    </li>
    <style jsx>{`
      a {
        color: black;
        text-decoration: none;
      }
      .is-active {
        color: red;
      }
    `}</style>
  </ul>
);

export default Nav;
