<template>
  <div class="searchPage">
    <h1 class="titleSearch">Search for your news</h1>
    <br />
    <input
      class="inputSearch"
      type="search"
      placeholder="search for your news"
      @keydown.enter="newsSearchArticles"
      v-model="searchNewsInput"
    />
    <article
      v-for="(element, index) in newsArray"
      :key="index"
      class="newsPage"
    >
      <NewsCard
        :title="element.title"
        :description="element.description"
        :urlToImage="element.urlToImage"
        :url="element.url"
        :author="element.author"
      ></NewsCard>
    </article>
  </div>
</template>

<script>
import NewsCard from "../components/NewsCard.vue";

export default {
  data() {
    return {
      newsArray: [],
      searchNewsInput: "",
    };
  },
  methods: {
    async newsSearchArticles() {
      const text = this.searchNewsInput;
      const url = `https://newsapi.org/v2/everything?q=${text}&apiKey=6221de66e11f403c8971008c84a197c5`;
      const response = await fetch(url);
      const data = await response.json();
      this.newsArray = data.articles;
    },
  },
  components: {
    NewsCard: NewsCard,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.titleSearch {
  text-transform: uppercase;
  color: #525252;
  margin-left: 2%;
  margin-top: 5%;
  font-family: "Roboto", sans-serif;
  font-size: 220%;
  font-weight: bold;
  text-shadow: 0px 3px 13px #000000;
}

input {
  margin-left: 2%;
  box-shadow: 5px 5px 10px;
  border-radius: 8px;
  width: 20%;
  height: 29px;
}
</style>