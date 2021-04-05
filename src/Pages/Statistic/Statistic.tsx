import React, { useEffect } from 'react';
import './Statistic.scss';

const Statistic = ({ onLoad }: any) => {
  useEffect(() => onLoad(), [onLoad])

  return (
    <>
      <main className="stat__container">
        <div className="stat">
          Statistic PAge
        </div>
      </main>
    </>
  )
}

export default Statistic;
