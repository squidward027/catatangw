
document.querySelectorAll('button').forEach(a =>
  a.addEventListener('mousemove', function() {
  cursor.classList.add('hover-cursor');
    }));

document.querySelectorAll('button').forEach(a =>
  a.addEventListener('mouseleave', function() {
    cursor.classList.remove('hover-cursor');
      }));

//

document.querySelectorAll('a').forEach(a =>
  a.addEventListener('mousemove', function() {
  cursor.classList.add('hover-cursor-a');
    }));

document.querySelectorAll('a').forEach(a =>
  a.addEventListener('mouseleave', function() {
    cursor.classList.remove('hover-cursor-a');
      }));
