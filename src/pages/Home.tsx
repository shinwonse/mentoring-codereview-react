import ExhibitionList from '@components/ExhibitionList';
import FavoriteList from '@components/FavoriteList';
import Layout from '@components/Layout';
import { useSearchParams } from 'react-router-dom';

export function Home() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') ?? 'list';

  return (
    <Layout>
      {tab === 'list' && <ExhibitionList />}
      {tab === 'favorite' && <FavoriteList />}
    </Layout>
  );
}
