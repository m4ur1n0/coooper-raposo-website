import React, { useState } from 'react';

const NavBar = ({ routeObject, externalRoutes, compSetter }) => {
  const [selected, setSelected] = useState(Object.keys(routeObject)[0]);

  const setComp = (component) => {
    compSetter(component);
  }

  return (
    <div className="navbar sticky top-0 z-50 flex  md:h-screen flex-row w-full md:flex-col items-center md:px-16 md:max-w-[20%] md:pt-32 bg-background shadow-sm md:shadow-none">

      <div className='navbar-content-container flex flex-row justify-between w-full items-center p-5     md:flex-col md:p-0'>

        <h2 className="cooper-raposo-navbar-name thin-font md:-ml-[1px] md:mb-5">Cooper Raposo</h2>

        <div className='mobile-navbar md:hidden mr-10'>
          <p>{selected}</p>
        </div>


        <div className='desktop-navbar hidden md:block'>
          {Object.entries(routeObject).map(([parent, children]) => (
            <div key={parent} className="parent-navbar-link-container flex flex-col">
              {/* Parent Route */}
              <p
                className={`parent-navbar-item cursor-pointer hover:text-gray-600  no-select`}
                style={{ fontWeight: selected === parent ? 300 : 100 }}
                onClick={() => setSelected(selected === parent ? null : parent)} // Toggle selected parent
              >
                {parent}
              </p>

              {/* Child Routes */}
              <div
                className={`navbar-children-container ml-4 transition-all duration-300 ease-in-out overflow-hidden ${
                  selected === parent ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                {children.map((path, index) => (
                  <p
                    className="navbar-child-link py-1 text-gray-700 cursor-pointer no-select thinnest-font"
                    key={index}
                    onClick={() => setComp(path)}
                  >
                    {path}
                  </p>
                ))}
              </div>
            </div>
          ))}
        
          <div className='external-links mt-5'>
            {Object.entries(externalRoutes).map(([title, link]) => (
                <p>
                    <a className='navbar-external-link thinnest-font no-select' href={link} target='_blank'>{title}</a>
                </p>
            ))}
          </div>

        </div>
        
      </div>


    </div>
  );
};

export default NavBar;
