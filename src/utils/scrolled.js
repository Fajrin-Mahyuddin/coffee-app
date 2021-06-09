const ifHeaderScrolled = (ref) => {
  if (window.scrollY > 20) {
    return ref.current.classList.add('bg-scrolled');
  }
  ref.current.classList.remove('bg-scrolled');
};

export { ifHeaderScrolled };
