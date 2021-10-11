<template>
  <article v-for="(element, index) in newsArray" :key="index" class="newsPage">
    <NewsCard
      :title="element.title"
      :description="element.description"
      :urlToImage="element.urlToImage"
      :url="element.url"
      :author="element.author"
    ></NewsCard>
  </article>
</template>

<script>
import NewsCard from "../components/NewsCard.vue";

export default {
  data() {
    return {
      newsArray: [],
    };
  },

  async mounted() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=fr&apiKey=6221de66e11f403c8971008c84a197c5";
    const response = await fetch(url);
    const data = await response.json();
    this.newsArray = data.articles;
  },

  components: {
    NewsCard: NewsCard,
  },
};
</script>
