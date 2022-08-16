<template>
  <div id="app">
    <div class="container">
        <div class="flex items-center pt-6">
          <a href="/">
          <img class="" src="./assets/svg/logo.svg" alt="logo">
          </a>
          <MenuHeader />
        </div>
        </div>
        <div class="wrap">
          <BusinessArea />
        </div>
        <div class="wrap">
          <HowWorks />
        </div>
         <div class="wrap">
          <RealTime />
        </div>
         <div class="wrap">
          <CollaborateCompanies />
        </div>
        <div class="wrap">
          <FrequentlyAskedQuestions />
        </div>
        <div class="scroll-to-top relative">
          <button @click="scrollToTop" class="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-0  absolute bottom-5 right-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path class="fill-white" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
              </svg>
            </button>
        </div>
  </div>
</template>

<script>
  import MenuHeader from './components/MenuHeader.vue';
  import BusinessArea from './components/BusinessArea.vue';
  import HowWorks from './components/HowWorks.vue';
  import RealTime from './components/RealTime.vue';
  import CollaborateCompanies from './components/CollaborateCompanies.vue';
  import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions.vue';
  import './assets/tailwind.css';

  export default {
    name: 'App',
    components: {
      MenuHeader,
      BusinessArea,
      HowWorks,
      RealTime,
      CollaborateCompanies,
      FrequentlyAskedQuestions
    },
    methods: {
      scrollToTop(){
      let current_scroll = document.documentElement.scrollTop,
      int = setInterval(frame, 6)
      function frame(){
        if( 0 > current_scroll)
        clearInterval(int)
      else {
        current_scroll = current_scroll - 50
        document.documentElement.scrollTop = current_scroll
          }
        }
      }
    }
  }
</script>