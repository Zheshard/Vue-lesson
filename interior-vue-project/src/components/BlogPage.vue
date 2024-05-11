<template>
    <div>
        <header class="header center">
        <nav class="header__nav nav">
            <a href="index.html" class="nav__logo logo">
                <img class="logo__icon" src="../assets/img/index/head/Logo.svg" alt="logo">
                <h1 class="logo__title">Interno</h1>
            </a>
            <ul class="nav__menu">
                <li><a href="index.html" class="nav__link">Home</a></li>
                <li><a href="#" class="nav__link">Project</a></li>
                <li><a href="blog.html" class="nav__link">Blog</a></li>
            </ul>
        </nav>
    </header>

    <div class="banner banner_blog">
        <img src="../assets/img/blog/banner/banner.png" alt="Banner" class="banner__backgr">
        <div class="center">
            <div class="banner_blog__heading">
                <h1 class="banner_blog__title">Articles & News</h1>
                <h2 class="banner_blog__subtitle">Home / Blog</h2>
            </div>
        </div>
    </div>

    <main class="main ">
        <section class="latest-post center">
            <h2 class="latest-post__title title-blog">Latest Post</h2>
            <div class="latest-post__post post">
                <div class="post__image">
                    <img src="../assets/img/blog/post/Image.jpeg" alt="Picture">
                </div>
                <div class="post__text-block">
                    <h3 class="post__title">
                        Low Cost Latest Invented Interior Designing Ideas
                    </h3>
                    <div class="post__text">
                        <p>
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere
                            in.Contrary to popular belief.
                        </p>
                        <p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                    </div>
                    <div class="article__row">
                        <span class="article__date">25 December,2022 </span>
                        <a href="#" class="article__link link-vector">
                            <img src="../assets/img/index/projects/Vector.svg" alt="Vector">
                        </a>
                    </div>
                </div>
            </div>
        </section>

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
    </main>

    <footer class="footer center">
        <div class="footer__left-part">
            <a href="index.html" class="footer__logo logo">
                <img class="logo__icon" src="../assets/img/index/head/Logo.svg" alt="logo">
                <h1 class="logo__title">Interno</h1>
            </a>
            <p class="footer__text">
                It is a long established fact that a reader will be distracted lookings.
            </p>
            <div class="footer__icons">
                <a href="#" class="footer_icon1">
                    <img src="../assets/img/index/footer/twitter.svg" alt="twitter.svg">
                </a>
                <a href="#" class="footer_icon2">
                    <img src="../assets/img/index/footer/in.svg" alt="in.svg">
                </a>
            </div>
        </div>

        <div class="footer__links">
            <h4 class="footer__title">Pages</h4>
            <ul class="footer__nav">
                <li><a href="index.html" class="footer__link">Home</a></li>
                <li><a href="#" class="footer__link">Project</a></li>
                <li><a href="blog.html" class="footer__link">Blog</a></li>
            </ul>
        </div>

        <div class="footer__contact">
            <h4 class="footer__title">Contact</h4>
            <span>55 East Birchwood Ave. Brooklyn, New York 11201</span>
            <span><a href="mailto:contact@interno.com">contact@interno.com</a></span>
            <span>(123) 456 - 7890</span>
        </div>
    </footer>
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
