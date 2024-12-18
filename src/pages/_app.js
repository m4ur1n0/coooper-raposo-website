import NavBar from '@/components/NavBar';
import '../../styles/globals.css'; // Import global styles
import { useState } from 'react';

export default function MyApp({ Component, pageProps }) {

    // regular old-fashioned props drilling because context is for losers adn this site is tiny
    const [renderedComp, setRenderedComp] = useState('About Me');

    const navbar_routes = {
        'About' : ['About Me', 'Resume/CV'],
        'Architecture' : ['Project 1', 'Project 2', 'Project 3'],
        'Digital' : ['Title 1'],
        'Objects' : ['Object 1', 'Object 2', 'Object 3', 'Object 4'],
        'Press and Publications' : ['News Story 1', 'Interview 1', 'Interview 2'],
        'Work Experience' : []
    };

    const external_routes = {
        'LinkedIn' : 'https://www.linkedin.com/in/cooper-raposo-863351266/',
        'Email' : 'mailto:cooperraposo21@gmail.com'
    };

  return (
    <>
      <NavBar routeObject={navbar_routes} externalRoutes={external_routes} compSetter={setRenderedComp}/>
      <Component {...pageProps} renderedComp={renderedComp} />
    </>
  );
}
