import './shows.css';

/** A navbar that allows users to choose between a list of shows */
const ShowSelection = ({ shows, setSelectedShow, setSelectedEpisode }) => {
  const handleSelect = (show) => {
    setSelectedShow(show);
    setSelectedEpisode(undefined);
  };

  return (
    <nav className='shows'>
      {shows.map((show, index) => (
        <a key={index} className='show' onClick={() => handleSelect(show)}>
          {show.name}
        </a>
      ))}
    </nav>
  );
};

export default ShowSelection;
