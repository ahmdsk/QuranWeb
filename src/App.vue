<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/quran">Quran</router-link>
    </nav>
    <div class="container">
      <router-view/>
    </div>
    <div class="footer">
      <p>Copyright &copy; Qur'anWeb {{new Date().getFullYear()}}</p>
    </div>
  </div>
</template>

<style>
#app {
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  display: block;
  width: 100%;
  text-align: center;
  padding: 25px 0;
}
</style>