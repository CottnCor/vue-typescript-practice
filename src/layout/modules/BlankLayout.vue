<template>
  <div class="main">
    <slot name="main"></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
class BlankLayout extends Vue {}
export default BlankLayout;
</script>

<style lang='scss' scoped>
.main {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    background: map-get($default, grey_2);
}
</style>