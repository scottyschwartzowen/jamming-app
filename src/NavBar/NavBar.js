import React from 'react';

import SpotifyButton from '../components/Buttons/SpotifyButton'

const NavBar = () => {
  return (
    <nav>
      <a href="/">Logo</a>
      <h1>Scotty's Playlist App</h1>
      <SpotifyButton />
    </nav>
  );
};

export default NavBar;
