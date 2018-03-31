export default {
    data: [
        {
            id: 1,
            description: '1',
            image: 'assets/image1.jpg',
            test: 'detail of first post'
        },
        {
            id: 2,
            description: '2',
            image: 'assets/image2.jpg',
            test: 'detail of second post'
        },
        {
            id: 3,
            description: '3',
            image: 'assets/image3.jpg',
            test: 'detail of third post'
        },
        {
            id: 4,
            description: '4',
            image: 'assets/image5.jpg',
            test: 'detail of fourth post'
        },
        {
            id: 5,
            description: '5',
            image: 'assets/image1.jpg',
            test: 'detail of first post'
        },
        {
            id: 6,
            description: '6',
            image: 'assets/image2.jpg',
            test: 'detail of second post'
        },
        {
            id: 7,
            description: '7',
            image: 'assets/image3.jpg',
            test: 'detail of third post'
        },
        {
            id: 8,
            description: '8',
            image: 'assets/image5.jpg',
            test: 'detail of fourth post'
        },
        {
            id: 9,
            description: '9',
            image: 'assets/image1.jpg',
            test: 'detail of first post'
        },
        {
            id: 10,
            description: '10',
            image: 'assets/image2.jpg',
            test: 'detail of second post'
        },
        {
            id: 11,
            description: '11',
            image: 'assets/image3.jpg',
            test: 'detail of third post'
        },
        {
            id: 12,
            description: '12',
            image: 'assets/image5.jpg',
            test: 'detail of fourth post'
        },
        {
            id: 13,
            description: '13',
            image: 'assets/image1.jpg',
            test: 'detail of first post'
        },
        {
            id: 14,
            description: '14',
            image: 'assets/image2.jpg',
            test: 'detail of second post'
        },
        {
            id: 15,
            description: '15',
            image: 'assets/image3.jpg',
            test: 'detail of third post'
        },
        {
            id: 16,
            description: '16',
            image: 'assets/image5.jpg',
            test: 'detail of fourth post'
        },
        {
            id: 17,
            description: '17',
            image: 'assets/image1.jpg',
            test: 'detail of first post'
        },
        {
            id: 18,
            description: '18',
            image: 'assets/image2.jpg',
            test: 'detail of second post'
        },
        {
            id: 19,
            description: '19',
            image: 'assets/image3.jpg',
            test: 'detail of third post'
        },
        {
            id: 20,
            description: '20',
            image: 'assets/image5.jpg',
            test: 'detail of fourth post'
        },
        {
            id: 21,
            description: '21',
            image: 'assets/image1.jpg',
            test: 'detail of first post'
        },
        {
            id: 22,
            description: '22',
            image: 'assets/image2.jpg',
            test: 'detail of second post'
        },
        {
            id: 23,
            description: '23',
            image: 'assets/image3.jpg',
            test: 'detail of third post'
        },
        {
            id: 24,
            description: '24',
            image: 'assets/image5.jpg',
            test: 'detail of fourth post'
        },
        {
            id: 25,
            description: '25',
            image: 'assets/image1.jpg',
            test: 'detail of first post'
        },
        {
            id: 26,
            description: '26',
            image: 'assets/image2.jpg',
            test: 'detail of second post'
        },
        {
            id: 27,
            description: '27',
            image: 'assets/image3.jpg',
            test: 'detail of third post'
        },
        {
            id: 28,
            description: '28',
            image: 'assets/image5.jpg',
            test: 'detail of fourth post'
        },
        {
            id: 29,
            description: '29',
            image: 'assets/image1.jpg',
            test: 'detail of first post'
        },
        {
            id: 30,
            description: '30',
            image: 'assets/image2.jpg',
            test: 'detail of second post'
        },
        {
            id: 31,
            description: '31',
            image: 'assets/image3.jpg',
            test: 'detail of third post'
        },
        {
            id: 32,
            description: '32',
            image: 'assets/image5.jpg',
            test: 'detail of fourth post'
        },
        {
            id: 33,
            description: '33',
            image: 'assets/image1.jpg',
            test: 'detail of first post'
        },
        {
            id: 34,
            description: '34',
            image: 'assets/image2.jpg',
            test: 'detail of second post'
        },
        {
            id: 35,
            description: '35',
            image: 'assets/image3.jpg',
            test: 'detail of third post'
        },
        {
            id: 36,
            description: '36',
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

    // перебираем все элементы массива и записываем их в новый массиы в обратном порядке, возвращаем по 10 item
    getReverseArray: function(num) {
        var reverseArray = [];
        for (var i = this.data.length - 1; i >= 0; i--) {
          reverseArray.push(this.data[i]);
        }
        var showArray = [];
        if (num > this.data.length) {
            num = num - (num - this.data.length);
        }
        for (var j = 0; j < num; j++) {
            showArray.push(reverseArray[j]);
        }
        return showArray;
    }
}