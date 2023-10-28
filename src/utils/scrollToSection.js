const scrollToSection = (id) => {
  console.log('Cliquei na bagaça');

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default scrollToSection;
