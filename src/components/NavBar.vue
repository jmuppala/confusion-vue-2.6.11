<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Ristorante Con Fusion</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Ristorante Con Fusion
        </md-toolbar>

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
      </md-app-drawer>

      <md-app-content>
        <app-header></app-header>
        <menu-list></menu-list>
        <app-footer></app-footer>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    border: 1px solid rgba(#000, .12);

    .md-app-content {
        width: 100%;
        padding: 0px;
    }
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
import MenuList from './MenuComponent.vue'
import AppHeader from './HeaderComponent.vue'
import AppFooter from './FooterComponent.vue'

export default {
  name: 'NavBar',
  components: {
    MenuList,
    AppHeader,
    AppFooter
  },
  data: () => ({
    menuVisible: false
  })
}
</script>