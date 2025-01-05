import NavBar from '@/components/NavBar';
import '../../styles/globals.css'; // Import global styles
import { useState } from 'react';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {

    // regular old-fashioned props drilling because context is for losers adn this site is tiny
    const [renderedComp, setRenderedComp] = useState('About Me');

    const navbar_routes = {
        'About' : ['About Me', 'Resume/CV'],
        'Architecture' : ['Tegner Museum', 'Apex Design Build', 'Indre By Shipyard', 'CFPA Threshold Design Build', 'Tumbling House'],
        'Digital' : [],
        'Objects' : [],
        'Press and Publications' : [],
        'Work Experience' : []
    };

    const external_routes = {
        'LinkedIn' : 'https://www.linkedin.com/in/cooper-raposo-863351266/',
        'Email' : 'mailto:cooperraposo21@gmail.com'
    };

  return (
    <>
      <Head>
        {/** primary meta tags */}
        <title>Cooper Raposo</title>
        <meta name="description" content={"Cooper Raposo is an artist based in Upstate New York. Raposo specializes in thre dimensional and digital fabrication."} />
        {/* <meta name="keywords" content={keywords} />


        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/path-to-social-image.jpg" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/path-to-social-image.jpg" /> */}

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.cooperraposo.info" />

      </Head>


      <div className='flex flex-col md:flex-row h-screen w-full overflow-x-hidden'>
        <NavBar routeObject={navbar_routes} externalRoutes={external_routes} compSetter={setRenderedComp}/>
        <Component {...pageProps} renderedComp={renderedComp} /> 
      </div>
    </>
  );
}
