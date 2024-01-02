import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '@utils/cn';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  isOpen: boolean;
};

function Modal({ children, isOpen }: Props) {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-20 bg-gray-500 opacity-40"
          datatype="open"
          forceMount
        />
        <Dialog.Content
          className={cn(
            'fixed z-50 rounded-lg top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white'
          )}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
