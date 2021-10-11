<template>
  <div id="nav">
    <img src="./assets/Sky-news-logo.png" class="logo" />
    <div class="home">
      <router-link class="lien" to="/">News</router-link> |
      <router-link class="lien" to="/Search">Search</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  margin: 0px;
  background-color: #c5c5c5;
}

.logo {
  width: 40%;
  margin-top: 2%;
  margin-right: 25%;
}
.lien {
  text-decoration: none;
  color: black;
}
.lien:hover {
  text-decoration: underline;
}

.home {
  margin-right: 5%;
  margin-top: 5%;
  font-family: "Roboto", sans-serif;
  font-size: 170%;
  text-decoration: none;
  color: black;
}

#nav {
  display: flex;
  justify-content: flex-end;
}
</style>
