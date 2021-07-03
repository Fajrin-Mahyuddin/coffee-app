const ifHeaderScrolled = (ref) => {
  if (window.scrollY > 20) {
    return ref.current?.classList?.add('bg-scrolled');
  }
  return ref.current?.classList?.remove('bg-scrolled');
};

const ifFooterPriceScrolled = (ref) => {
  const heightToTop = ref.current.getBoundingClientRect().bottom;
  const observer = new IntersectionObserver((e) => {
    console.log(e[0].intersectionRatio)
  }, {})
  observer.observe(ref.current)
  console.log("getBoundingClientRect", heightToTop);
  console.log("heigh of window", window.outerHeight);


}

export { ifHeaderScrolled, ifFooterPriceScrolled };
