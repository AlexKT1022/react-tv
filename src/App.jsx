import { useState } from 'react';
import { tvShows } from './components/shows/data';
import ShowSelection from './components/shows/ShowSelection';
import ShowDetails from './components/shows/ShowDetails';

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
const App = () => {
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState();
  const [selectedEpisode, setSelectedEpisode] = useState();

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={shows}
          setSelectedShow={setSelectedShow}
          setSelectedEpisode={setSelectedEpisode}
        />
      </header>
      <main>
        <ShowDetails
          show={selectedShow}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
      </main>
    </>
  );
};

export default App;
