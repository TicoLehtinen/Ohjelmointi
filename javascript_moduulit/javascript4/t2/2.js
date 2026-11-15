'use strict';

const target = document.querySelector('#target');
const items = ['First item', 'Second item', 'Third item'];

for (const text of items) {
  const li = document.createElement('li');
  li.textContent = text;
  if (text === 'Second item') {
    li.classList.add('my-item');
  }
  target.appendChild(li);
}
