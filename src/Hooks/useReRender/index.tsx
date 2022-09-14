import { useEffect, useState } from 'react';

export default function useReRender<T>(deps: T) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, [deps]);

  return { visible };
}
