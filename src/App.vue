<template>
  <div id="app">
    <div class="container box">
        <div class="flex items-center pt-6">
          <a href="/">
          <img class="img-fluid" src="./assets/svg/logo.svg" alt="logo">
          </a>
          <MenuHeader />
        </div>
        <div class="">
          <BusinessArea />
        </div>
    </div>
  </div>
</template>

<script>
  import MenuHeader from './components/MenuHeader.vue';
  import BusinessArea from './components/BusinessArea.vue';
  import './assets/tailwind.css';

  export default {
    name: 'App',
    components: {
      MenuHeader,
      BusinessArea
    }
  }
</script>