<template>
  <div class="ensemble">
    <article class="protoNews">
      <p class="title">
        {{ title }}
      </p>
      <br />
      <a class="description" :href="url" target="_blank">{{ description }}</a>
      <p class="auteur">{{ author }}</p>
    </article>
    <img class="image" :src="urlToImage" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    urlToImage: String,
    url: String,
    author: String,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.protoNews {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  margin: 0% 1%;
}
.title {
  font-size: 180%;
  font-weight: bold;
}

.image {
  width: 42%;
}

.description {
  font-size: 150%;
  text-decoration: none;
  color: black;
}

.description:hover {
  text-decoration: underline;
}

.ensemble {
  display: flex;
  margin: 2%;
  border: #ffffff 3px solid;
  box-shadow: 5px 5px 5px #444444;
  background-color: #d6d6d6;
  border-radius: 5px;
}

.auteur {
  margin-top: 10%;
}
</style>