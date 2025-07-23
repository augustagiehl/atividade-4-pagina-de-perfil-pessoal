// Seleciona todas as sections que têm um atributo id (ex: <section id="perfil">)
const sections = document.querySelectorAll("section[id]");

// Seleciona todos os links do menu (ex: <a href="#perfil">)
const navLinks = document.querySelectorAll(".header-items__item a");

// Toda vez que rolar a página, executa essa função:
window.addEventListener("scroll", () => {
  let current = ""; // Vai guardar o id da seção que está visível no momento

  // Para cada seção, verifica se o topo dela já passou pelo topo da tela
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Offset para ajustar altura do header (mude se precisar)
    if (pageYOffset >= sectionTop) {
      // Se já rolou até esse ponto, salva o id da seção atual
      current = section.getAttribute("id");
    }
  });

  // Para cada link do menu:
  navLinks.forEach(link => {
    link.classList.remove("active"); // Remove a classe active de todos primeiro
    // Se o href do link é igual ao id da seção atual, adiciona a classe active
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) { // Quando rolar mais de 10px
    header.classList.add('glass-header');
  } else {
    header.classList.remove('glass-header');
  }
});

// Anima barras só quando a seção aparece
document.addEventListener('DOMContentLoaded', function () {
  const fills = document.querySelectorAll('.skill-bar .fill');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.width;
        fill.classList.add('active');
        observer.unobserve(fill); // Só anima uma vez!
      }
    });
  }, { threshold: 0.6 }); // Só dispara quando 60% do elemento está visível

  fills.forEach(fill => {
    fill.style.width = "0";
    observer.observe(fill);
  });
});


// Menu Hamburguer Responsivo
const menuBtn = document.getElementById('menuBtn');
const navList = document.querySelector('.header-items');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navList.classList.toggle('show');
});
// Esconde menu ao clicar num link
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navList.classList.remove('show');
  });
});


// Só roda se o canvas existir na tela (mobile)
if (document.getElementById('pieChart')) {
  const ctx = document.getElementById('pieChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['HTML/CSS', 'JS', 'Figma', 'UI/UX', 'PHP'],
      datasets: [{
        data: [90, 80, 85, 80, 60],
        backgroundColor: [
          '#FF5FCF', '#AD28F4', '#C8A1DE', '#8D62A9', '#FFF0F6'
        ]
      }]
    },
    options: {
      animation: {
        animateRotate: true, // já está ativo
        animateScale: true,  // idem
        duration: 1800,
        easing: 'easeInOutElastic',
      },
      elements: {
        arc: {
          hoverOffset: 18, // fatia "salta" ao passar o mouse
          borderWidth: 1.5,
          borderColor: '#fff',
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#ffff',
            padding: 18,
            boxWidth: 32,
            boxHeight: 14,
            font: {
              size: 16,
              weight: '200'

            }
          }
        }
      },
      elements: {
        arc: {
          borderWidth: 1,
          borderColor: "#fff"
        }
      }
    }

  });
}

