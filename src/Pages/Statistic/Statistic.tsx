import React, { useEffect } from 'react';

const Statistic = ({ onLoad }: any) => {
  useEffect(() => onLoad(), [onLoad])
  return <>
  </>
}

export default Statistic;
