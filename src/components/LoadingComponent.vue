<template>
  <div class="md-layout md-gutter md-alignment-center-center">
    <div class="md-layout-item md-size-100">
        <md-progress-spinner md-mode="indeterminate" :md-diameter="30"></md-progress-spinner>
        <span class="md-subheading">{{ message }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
  props: {
    message: {
      type: String,
      required: true
    }
  }  
}
</script>

<style lang="scss" scoped>
  .md-progress-spinner {
    margin: 24px;
  }

 .md-layout {
  margin: 0px;
  padding: 40px;

  .md-layout-item {
      margin: 20px;
      padding: 20px;
  }
 }
</style>