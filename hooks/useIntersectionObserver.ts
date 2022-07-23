import { useEffect, useState, useRef, RefObject } from "react";

export default function useIntersectionObserver(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>{
      setIsOnScreen(entry.isIntersecting)
      console.log(entry.intersectionRatio, {entry})
    }, {threshold: 0.75}
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
