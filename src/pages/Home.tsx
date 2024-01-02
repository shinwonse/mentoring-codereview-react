import AsyncBoundary from '@components/AsyncBoundary';
import ExhibitionList from '@components/ExhibitionList';
import FavoriteList from '@components/FavoriteList';
import Layout from '@components/Layout';
import { useSearchParams } from 'react-router-dom';

function LoadingFallback() {
  return <div>loading</div>;
}
function ErrorFallback({ error }: { error: Error }) {
  return <div>error: {error.message}</div>;
}

export function Home() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') ?? 'list';

  return (
    <Layout bottomNavigator>
      {tab === 'list' && (
        <AsyncBoundary
          pendingFallback={<LoadingFallback />}
          rejectedFallback={(props) => <ErrorFallback {...props} />}
        >
          <ExhibitionList />
        </AsyncBoundary>
      )}
      {tab === 'favorite' && <FavoriteList />}
    </Layout>
  );
}
