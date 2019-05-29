<template>
  <blank-layout>
    <div slot="container"></div>
  </blank-layout>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { BlankLayout } from '@/layout';

@Component({ components: { BlankLayout } })
class ResponsiveLayout extends Vue {}
export default ResponsiveLayout;
</script>

<style lang='scss' scoped>
</style>