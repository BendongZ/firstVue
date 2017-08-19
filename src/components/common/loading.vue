<template>
  <div class="loading">
    <mt-spinner class="spinner" color="#000" type="fading-circle"></mt-spinner>
    <span class="load-text">加载中...</span>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Spinner
} from 'mint-ui';

Vue.component(Spinner.name, Spinner);
export default {
  name: 'hello',
  data() {
    return {
      msg: 'shhss'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../static/style/usage/app.scss';
.loading {
  height: .5rem;
  line-height: .5rem;
  @include flexbox();
  @include flex-direction(row);
  @include justify-content(center);
  .spinner {
    margin-top: .11rem;
  }
  .load-text {
    margin-left: .05rem;
  }
}
</style>
