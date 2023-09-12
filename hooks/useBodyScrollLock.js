import React, {useCallback} from 'react';

export const UseBodyScrollLock = () => {

  const lockBodyScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, [])

  const unlockBodyScroll = useCallback(() => {
    document.body.style.overflow = '';
  }, [])

  return {
    lockBodyScroll, unlockBodyScroll
  }
};

export default UseBodyScrollLock;