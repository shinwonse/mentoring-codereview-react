import SSRSafeSuspense from '@components/SSRSafeSuspense';
import type { ComponentProps, ReactNode } from 'react';
import type { ErrorBoundaryPropsWithRender } from 'react-error-boundary';
import { ErrorBoundary } from 'react-error-boundary';

type ExceptFallbackErrorBoundaryAttributes = Omit<
  ErrorBoundaryPropsWithRender,
  'fallbackRender' | 'fallback' | 'FallbackComponent'
>;

type Props = {
  children: ReactNode;
  pendingFallback: ComponentProps<typeof SSRSafeSuspense>['fallback'];
  rejectedFallback: ErrorBoundaryPropsWithRender['fallbackRender'];
} & ExceptFallbackErrorBoundaryAttributes;

function AsyncBoundary({
  children,
  pendingFallback,
  rejectedFallback,
  ...errorBoundaryProps
}: Props) {
  return (
    <ErrorBoundary fallbackRender={rejectedFallback} {...errorBoundaryProps}>
      <SSRSafeSuspense fallback={pendingFallback}>{children}</SSRSafeSuspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
