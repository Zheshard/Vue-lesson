<template>
    <div class="details center">
            <div>
                <div class="details__content" v-for="(item, index) in filterArticles" :key="index">
                    <article class="content__article-content article-content">
                        <h2 class="article-content__title">{{item.title}}</h2>
                        <div class="article-content__image">
                            <img :src="item.image" alt="Phtoto">
                        </div>
                        <p class="article-content__date">
                            <span>{{item.date}}</span>
                            <span>{{item.link}}</span>
                        </p>
                        <div class="article-content__text" v-for="(paragraph, index) in item.text" :key="index">
                            <p class="article-content__paragraph">{{paragraph}}</p>
                        </div>
                        <div class="article-content__quotes">
                            <img src="../assets/img/blog_details/“.svg" alt="">
                            <blockquote>{{item.quotes}}</blockquote>
                        </div>
                    </article>
                </div>
            </div>

            <div>
                <aside class="details__tags tags">
                    <h3 class="tags__title">Tags</h3>
                    <div class="tags__select" v-for="(tag, index) in tags" :key="index">
                        <div class="tags__btn">
                            <input :id="tag.tagName" type="radio" name="radio" :value="tag.tagName" @click="filteredListArticles(tag.tagName)">
                            <label :for="tag.tagName">{{tag.tagName}}</label>
                        </div>
                    </div>
                </aside>
            </div>
    </div>
  </template>

<script>
export default {
  name: 'BlogDetails',
  data () {
    return {
      filterArticles: [
        {
          tag: 'Kitchen',
          title: 'Let’s Get Solution for Building Construction Work',
          image: require('../assets/img/blog_details/Photo.jpeg'),
          date: '26 December,2022',
          link: 'Interior / Home / Decore',
          text: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'],
          quotes: 'The details are not the details. They make the design.'
        },
        {
          tag: 'Bedroom',
          title: 'Bedroom',
          image: require('../assets/img/blog_details/Photo.jpeg'),
          date: '26 December,2022',
          link: 'Interior / Home / Decore',
          text: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'],
          quotes: 'The details are not the details. They make the design.'
        }
      ],
      articles: [
        {
          tag: 'Kitchen',
          title: 'Let’s Get Solution for Building Construction Work',
          image: require('../assets/img/blog_details/Photo.jpeg'),
          date: '26 December,2022',
          link: 'Interior / Home / Decore',
          text: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
            'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'],
          quotes: 'The details are not the details. They make the design.'
        },
        {
          tag: 'Bedroom',
          title: 'Bedroom',
          image: require('../assets/img/blog_details/Photo.jpeg'),
          date: '26 December,2022',
          link: 'Interior / Home / Decore',
          text: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'],
          quotes: 'The details are not the details. They make the design.'
        },
        {
          tag: 'Building',
          title: 'Building',
          image: require('../assets/img/blog_details/Photo.jpeg'),
          date: '26 December,2022',
          link: 'Interior / Home / Decore',
          text: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'],
          quotes: 'The details are not the details. They make the design.'
        },
        {
          tag: 'Architecture',
          title: 'Architecture',
          image: require('../assets/img/blog_details/Photo.jpeg'),
          date: '26 December,2022',
          link: 'Interior / Home / Decore',
          text: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'],
          quotes: 'The details are not the details. They make the design.'
        },
        {
          tag: 'Kitchen Planning',
          title: 'Kitchen Planning',
          image: require('../assets/img/blog_details/Photo.jpeg'),
          date: '26 December,2022',
          link: 'Interior / Home / Decore',
          text: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'],
          quotes: 'The details are not the details. They make the design.'
        },
        {
          tag: 'Kitchen Planning',
          title: 'Kitchen Planning',
          image: require('../assets/img/blog_details/Photo.jpeg'),
          date: '26 December,2022',
          link: 'Interior / Home / Decore',
          text: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'],
          quotes: 'The details are not the details. They make the design.'
        }
      ],
      tags: [
        { tagName: 'Kitchen' },
        { tagName: 'Bedroom' },
        { tagName: 'Building' },
        { tagName: 'Architecture' },
        { tagName: 'Kitchen Planning' }
      ]
    }
  },
  methods: {
    filteredListArticles (tagName) {
      this.filterArticles = this.articles.filter(article => article.tag === tagName)
    }
  }
}
</script>

  <style lang="scss">

  </style>
