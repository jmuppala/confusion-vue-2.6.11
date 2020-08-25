<template>
<div class="md-layout md-gutter md-alignment-center-space-around">
    <div class="md-layout-item md-size-60">
        <h1 class="md-display-1">Ristorante Con Fusion</h1>
        <h1 class="md-headline">
            We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations
      will tickle your culinary senses!
        </h1>
    </div>
    <div class="md-layout-item">
         <img src="/assets/images/logo.png" alt="Logo">
    </div>
    <div class="md-layout-item">&nbsp;</div>
</div>
</template>


<script>
export default {
  name: 'AppHeader',

}
</script>

<style lang="scss" scoped>
@import "vue-material/dist/theme/engine";

 .md-layout {
        background: md-get-palette-color(blue, A100);
        margin: 0px;
        padding: 40px;
 }
</style>