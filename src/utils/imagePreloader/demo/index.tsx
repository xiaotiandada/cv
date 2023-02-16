import React, { useEffect, useState } from 'react';
import { ImagePreloader } from '../index';
import Log from '../../../components/Log';

const App: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const imageUrls = [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      'https://example.com/image2.png',
      'https://example.com/image3.png',
      'https://example.com/image4.png',
      'https://example.com/image5.png',
    ];

    const loader = new ImagePreloader(imageUrls);

    loader.setOnCompleteCallback((successCount, failedCount) => {
      const _log = `Successfully loaded ${successCount} images, ${failedCount} images failed to load.`;
      console.log(_log);

      setLogs((data) => data.concat(_log));
    });

    loader.setOnProgressCallback((loadedCount, totalCount) => {
      const progress = loader.getProgress();
      const _log = `Loading images... ${progress.toFixed(
        2,
      )}%, loadedCount: ${loadedCount}, totalCount: ${totalCount}`;
      console.log(_log);

      setLogs((data) => data.concat(_log));
    });
  }, []);

  return (
    <div>
      <Log logs={logs} />
    </div>
  );
};

export default App;
