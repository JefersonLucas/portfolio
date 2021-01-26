/*!
 * Jeferson Luckas - Portfolio
 *
 * Copyright (c) 2021 Jeferson Lucas
 * Released under the MIT license
 * https://github.com/JefersonLucas/portfolio/blob/master/LICENSE.md
 *
 */

// GitHub API 
const api = 'https://api.github.com/users/JefersonLucas';

// Function with asynchronous request
async function getAsyncAPI(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

// JSOM passed to a variable data
const data = getAsyncAPI(api);

// JSOM response passed to HTML elements
data.then((response) => {
  document.getElementById('avatar').src = response.avatar_url;
  document.getElementById('name').innerHTML = response.name;
  document.getElementById('bio').innerHTML = response.bio;

  // Typewriter
  function typewriter(element) {
    let Arraytext = element.innerHTML.split('');
    element.innerHTML = '';
    for (let i = 0; i < Arraytext.length; i++) {
      setTimeout(() => element.innerHTML += Arraytext[i], 200 * i);
    }
  }
  // Selecting the title element
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

for (let i = 0; i < 13; i++) {

  // Create element li
  const li = document.createElement("li");

  // Function random
  const random = (min, max) => Math.random() * (max - min) + min;

  // Random size, position, delay and duration
  const size = Math.floor(random(10, 120));
  const position = random(1, 80);
  const delay = random(5, 0.1);
  const duration = random(24, 12);

  // Icon
  const icon = i;
  // 
  const faIcon = icon => `<i class="fab fa-${icon} fa-2x"></i>`;

  // Passing the icons to the li
  switch (icon) {
    case 1:
      li.innerHTML = faIcon("react");
      break;
    case 2:
      li.innerHTML = faIcon("html5");
      break;
    case 3:
      li.innerHTML = faIcon("node-js");
      break;
    case 4:
      li.innerHTML = faIcon("sass");
      break;
    case 5:
      li.innerHTML = faIcon("angular");
      break;
    case 6:
      li.innerHTML = faIcon("css3-alt");
      break;
    case 7:
      li.innerHTML = faIcon("vuejs");
      break;
    case 8:
      li.innerHTML = faIcon("bootstrap");
      break;
    case 9:
      li.innerHTML = faIcon("js-square");
      break;
    case 10:
      li.innerHTML = faIcon("npm");
      break;
    case 11:
      li.innerHTML = faIcon("git-alt");
      break;
    case 12:
      li.innerHTML = faIcon("gulp");
      break;
  }
  // li Style
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()},${Math.random()})`;

  // Ul child elements being injected
  ulTechFly.appendChild(li);
}