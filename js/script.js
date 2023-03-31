const posts = [
  {
    id: '1',
    title: 'Wonderful Copenhagen 2021',
    imgUrl: '../assets/images/posts/Post thumbnail-4.png',
    date: '12/07/2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '2',
    title: 'The most expensive coffee on the market',
    imgUrl: '../assets/images/posts/Post thumbnail-1.png',
    date: '12/07/2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3',
    title: '10 type of coffee beans you need to know',
    imgUrl: '../assets/images/posts/Post thumbnail-2.png',
    date: '12/07/2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '4',
    title: 'Challenge your barista skills to the max',
    imgUrl: '../assets/images/posts/Post thumbnail-3.png',
    date: '12/07/2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '5',
    title: 'Wondeddrful Copenhagen 2021',
    imgUrl: '../assets/images/posts/Post thumbnail-4.png',
    date: '12/07/2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '6',
    title: 'The most expensive coffee on the market',
    imgUrl: '../assets/images/posts/Post thumbnail-3.png',
    date: '12/07/2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '7',
    title: '10 type of coffee beans you need to know',
    imgUrl: '../assets/images/posts/Post thumbnail-2.png',
    date: '12/07/2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '8',
    title: 'Challenge your barista skills to the max',
    imgUrl: '../assets/images/posts/Post thumbnail-1.png',
    date: '12/07/2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

// Posts
let post = `<div class="post-item">
                            <img class="post-img" src="./assets/images/posts/Post thumbnail-4.png" />
                            <div class="post-content">
                                <h2>Practice</h2>
                                <p class="published-date">Published 12</p>
                                <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.</p>
                                <button class="btn-action-white">Read more</button>
                            </div>
                        </div>`;

for (let i = 0; i < 3; i++) {
  document.querySelector('.main-post').insertAdjacentHTML('afterBegin', post);
}
for (let i = 0; i < 4; i++) {
  document.querySelectorAll('.post-img')[i].src = posts[i].imgUrl;
  document.querySelectorAll('.post-content h2')[i].innerHTML = posts[i].title;
  document.querySelectorAll('.published-date')[i].innerHTML = `Published ${posts[i].date}`;
  document.querySelectorAll('.content')[i].innerHTML = posts[i].content;
}
let pageCount = 0;
document.querySelector('.page-next').addEventListener('click', function () {
  pageCount++;
  if (pageCount == 1) {
    document.querySelector('.page-num').innerHTML = 2;
  } else {
    document.querySelector('.page-num').innerHTML = 3;
  }
});

//Scoreboard

// Modal
// $('.post-item').on('click', function () {
//   $('.black-bg').addClass('show-modal');
// });
