<template>
  <div id="app">
    <blank-layout>
      <keep-alive slot="main">
        <transition name="slide-fade">
          <router-view v-if="this.$route.meta.keepAlive" />
        </transition>
      </keep-alive>
      <transition slot="main" name="slide-fade">
        <router-view v-if="!this.$route.meta.keepAlive" />
      </transition>
    </blank-layout>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { BlankLayout } from '@/layout';

@Component({ components: { BlankLayout } })
export default class App extends Vue {}
</script>

<style lang='scss' scope>
#app {
    width: 100%;
    height: 100vh;
    min-height: 100vh;
}
</style>
