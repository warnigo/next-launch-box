import { type FC, type PropsWithChildren } from 'react';

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};
