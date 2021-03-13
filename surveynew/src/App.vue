<template>
    <v-main>
      <HelloWorld/>
    <router-view></router-view>
    </v-main>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
    provide(){
      return{
      }
    },
  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
    methods:{
    },
};
</script>
