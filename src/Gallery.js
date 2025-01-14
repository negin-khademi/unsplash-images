import axios from 'axios';
import { useGlobalContext } from './context';
import { useQuery } from '@tanstack/react-query';

const url = 'https://api.unsplash.com/search/photos?client_id=BXJzyeID_-P3B04-R4akiRpO855PDUba-YbZ6o8ZEpA';

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading || !response.data) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }
  const results = response.data.results;
  if (results.length < 1) {
    return <section className="image-container">No results found...</section>;
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return <img src={url} key={item.id} alt={item.alt_description} className="img" />;
      })}
    </section>
  );
};

export default Gallery;
