<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: $base-shadow;
    height: 300px;
    width: 80vw;
    border-radius: 4px;

  }
</style>