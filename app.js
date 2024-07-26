
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  const navbar = document.querySelector('.navbar');
  const navbarUl = document.querySelector('.navbar__ul');
  
  navbar.addEventListener('click', () => {
    navbarUl.classList.toggle('navbar__ul--active');
  });
  
  const projects = [
    {
      name: 'Chess Board',
      link: 'https://github.com/akash-9606/Assignment/tree/main/Chess%20Board'
    },
    {
      name: 'Count Down',
      link: 'https://github.com/akash-9606/Assignment/tree/main/CountDown'
    },
    {
      name: 'Github Repository',
      link: 'https://github.com/akash-9606/Assignment/tree/main/Repositary'
    },
    {
      name: 'Slider',
      link: 'https://github.com/akash-9606/Assignment/tree/main/Slider'
    },
    {
      name: 'Todo List',
      link: 'https://github.com/akash-9606/Assignment/tree/main/Todo%20List'
    },
    {
      name: 'Calculator',
      link: 'https://github.com/akash-9606/Assignment/tree/main/Calculator'
    },
    {
      name: 'Organic ECom',
      link: 'https://github.com/akash-9606/Assignment/tree/main/Organic'
    }
  ];
  
  document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
      window.open(projects[index].link, '_blank');
    });
  });
  