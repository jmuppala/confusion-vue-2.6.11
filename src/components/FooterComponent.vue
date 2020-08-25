<template>
<div class="md-layout md-gutter md-alignment-center-space-around">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-medium-size-30">
        <h4 class="md-title">Links</h4>
        <md-list>
          <md-list-item>
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item>
            <md-icon>info</md-icon>
            <span class="md-list-item-text">About Us</span>
          </md-list-item>

          <md-list-item>
            <md-icon>menu</md-icon>
            <span class="md-list-item-text">Menu</span>
          </md-list-item>

          <md-list-item>
            <md-icon>contact_phone</md-icon>
            <span class="md-list-item-text">Contact Us</span>
          </md-list-item>
        </md-list>
    </div>
    <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-medium-size-30">
        <h4 class="md-title">Our Address</h4>
        <address class="md-body2">
          121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>
          <md-icon>phone</md-icon>: +852 1234 5678<br>
          <md-icon>print</md-icon>: +852 8765 4321<br>
          <md-icon>email</md-icon>:
          <a href="mailto:confusion@food.net">confusion@food.net</a>
        </address>
    </div>
    <div class="md-layout-item">
        <h1 class="md-title">
            <md-button class="md-icon-button md-primary md-raised" href="https://facebook.com"><md-icon>facebook</md-icon></md-button>
            <md-button class="md-icon-button md-primary md-raised" href="https://twitter.com"><md-icon class="fa fa-twitter">&nbsp;</md-icon></md-button>
            <md-button class="md-icon-button md-primary md-raised" href="https://linkedin.com"><md-icon class="fa fa-linkedin"></md-icon></md-button>
            <md-button class="md-icon-button md-primary md-raised" href="https://youtube.com"><md-icon class="fa fa-youtube"></md-icon></md-button>
            <md-button class="md-icon-button md-primary md-raised" href="mailto:confusion@food.net"><md-icon>email</md-icon></md-button>
        </h1>
    </div>
</div>
</template>


<script>
export default {
  name: 'AppFooter',

}
</script>

<style lang="scss" scoped>
@import "vue-material/dist/theme/engine";

 .md-layout {
    background: md-get-palette-color(blue, A100);
    margin: 0px;
    padding: 40px;
 }

 .md-list {
    padding: 0px;

    .md-list-item {
    background: md-get-palette-color(blue, A100);
    }

 }
</style>