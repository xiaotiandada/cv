# ImagePreloader

这是一个使用 ImagePreloader 类的实例，它会预加载给定的图片资源，并在预加载完成后触发回调函数。在此实例中，我们设置了两个回调函数：onComplete 和 onProgress。

<code src="./demo/index.tsx" />

<br />

```typescript
const imageUrls = [
  'https://example.com/image1.png',
  'https://example.com/image2.png',
  'https://example.com/image3.png',
  'https://example.com/image4.png',
  'https://example.com/image5.png',
];

const loader = new ImagePreloader(imageUrls);

loader.setOnCompleteCallback((successCount, failedCount) => {
  console.log(`Successfully loaded ${successCount} images, ${failedCount} images failed to load.`);
});

loader.setOnProgressCallback((loadedCount, totalCount) => {
  const progress = loader.getProgress();
  console.log(`Loading images... ${progress.toFixed(2)}%`);
});
```
