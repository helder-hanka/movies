const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      image: 'https://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71-J6giZEQL.jpg',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      image: 'https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      image: 'https://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      image: 'https://fr.web.img5.acsta.net/pictures/18/11/27/14/25/1451897.jpg',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      image:'https://images-na.ssl-images-amazon.com/images/I/81UTs3sC5hL._AC_SL1500_.jpg',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      image:'https://www.miramax.com/media/assets/Pulp-Fiction1.png',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      image:'https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/33/19255605.jpg',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      image:'http://img.over-blog-kiwi.com/0/66/79/72/20150125/ob_2485e6_inception-7205.jpg',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      image:'https://fr.web.img5.acsta.net/pictures/14/09/11/17/05/508784.jpg',
      likes: 22,
      dislikes: 12
    },
]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))