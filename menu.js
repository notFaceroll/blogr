document.addEventListener('click', function (event) {
  const isDropdownBtn = event.target.matches('[data-dropdown-btn]');
  // if we are clicking inside the DD content
  // and it isn't the button
  if (!isDropdownBtn && event.target.closest('[data-dropdown]') !== null)
    return;

  let currentDropdown;
  // toggle visibility only on the current
  if (isDropdownBtn) {
    currentDropdown = event.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  }
  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});

const btn = document.querySelector('#icon');
const nav = document.querySelector('.nav');
document.querySelector('#menu').addEventListener('click', function (event) {
  nav.classList.toggle('show');
  btn.classList.toggle('fa-xmark');
  btn.classList.toggle('fa-bars');
});
