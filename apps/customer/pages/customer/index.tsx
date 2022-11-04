import React from 'react';
import Link from 'next/link';
import { counter } from 'host/store';
import { useRecoilValue } from 'recoil';

const Customer = () => {
  const value = useRecoilValue(counter);
  return (
    <div>
      <div className="hero">
        <h2>Customer Remote App</h2>
        <h3 className="title">
          This is a federated page owned by localhost:4201
        </h3>
        {value}
        <p className="description">
          <Link href="/customer/profile">
            Link to Profile page within Customer remote app
          </Link>
          <br />
        </p>
      </div>
    </div>
  );
};

export default Customer;
