// ===== 3D CAROUSEL =====
(function setupCarousel3D() {
  const carousel = document.getElementById("carousel3d");
  if (!carousel) return;

  const images = carousel.getElementsByTagName("img");
  const angle = 360 / images.length;
  let currAngle = 0;

  Array.from(images).forEach((img, i) => {
    const rotateY = angle * i;
    img.style.transform = `rotateY(${rotateY}deg) translateZ(300px)`;
  });

  window.rotateCarousel = function(direction) {
    currAngle += angle * direction;
    carousel.style.transform = `rotateY(${currAngle}deg)`;
  };
})();

// ===== ACCORDION FUNCTIONALITY =====
(function setupAccordion() {
  const items = document.querySelectorAll('.accordion button');
  if (!items.length) return;

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    items.forEach(btn => btn.setAttribute('aria-expanded', 'false'));

    if (itemToggle === 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }

  items.forEach(button => button.addEventListener('click', toggleAccordion));
})();

// ===== CALENDAR WITH PRICE TRACKING =====
const calendarConfigs = [
  {
    id: 1,
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    selectedDates: [],
    pricePerDay: 67
  },
  {
    id: 2,
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    selectedDates: [],
    pricePerDay: 45
  }
];

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function updateHeader(config) {
  const span = document.getElementById(`month-year-${config.id}`);
  span.textContent = `${monthNames[config.currentMonth]} ${config.currentYear}`;
}

function updatePrice(config) {
  const total = config.selectedDates.length * config.pricePerDay;
  document.getElementById(`price-display-${config.id}`).textContent = `Total Price: $${total}`;
}

function generateCalendar(config) {
  const container = document.getElementById(`calendar-${config.id}`);
  container.innerHTML = '';

  const firstDay = new Date(config.currentYear, config.currentMonth, 1).getDay();
  const daysInMonth = new Date(config.currentYear, config.currentMonth + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    container.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement('div');
    cell.textContent = day;
    const dateStr = `${config.currentYear}-${config.currentMonth + 1}-${day}`;

    if (config.selectedDates.includes(dateStr)) {
      cell.classList.add('selected');
    }

    cell.addEventListener('click', () => {
      if (config.selectedDates.includes(dateStr)) {
        config.selectedDates = config.selectedDates.filter(d => d !== dateStr);
        cell.classList.remove('selected');
      } else {
        config.selectedDates.push(dateStr);
        cell.classList.add('selected');
      }
      updatePrice(config);
    });

    container.appendChild(cell);
  }
}

function renderAllCalendars() {
  calendarConfigs.forEach(config => {
    updateHeader(config);
    generateCalendar(config);
  });
}

document.querySelectorAll('.nav-arrow').forEach(button => {
  button.addEventListener('click', (e) => {
    const id = +button.dataset.id;
    const config = calendarConfigs.find(c => c.id === id);
    if (button.classList.contains('prev')) {
      config.currentMonth--;
      if (config.currentMonth < 0) {
        config.currentMonth = 11;
        config.currentYear--;
      }
    } else {
      config.currentMonth++;
      if (config.currentMonth > 11) {
        config.currentMonth = 0;
        config.currentYear++;
      }
    }
    updateHeader(config);
    generateCalendar(config);
  });
});

renderAllCalendars();