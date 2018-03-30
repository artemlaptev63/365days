export default {
    data: [
        {
            id: 1,
            description: 'first post',
            image: 'assets/image1.jpg',
            test: 'detail of first post'
        },
        {
            id: 2,
            description: 'second post',
            image: 'assets/image2.jpg',
            test: 'detail of second post'
        },
        {
            id: 3,
            description: 'third post',
            image: 'assets/image3.jpg',
            test: 'detail of third post'
        },
        {
            id: 4,
            description: 'fourth post',
            image: 'assets/image5.jpg',
            test: 'detail of fourth post'
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

    // функция берет последний пост и возвращает его
    getLastItem: function() {
        return this.data[this.data.length - 1];  
    },

    // перебираем все элементы массива и записываем их в новый массиы в обратном порядке
    getReverseArray: function() {
        var reverseArray = [];
        for (var i = this.data.length - 1; i >= 0; i--) {
          reverseArray.push(this.data[i]);
        }
        return reverseArray;
    }
}