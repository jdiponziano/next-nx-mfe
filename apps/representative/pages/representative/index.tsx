import React from 'react';
import { useRecoilState } from 'recoil';
import { counter } from 'host/store';
import { Button } from '@mfe-nx-sandbox/ui';

const Representative = () => {
  const [count, setCount] = useRecoilState(counter);

  return (
    <div>
      <div className="hero">
        <h2>Representative Page</h2>
        <h3 className="title">
          This is a federated page owned by localhost:4202
        </h3>
        <p className="description">
          Representative Remote app 2.
          <br />
        </p>
        <p>State being carried between apps: {count}</p>
        <Button onClick={() => setCount(count + 1)} />
      </div>
    </div>
  );
};

export default Representative;
