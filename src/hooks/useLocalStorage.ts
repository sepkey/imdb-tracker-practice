import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IWatchedMovie } from '../types/type';

type LocalStorageStateHook<T> = [T, Dispatch<SetStateAction<T>>];

export function useLocalStorage(
  initialState: IWatchedMovie[],
  key: string
): LocalStorageStateHook<IWatchedMovie[]> {
  const [value, setValue] = useState<IWatchedMovie[]>(function () {
    const storageValue = localStorage.getItem(key)!;
    return storageValue ? JSON.parse(storageValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );

  return [value, setValue];
}
