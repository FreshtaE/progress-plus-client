<<<<<<< HEAD
import React from 'react';
import '../styles/globals.css';
import { AuthContextProvider } from '../firebaseUtils/useAuthContext';
import 'semantic-ui-css/semantic.min.css';
import { useRouter } from 'next/router';
import LoadingImg from '../Components/LoadingImg';
import AppFooter from '../Components/AppFooter';
=======
import React from "react";
import "../styles/globals.css";
import { AuthContextProvider } from "../firebaseAuthUtils/useAuthContext";
import "semantic-ui-css/semantic.min.css";
>>>>>>> ie-106

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname !== '/' && pageProps.session === undefined) {
    return <LoadingImg />;
  } else if (router.pathname === '/' || router.pathname === '/register') {
    return (
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    );
  } else
    return (
      <AuthContextProvider>
        <Component {...pageProps} />
        <AppFooter />
      </AuthContextProvider>
    );
}
