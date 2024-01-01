import { useMount } from '@hooks/useMount';
import type { ComponentProps } from 'react';
import { Suspense } from 'react';

function SSRSafeSuspense({
  fallback,
  ...props
}: ComponentProps<typeof Suspense>) {
  const isMounted = useMount();

  if (isMounted) {
    return <Suspense {...props} />;
  }
  return <>{fallback}</>;
}

export default SSRSafeSuspense;
