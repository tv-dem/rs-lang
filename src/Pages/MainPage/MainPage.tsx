import React, { useEffect } from 'react';

const MainPage = ({ onLoad }: any) => {
  useEffect(() => onLoad(), [onLoad]);

  return (<>
    Home Page
  </>)
}

export default MainPage;
