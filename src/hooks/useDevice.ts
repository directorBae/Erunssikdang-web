const useDevice = () => {
  if (window.innerWidth < 480) {
    return "mobile";
  } else if (window.innerWidth < 1024) {
    return "tablet";
  }
  return "desktop";
};

export default useDevice;
