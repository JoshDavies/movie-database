import React from 'react';
import { observer } from "mobx-react";
import Header from './Header';
import Footer from './Footer';

type propTypes = {
  children: React.ReactChild | React.ReactChild[];
}

const DefaultPageLayout = ({children}: propTypes) => {
  return (
    <div id='defaultPageLayout'>
      <Header />
      {children}
      <Footer />
    </div>
  )
};

export default observer(DefaultPageLayout);