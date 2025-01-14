import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const url = 'https://api.unsplash.com/search/photos?client_id=BXJzyeID_-P3B04-R4akiRpO855PDUba-YbZ6o8ZEpA&query=cat';

const Gallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(response);
  return <h1>Gallery</h1>;
};

export default Gallery;
