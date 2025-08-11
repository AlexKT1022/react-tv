import EpisodeList from '../episodes/EpisodeList';
import EpisodeDetails from '../episodes/EpisodeDetails';
import './shows.css';

/** Allows users to browse through the episodes of the given show */
const ShowDetails = ({ show, selectedEpisode, setSelectedEpisode }) => {
  if (!show) {
    return <p>Please select a show to learn more.</p>;
  }

  return (
    <div className='show-details'>
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
};

export default ShowDetails;
