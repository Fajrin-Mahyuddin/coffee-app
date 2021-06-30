const ifHeaderScrolled = (ref) => {
  if (window.scrollY > 20) {
    return ref.current?.classList?.add('bg-scrolled');
  }
  return ref.current?.classList?.remove('bg-scrolled');
};

export { ifHeaderScrolled };
