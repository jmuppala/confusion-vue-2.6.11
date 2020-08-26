<template>
<div class="md-layout md-gutter md-alignment-center-space-around">
    <div class="md-layout-item md-size-100">
        <md-button to='/home'><md-icon>home</md-icon> Home</md-button>
        <md-button disabled><md-icon>chevron_right</md-icon></md-button>
        <md-button disabled><md-icon>info</md-icon> About Us</md-button>
        <h1 class="md-Heading">About Us</h1>
        <md-divider></md-divider>
    </div>
    About Component
</div>
</template>

<script>
export default {
  name: 'About',

}
</script>

<style lang="scss" scoped>

 .md-layout {
  margin: 0px;
  padding: 40px;
 }
</style>