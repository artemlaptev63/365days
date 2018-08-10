export default {
  data: [
    {
      id: 1,
      country: "",
      source: "",
      link: "",
      years: "",
      description: "",
      autor: "Chris Orwig",
      quote: "",
      mainBannerTitle: "", //перед названием нужна запятая
      mainImage: "../assets/post1/girl-swimming.jpg",
      image1: "post1/blond-girl.jpg",
      image2: "post1/blue-eyed-man.jpg",
      image3: "post1/brutal-man.jpg",
      images: [
        "post1/blond-girl.jpg",
        "post1/blue-eyed-man.jpg",
        "post1/brutal-man.jpg",
        "post1/curly-man.jpg",
        "post1/girl-in-hat.jpeg",
        "post1/girl-swimming.jpg",
        "post1/guy-in-scarf.jpg",
        "post1/guy-in-sweatshirt.jpg",
        "post1/guy-with-beard.jpg",
        "post1/man-in-hat.jpg",
        "post1/old-guy-dark.jpg",
        "post1/old-man.jpg",
        "post1/smiling-man.jpg",
        "post1/young-girl.jpg"
      ]
    },
    {
      id: 2,
      country: "",
      source: "",
      link: "",
      years: "",
      description: "",
      autor: "Matthew Chimera",
      quote: "",
      mainBannerTitle: "", //перед названием нужна запятая
      mainImage: "..assets/post2/sunset.jpg",
      image1: "post2/bow-bridge-snow.jpg",
      image2: "post2/briant-park-rain.jpg",
      image3: "post2/east-42-rain.jpg",
      images: [
        "post2/bow-bridge-snow.jpg",
        "post2/briant-park-rain.jpg",
        "post2/east-42-rain.jpg",
        "post2/reflection.jpg",
        "post2/skyline-purple.jpg",
        "post2/skyline-sunset.jpg",
        "post2/statue-of-liberty-fog.jpg",
        "post2/sunset.jpg"
      ]
    },
    {
      id: 3,
      country: "",
      source: "",
      link: "",
      years: "",
      description: "",
      autor: "Elizabeth Gadd",
      quote: "",
      mainBannerTitle: "", //перед названием нужна запятая
      mainImage: "..assets/post3/girl-on-bed.jpg",
      image1: "post3/black-boys.jpg",
      image2: "post3/cabecera-papua-fin.jpg",
      image3: "post3/three-in-black.jpg",
      images: [
        "post3/girl-on-bed.jpg",
        "post3/black-boys.jpg",
        "post3/cabecera-papua-fin.jpg",
        "post3/three-in-black.jpg",
        "post3/woman-in-sea.jpg",
        "post3/women-carrying.jpg",
        "post3/women-in-blue-and-white.jpg",
        "post3/women-working.jpg"
      ]
    },
    {
      id: 4,
      country: "",
      source: "",
      link: "",
      years: "",
      description: "",
      autor: "Matilde Gattoni",
      quote: "",
      mainBannerTitle: "", //перед названием нужна запятая
      mainImage: "..assets/post4/woman-and-ducks.jpg",
      image1: "post4/woman-waterfall.jpg",
      image2: "post4/woman-on-rocks.jpg",
      image3: "post4/woman-closed-eyes.jpg",
      images: [
        "post4/fall-fog.jpg",
        "post4/mountains-lake.jpg",
        "post4/rocks.jpg",
        "post4/woman-and-ducks.jpg",
        "post4/woman-and-fog.jpg",
        "post4/woman-closed-eyes.jpg",
        "post4/woman-on-rocks.jpg",
        "post4/woman-waterfall.jpg"
      ]
    }
  ],

  // функция принимает номер поста и выводит нужный на Detail.js
  getItem: function(id) {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id.toString() === id.toString()) {
        return this.data[i];
      }
    }
    return null;
  },

  // функция принимает на вход номер поста и номер фотографии которую нужно отобразить в слайдере ViewPhotos.js
  getImage: function(id, numberOfPhoto) {
    var post;
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id.toString() === id.toString()) {
        post = this.data[i];
      }
    }
    return post.images[numberOfPhoto];
  },

  // функция берет последний пост и возвращает его
  getLastItem: function() {
    return this.data[this.data.length - 1];
  },

  // перебираем все элементы массива и записываем их в новый массив в обратном порядке, возвращаем по 10 постов
  getReverseArray: function(num) {
    // записываем в новый массив явно
    var reverseArray = [];
    for (var i = this.data.length - 1; i >= 0; i--) {
      reverseArray.push(this.data[i]);
    }
    // записываем в showArray посты до num(нужное кол-во постов)
    var showArray = [];
    if (num > this.data.length) {
      num = num - (num - this.data.length);
    }
    for (var j = 0; j < num; j++) {
      showArray.push(reverseArray[j]);
    }
    return showArray;
  },

  // получаем элементы пагинации от min до max
  getPagination: function(min, max) {
    if (max < 5) {
      min = 0;
    }
    var paginationArray = [];
    for (var i = min; i <= max; i++) {
      if (!this.data[i]) {
        break;
      }
      paginationArray.push(this.data[i]);
    }
    return paginationArray;
  }
};
