import { useQuery } from '@tanstack/react-query';
import router from '../routes';
import { fetchCharacters } from '../api/rickMortyApi';
import { useSearch } from '@tanstack/react-router';



const CharacterTable = () => {
  // router.navigate({ to: `/character/${char.id}` });
  const search = useSearch;
  const { page = 1 } = useSearch({ from: '/' });

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page),
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;
console.log('datadatadata',data,page)
  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <table>
        <thead>
          <tr><th>Name</th><th>Gender</th><th>Status</th></tr>
        </thead>
        <tbody>
          {data.results.map((char: any) => (
            <tr key={char.id} onClick={() => router.navigate({ to: `/character/${char.id}` })}>
              <td>{char.name}</td>
              <td>{char.gender}</td>
              <td>{char.status}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <button disabled={page === 1} onClick={() => router.navigate({ search: { page: page - 1 } })}>Prev</button>
      <button disabled={!data.info.next} onClick={() => router.navigate({ search: { page: page + 1 } })}>Next</button>
    </div>
  );
};

export default CharacterTable;