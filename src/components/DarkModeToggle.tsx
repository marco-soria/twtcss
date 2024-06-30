// DarkModeToggle.tsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle: React.FC = () => {
  // Paso a) Establecer el modo oscuro basado en la preferencia del sistema al cargar
  const [darkMode, setDarkMode] = useState<boolean>(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    // Actualizar el modo oscuro basado en la preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
      e.matches ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    };

    // Añadir listener para cambios en la preferencia del esquema de colores
    mediaQuery.addEventListener('change', handleChange);

    // Establecer el modo oscuro basado en la preferencia actual del sistema
    darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');

    // Limpieza al desmontar el componente
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed right-0 top-24 z-10 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-900 p-2 text-3xl text-zinc-200 dark:bg-zinc-200 dark:text-zinc-900"
    >
      {darkMode ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  );
};

export { DarkModeToggle };





// // DarkModeToggle.tsx
// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// const DarkModeToggle: React.FC = () => {
//   const [darkMode, setDarkMode] = useState<boolean>(true);

//   useEffect(() => {
//     const isDarkMode = document.body.classList.contains('dark');
//     setDarkMode(isDarkMode);
//   }, []);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (darkMode) {
//       document.body.classList.remove('dark');
//     } else {
//       document.body.classList.add('dark');
//     }
//   };

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="fixed right-0 top-24 z-10 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-900 p-2 text-3xl text-zinc-200 dark:bg-zinc-200 dark:text-zinc-900"
//     >
//       {darkMode ? (
//         <FontAwesomeIcon icon={faSun} />
//       ) : (
//         <FontAwesomeIcon icon={faMoon} />
//       )}
//     </button>
//   );
// };

// export { DarkModeToggle };