import React, { useState } from 'react';

const NavBar = ({ routeObject, externalRoutes, compSetter }) => {
  const [selected, setSelectedRoute] = useState(Object.keys(routeObject)[0]);
  const [menuIsOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const setSelected = (id) => {
    setSelectedRoute(id);
    compSetter(id);
  }

  const setComp = (component) => {
    compSetter(component);
  }

  const handleOpenMenu = () => {
    if (openSubMenu === null) {
      setMenuOpen(!menuIsOpen);

    }

    setOpenSubMenu(null);


  }

  const handleParentMobileNavBarClick = (parentId) => {
    if(routeObject[parentId].length === 0) {
      setSelected(parentId);
    }

    setOpenSubMenu(parentId);
    setMenuOpen(false);

  }

  const handleChildMobileNavBarClick = (childId) => {
    setSelected(childId);

    setMenuOpen(false);
    setOpenSubMenu(null);

  }

  return (
    <div className="navbar sticky top-0 z-50 flex  md:h-screen flex-row w-full md:flex-col items-center md:px-16 md:max-w-[20%] md:pt-24 bg-background shadow-sm md:shadow-none">

      <div className='navbar-content-container flex flex-row justify-between w-full items-center p-5     md:flex-col md:p-0 '>

        <h2 className="cooper-raposo-navbar-name thin-font md:-ml-[6px] md:mb-5 no-select">Cooper Raposo</h2>

        <div className='mobile-navbar md:hidden mr-10'>

          <div className='mobile-navbar-menu-flex-wrapper flex flex-col items-center'>
            <div className='navbar-page-select-activator p-4            cursor-pointer' onClick={handleOpenMenu}>
              <p>{selected}</p>
            </div>

            {(menuIsOpen) && 
              <div className='absolute menu-page-parents-mobile p-4 mt-10 right-0 flex flex-col mr-12'>

                {Object.entries(routeObject).map(([parent, children], idx) => (
                  parent!==selected && <div 
                      className='mobile-parent-navbar-item cursor-pointer border' 
                      key={idx}
                      onClick={() => handleParentMobileNavBarClick(parent)}
                  >
                    <p className='text-bold'>{parent}</p>

                  </div>
                ))}
                  
              </div>
            }

            {(openSubMenu !== null) &&
              <div className='absolute menu-page-children-mobile p-4 mt-10 right-0 flex flex-col mr-12'>
                {routeObject[openSubMenu].map((entry, index) => (
                  entry!==selected && <div
                    className='mobile-parent-navbar-item cursor-pointer border'
                    key={index}
                    onClick={()=>handleChildMobileNavBarClick(entry)}>
                      <p className='text-bold'>{entry}</p>
                  </div>
                ))}

              </div>
            }

          </div>



        </div>


        <div className='desktop-navbar hidden md:block'>
          {Object.entries(routeObject).map(([parent, children], idx) => (
            <div key={idx} className="parent-navbar-link-container flex flex-col">
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
