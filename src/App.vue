<template>
  <div id="app">
    <div class="container">
        <div class="flex items-center pt-6">
          <a href="/">
          <img class="" src="./assets/svg/logo.svg" alt="logo">
          </a>
          <MenuHeader />
        </div>
        <div class="">
          <BusinessArea />
        </div>
        <div class="">
          <HowWorks />
        </div>
    </div>
  </div>
</template>

<script>
  import MenuHeader from './components/MenuHeader.vue';
  import BusinessArea from './components/BusinessArea.vue';
  import HowWorks from './components/HowWorks.vue';
  import './assets/tailwind.css';

  export default {
    name: 'App',
    components: {
      MenuHeader,
      BusinessArea,
      HowWorks,
    }
  }
</script>