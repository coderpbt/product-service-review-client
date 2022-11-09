import { useEffect } from 'react';

const useHooks = (title) => {
  useEffect(() => {
    document.title = `${title} - Fitjeous`
  },[title])
};

export default useHooks;