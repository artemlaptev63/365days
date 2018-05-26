export default {
    data: [
        {
            id: 1,
            country: 'France',
            source: 'Wikipedia',
            link: 'https://en.wikipedia.org/wiki/Henri_Cartier-Bresson',
            years: '1908-2004',
            description: 'Henri Cartier-Bresson was a French humanist photographer considered a master of candid photography, and an early user of 35 mm film. He pioneered the genre of street photography, and viewed photography as capturing a decisive moment. His work has influenced many photographers. Cartier-Bresson acquired the Leica camera with 50 mm lens in Marseilles that would accompany him for many years. The anonymity that the small camera gave him in a crowd or during an intimate moment was essential in overcoming the formal and unnatural behavior of those who were aware of being photographed. He enhanced his anonymity by painting all shiny parts of the Leica with black paint. The Leica opened up new possibilities in photography—the ability to capture the world in its actual state of movement and transformation. Restless, he photographed in Berlin, Brussels, Warsaw, Prague, Budapest and Madrid.',
            autor: 'Henri Cartier-Bresson',
            quote: 'The photograph itself doesn’t interest me. I want only to capture a minute part of reality',
            mainBannerTitle: '', //перед названием нужна запятая
            mainImage: '../assets/post1/albert-camus-paris-1944.jpg',
            image1: 'post1/alicante-spain-1932.jpg',
            image2: 'post1/gare-saint-lazare-1932.jpg',
            image3: 'post1/football-game-1960.jpg',
            images: [
                'post1/albert-camus-paris-1944.jpg',
                'post1/alicante-spain-1932.jpg',
                'post1/auto-race-1966.jpg',
                'post1/football-game-1960.jpg',
                'post1/gahndi-1948.jpg',
                'post1/gare-saint-lazare-1932.jpg',
                'post1/hamburg-1952-1953. .jpg',
                'post1/hyères-1932.jpg',
                'post1/jean-paul-sartre-1946..jpg',
                'post1/lenin-tomb-1954.jpg',
                'post1/model-prison-1975.jpg',
                'post1/naples-1960.jpg',
                'post1/near-strasbourg-1944.jpg',
                'post1/new-york-1960.jpg',
                'post1/roman-amphitheatre-valencia-1933.jpg',
                'post1/romania-1975.jpg',
                'post1/simone-de-beauvoir-1946.jpg',
                'post1/truman-capote-new-orleans-1947.jpg'
            ]
        }
    ],


    // функция принимает номер поста и выводит нужный на Detail.js
    getItem: function (id) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].id.toString() === id.toString()) {
                return this.data[i];
            }
        }
        return null;
    },


    // функция принимает на вход номер поста и номер фотографии которую нужно отобразить в слайдере ViewPhotos.js
    getImage: function (id, numberOfPhoto) {
        var post;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].id.toString() === id.toString()) {
                post = this.data[i];
            }
        }
        return post.images[numberOfPhoto];
    },


    // функция берет последний пост и возвращает его
    getLastItem: function () {
        return this.data[this.data.length - 1];
    },


    // перебираем все элементы массива и записываем их в новый массив в обратном порядке, возвращаем по 10 постов
    getReverseArray: function (num) {
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
    getPagination: function (min, max) {
        if (max < 5) {
            min = 0
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
}