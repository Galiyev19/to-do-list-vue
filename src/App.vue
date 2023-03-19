<template>
  <main class="main">
    <div class="offset">
      <home-page />
    </div>
  </main>
</template>

<script>
import HomePage from "@/components/Home/Home-page.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #FFDEFC;
}

body{
  margin: 0;
}
.main {
  margin: 0;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  background: #b92b27;
  background: -webkit-linear-gradient(to left, #b92b27, #1565c0);
  background: linear-gradient(to left, #b92b27, #1565c0);
}

.offset{
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
