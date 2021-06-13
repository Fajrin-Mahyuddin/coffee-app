const toggleSidebar = (sidebar, content) => {
  sidebar.current.classList.toggle('open');
  content.current.classList.toggle('dark');
};

const resetToggle = (sidebar, content) => {
  sidebar.current.classList.remove('open');
  content.current.classList.remove('dark');
};

const toggleAction = (elementToggle, content) => {
  elementToggle.current.classList.toggle('open');
  content.current.classList.toggle('dark');
};

export { toggleSidebar, resetToggle, toggleAction };
