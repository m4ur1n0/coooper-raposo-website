import React, { useState } from 'react';

const NavBar = ({ routeObject, externalRoutes, compSetter }) => {
  const [selected, setSelected] = useState(Object.keys(routeObject)[0]);

  const setComp = (component) => {
    compSetter(component);
  }

  return (
    <div className="navbar fixed w-[30%] h-full z-10 py-24 pl-32 shadow-xl">
      <h2 className="cooper-raposo-navbar-name mb-5">Cooper Raposo</h2>

      {Object.entries(routeObject).map(([parent, children]) => (
        <div key={parent} className="parent-navbar-link-container flex flex-col">
          {/* Parent Route */}
          <p
            className={`parent-navbar-item cursor-pointer hover:text-gray-600 no-select ${selected===parent && 'font-semibold'}`}
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
                className="navbar-child-link py-1 text-gray-700 cursor-pointer no-select"
                key={index}
                onClick={() => setComp(path)}
              >
                {path}
              </p>
            ))}
          </div>
        </div>
      ))}
    
      <div className='external-links pt-10'>
        {Object.entries(externalRoutes).map(([title, link]) => (
            <p>
                <a className='navbar-external-link' href={link} target='_blank'>{title}</a>
            </p>
        ))}
      </div>

    </div>
  );
};

export default NavBar;
