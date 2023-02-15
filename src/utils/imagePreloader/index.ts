type OnCompleteCallback = (successCount: number, failedCount: number) => void;
type OnProgressCallback = (loadedCount: number, totalCount: number) => void;

export class ImagePreloader {
  private images: HTMLImageElement[] = [];
  private loadedCount = 0;
  private successCount = 0;
  private failedCount = 0;
  private totalCount: number;
  private isComplete = false;
  private onComplete?: OnCompleteCallback;
  private onProgress?: OnProgressCallback;

  constructor(imageUrls: string[]) {
    this.totalCount = imageUrls.length;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        this.handleLoad();
      };
      img.onerror = () => {
        this.handleLoad();
      };
      this.images.push(img);
    });
  }

  private handleLoad() {
    this.loadedCount++;
    if (
      this.images[this.loadedCount - 1].complete &&
      this.images[this.loadedCount - 1].naturalHeight !== 0
    ) {
      this.successCount++;
    } else {
      this.failedCount++;
    }

    if (this.onProgress) {
      this.onProgress(this.loadedCount, this.totalCount);
    }
    if (this.loadedCount === this.totalCount && !this.isComplete) {
      this.isComplete = true;
      if (this.onComplete) {
        this.onComplete(this.successCount, this.failedCount);
      }
    }
  }

  public setOnCompleteCallback(callback?: OnCompleteCallback) {
    this.onComplete = callback;
  }

  public setOnProgressCallback(callback?: OnProgressCallback) {
    this.onProgress = callback;
  }

  public getProgress() {
    return this.totalCount > 0 ? (this.loadedCount / this.totalCount) * 100 : 0;
  }
}
