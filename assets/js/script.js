/*!
 * Jeferson Luckas - Portfolio
 *
 * Copyright (c) 2021 Jeferson Lucas
 * Released under the MIT license
 * https://github.com/JefersonLucas/linkdev
 *
 */

// GitHub API 
const api = 'https://api.github.com/users/JefersonLucas';

// Asynchronous requisition
async function getAsyncAPI(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const data = getAsyncAPI(api);

data.then((response) => {
  document.getElementById('avatar').src = response.avatar_url;
  document.getElementById('name').innerHTML = response.name;
  document.getElementById('typewriter').innerHTML = response.bio;

  // Typewriter
  function typewriter(element) {
    let Arraytext = element.innerHTML.split('');
    element.innerHTML = '';
    for (let i = 0; i < Arraytext.length; i++) {
      setTimeout(() => element.innerHTML += Arraytext[i], 200 * i);
    }
  }

  let title = document.querySelector('#typewriter');
  typewriter(title);

  // Interval of Typewriter
  setInterval(() => {
    title.value = ""
    typewriter(title);
  }, 15000);
});

// Tech fly
const ulTechFly = document.querySelector("ul.tech-fly");

for (let i = 0; i < 10; i++) {

  const li = document.createElement("li");

  const random = (min, max) => Math.random() * (max - min) + min;

  const size = Math.floor(random(10, 120));
  const position = random(1, 80);
  const delay = random(5, 0.1);
  const duration = random(24, 12);

  const icon = Math.floor(random(1, 13))

  switch (icon) {
    case 1:
      li.innerHTML = '<i class="fab fa-react fa-2x"></i>';
      break;
    case 2:
      li.innerHTML = '<i class="fab fa-html5 fa-2x"></i>';
      break;
    case 3:
      li.innerHTML = '<i class="fab fa-node-js fa-2x"></i>';
      break;
    case 4:
      li.innerHTML = '<i class="fab fa-sass fa-2x"></i>';
      break;
    case 5:
      li.innerHTML = '<i class="fab fa-angular fa-2x"></i>';
      break;
    case 6:
      li.innerHTML = '<i class="fab fa-css3-alt fa-2x"></i>';
      break;
    case 7:
      li.innerHTML = '<i class="fab fa-vuejs fa-2x"></i>';
      break;
    case 8:
      li.innerHTML = '<i class="fab fa-bootstrap fa-2x"></i>';
      break;
    case 9:
      li.innerHTML = '<i class="fab fa-js-square fa-2x"></i>';
      break;
    case 10:
      li.innerHTML = '<i class="fab fa-npm fa-2x"></i>';
      break;
    case 11:
      li.innerHTML = '<i class="fab fa-git-alt fa-2x"></i>';
      break;
    case 12:
      li.innerHTML = '<i class="fab fa-code-branch fa-2x"></i>';
      break;
  }

  li.style.bottom = `-${size}px`;

  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()},${Math.random()})`;

  ulTechFly.appendChild(li);
}