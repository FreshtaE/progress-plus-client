import React, { useContext } from 'react';
import { AuthProvider } from '../Components/authentication/authContext';

function MyApp({ Component, pageProps }) {
  console.log(AuthProvider);
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;

//The <Component {...pageProps} /> part represents individual pages. When you navigate between different pages of your website, only the children data of <Component {...pageProps} /> changes.
