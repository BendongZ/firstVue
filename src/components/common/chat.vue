<template>
  <div class="m-index">
    <section>
      <div>
        聊天功能正在开发中 {{50000 | fixed}}
      </div>
      {{0 | fixed}}
    </section>
  </div>
</template>

<script>
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
.m-index {
  section {
    div {
      color: red;
      text-align: center;
      padding: .2rem;
    }
  }
}
</style>
