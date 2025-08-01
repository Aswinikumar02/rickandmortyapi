import { useQuery } from '@tanstack/react-query';
import { useMatch } from '@tanstack/react-router';
import { fetchCharacterById } from '../api/rickMortyApi';

const CharacterDetails = () => {
  const match = useMatch({
    strict: false, // optional, depending on your route setup
  });

  const { id } = match.params;

  const { data, isLoading } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} />
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
      <p>Gender: {data.gender}</p>
    </div>
  );
};

export default CharacterDetails;