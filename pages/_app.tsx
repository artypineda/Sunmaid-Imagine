import { AppProps } from 'next/app';
import Router from 'next/router';
import React, {useEffect } from 'react';
import { GTMPageView } from '../components/utils/gtm';

function MyApp({ Component, pageProps }: AppProps) {
    // ...

    // Initiate GTM
    useEffect(() => {
        const handleRouteChange = (url: string) => GTMPageView(url);
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    // ...
}

export default MyApp;