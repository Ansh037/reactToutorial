import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Import the App component

// Define a React component
function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
      <a href="https://google.com">
        Visit Google
      </a>
    </div>
  );
}

const anotherUser=" Virat Kohli"
const reactElement = React.createElement(
  'a',
  { href: 'https://en.wikipedia.org/wiki/Virat_Kohli', target: '_blank' },
  'click me to visit greatest player of all time', 
  anotherUser
);

// Get the root container and render the app
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <>
      <App /> {/* Render the imported App component */}
      <MyApp /> {/* Render the MyApp component */}
      {reactElement} {/* Render the reactElement */}
    </>
  </StrictMode>
);