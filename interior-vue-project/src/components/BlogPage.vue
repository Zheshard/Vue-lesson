<template>

    <div class="app">
            <section class="blog center">
                <h2 class="blog__title title-blog">{{title}}</h2>
                <div class="blog__articles">
                    <div v-for="(item, index) in articles" :key="index">
                        <article class="blog__article article">
                            <div class="article__picture">
                                <img :src="item.image" alt="Image1">
                                <span>{{item.span}}</span>
                            </div>
                            <h3 class="article__title">{{item.title}}</h3>
                            <div class="article__row">
                                <span class="article__date">{{item.date}}</span>
                                <a href="blog_details.html" class="article__link link-vector">
                                    <img :src="item.vector" alt="Vector">
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
    </div>

  </template>

<script>
export default {
  name: 'BlogPage',
  data () {
    return {
      title: 'Articles & News',
      articles: [
        {
          id: 0,
          image: require('../assets/img/index/blog/Image1.jpeg'),
          span: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          vector: require('../assets/img/index/projects/Vector.svg')
        },
        {
          id: 1,
          image: require('../assets/img/index/blog/Image2.jpeg'),
          span: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '26 December,2022',
          vector: require('../assets/img/index/projects/Vector.svg')
        },
        {
          id: 2,
          image: require('../assets/img/index/blog/Image3.jpeg'),
          span: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          vector: require('../assets/img/index/projects/Vector.svg')
        },
        {
          id: 3,
          image: require('../assets/img/index/blog/Image4.jpeg'),
          span: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          vector: require('../assets/img/index/projects/Vector.svg')
        },
        {
          id: 4,
          image: require('../assets/img/index/blog/Image5.jpeg'),
          span: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          vector: require('../assets/img/index/projects/Vector.svg')
        },
        {
          id: 5,
          image: require('../assets/img/index/blog/Image6.jpeg'),
          span: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          vector: require('../assets/img/index/projects/Vector.svg')
        }
      ]
    }
  }
}
</script>

  <style lang="scss">

  </style>
