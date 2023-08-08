const breakpoints: any = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
};

export const media = (n: 'sm' | 'md' | 'lg' | 'xl' | 'xxl') => {
  const bpArray = Object.keys(breakpoints).map((key) => [key, breakpoints[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};
