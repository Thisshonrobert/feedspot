import React from 'react';
import Navbar from './components/Navbar';
import { Container, Theme } from '@radix-ui/themes';


const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
    <Container>
      
      <main>{children}</main>
    </Container></>
    
  );
};

export default Layout;
// to conditionally render layout