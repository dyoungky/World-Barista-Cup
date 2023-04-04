// Fetch data
fetch("../data.json")
  .then((res) => res.json())
  .then(function (data) {
    let postTemplate = `<div class="post-item" id="modal">
                <img class="post-img" src="" />
                <div class="post-content">
                  <h2></h2>
                  <p class="published-date"></p>
                  <p class="content"></p>
                  <button class="btn-action-white">Read more</button>
                  </div>
                </div>`;

    // Main page post
    for (let i = 0; i < 4; i++) {
      document.querySelector(".main-post").insertAdjacentHTML("afterbegin", postTemplate);
    }

    // Post content
    for (let i = 0; i < 4; i++) {
      document.querySelectorAll(".post-img")[i].src = data.posts[i].imgUrl;
      document.querySelectorAll(".post-content h2")[i].innerHTML = data.posts[i].title;
      document.querySelectorAll(".published-date")[i].innerHTML = `Published ${data.posts[i].date}`;
      document.querySelectorAll(".content")[i].innerHTML = data.posts[i].content;
    }

    // Scoreboard
    let text = "";
    for (let i = 0; i < data.score.length; i++) {
      text += `${data.score[i]["year"]}: ${data.score[i]["nationality"]} </br>`;
    }
    document.querySelector(".score-info").innerHTML = text;

    // Sponsors
    data.sponsorsImg.forEach(function (img, i) {
      let sponsors = `<div><img src="./assets/images/sponsors/sponsor-${i + 1}.png"></div>`;
      document.querySelector(".sponsors-imgs").insertAdjacentHTML("beforeEnd", sponsors);
    });

    // Instagram feed
    data.instagramImg.forEach(function (img, i) {
      let instagram = `<div><img src="./assets/images/instagram-feed/instagram-image-${i + 1}.png"></div>`;
      document.querySelector(".instagram-imgs").insertAdjacentHTML("beforeEnd", instagram);
    });

    // Modal
    let body = document.querySelectorAll("body");
    function modal() {
      for (let i = 0; i < data.posts.length; i++) {
        let modal = `
          <button class="close-btn"><i class="fa-solid fa-xmark"></i></button>
          <img src="${data.posts[i].imgUrl}">
          <div class="modal-contents">
          <h1>${data.posts[i].title}</h1>
          <h4 class="published-date">Published ${data.posts[i].date}</h4>
          <p>${data.posts[i].content.replaceAll("ㅤ", "</br></br>")}</p>
          </div>`;
        $(".post-item")
          .eq(i)
          .on("click", function (e) {
            console.log("---");
            document.querySelector(".white-bg").innerHTML = "";
            $(".black-bg").addClass("show-modal");
            $(".white-bg").addClass("fadeInUp");
            $(".white-bg").append(modal);
            $(body).css({ overflow: "hidden" });
          });
      }

      // Close modal
      $(".black-bg").on("click", function (e) {
        let target = e.target;
        let blackBg = document.querySelector(".black-bg");
        let closeBtn = document.querySelector(".close-btn");
        let closeIBtn = document.querySelector(".fa-xmark");
        if (target == blackBg || target == closeBtn || target == closeIBtn) {
          $(".black-bg").removeClass("show-modal");
          $(".white-bg").removeClass("fadeInUp");
          $(body).css({ overflow: "scroll" });
        }
      });
    }

    modal();

    // Search
    console.log(data.posts);
    const postTitleArr = data.posts.map((row) => row.title);
    console.log(postTitleArr);
    const searchFilter = (data, keyword) => {
      return postTitleArr.filter((title) => title.includes(keyword));
    };

    const searchResult = document.querySelector(".search-result");
    //
    const searchList = document.querySelector(".search-list");
    //
    const input = document.querySelector(".input");

    input.addEventListener("keyup", (e, i) => {
      const keyword = e.target.value;
      const upper = keyword.toUpperCase();
      let filteredContent = searchFilter(post, keyword);

      if (keyword == "" || filteredContent == "") {
        searchList.innerHTML = `<li class="result-title">No result</li>`;
      } else {
        searchResult.classList.remove("hide");
        posts.forEach((item, i) => {
          return (resultDate = item.date);
        });

        posts.forEach((item, i) => {
          return (resultContent = item.content);
        });
        searchList.innerHTML = filteredContent.map((post) => `<ul><li class="result-title">${post}</li><li class="result-date">Published ${resultDate}</li><li class="result-content">${resultContent}</li></ul>`).join("");
      }
    });
  })
  .catch(function (error) {});

// Main images
const myCarouselElement = document.querySelector("#myCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
});

// Posts
