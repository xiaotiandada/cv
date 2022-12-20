function maxArea(height: number[]): number {
  let result = 0;
  const len = height.length;

  for (let i = 0, j = len - 1; i < j; ) {
    const minHeight = height[i] < height[j] ? height[i++] : height[j--];
    result = Math.max(result, (j - i + 1) * minHeight);
  }

  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
