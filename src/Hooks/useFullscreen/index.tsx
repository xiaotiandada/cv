import { useFullscreen as useFullscreenAHooks } from 'ahooks';
import { MutableRefObject, useCallback, useState } from 'react';

interface Keyboard {
  lock(keyCodes?: Iterable<string>): Promise<void>;
  unlock(): void;
}

declare global {
  interface Navigator {
    // See https://wicg.github.io/keyboard-lock/
    readonly keyboard: Keyboard;
    readonly standalone: unknown;
  }
}

type UseFullscreen = {
  ref: MutableRefObject<null>;
  // ['Escape']
  keyboardLock?: Iterable<string>;
};

/**
 * useFullscreen
 * @export
 * @param {UseFullscreen} {
 *   ref,
 *   keyboardLock: ['Escape'],
 * }
 * @return {*}
 */
export default function useFullscreen({ ref, keyboardLock }: UseFullscreen) {
  // Adapt to IOS
  // Need customization css fixed support
  const [iosFullscreen, setIosFullscreen] = useState<boolean>(false);
  const [isFullscreen, { enterFullscreen, exitFullscreen }] = useFullscreenAHooks(ref, {
    onExit: () => {
      // console.log('exit')
      if (keyboardLock && 'keyboard' in navigator && 'lock' in navigator.keyboard) {
        navigator.keyboard.unlock();
      }
      setIosFullscreen(false);
    },
  });

  // handle Fullscreen
  const handleFullscreen = useCallback(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Lock
    if (isFullscreen) {
      exitFullscreen();
      if (keyboardLock && 'keyboard' in navigator && 'lock' in navigator.keyboard) {
        navigator.keyboard.unlock();
      }
    } else {
      if (keyboardLock && 'keyboard' in navigator && 'lock' in navigator.keyboard) {
        navigator.keyboard.lock(keyboardLock);
      }
      enterFullscreen();
    }
    setIosFullscreen(!iosFullscreen);
  }, [enterFullscreen, exitFullscreen, isFullscreen, iosFullscreen, keyboardLock]);

  return {
    iosFullscreen,
    isFullscreen,
    handleFullscreen,
  };
}
