'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export function RTProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
