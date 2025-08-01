import { Link } from '@tanstack/react-router';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        width: '200px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <Link to={`/character/${character.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </Link>
    </div>
  );
}