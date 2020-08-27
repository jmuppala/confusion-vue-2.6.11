<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Ristorante Con Fusion</span>
        <div class="md-toolbar-section-end">
          <md-button class="md-raised md-primary" @click="showLogin = true"><md-icon>login</md-icon> Login</md-button>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Ristorante Con Fusion
        </md-toolbar>

        <md-list>
          <md-list-item to='/home' @click="menuVisible = !menuVisible">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item to='/aboutus' @click="menuVisible = !menuVisible">
            <md-icon>info</md-icon>
            <span class="md-list-item-text">About Us</span>
          </md-list-item>

          <md-list-item to='/menu' @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
            <span class="md-list-item-text">Menu</span>
          </md-list-item>

          <md-list-item to='/contactus' @click="menuVisible = !menuVisible">
            <md-icon>contact_phone</md-icon>
            <span class="md-list-item-text">Contact Us</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
      </md-app-content>
    </md-app>
    <md-dialog :md-active.sync="showLogin">
      <md-dialog-content>
      <md-dialog-title>Login</md-dialog-title>

      <form novalidate @submit.prevent="loginUser">
        <div class="md-layout">
        <md-field class="md-layout-item md-size-100">
          <label for="username">Username</label>
          <md-input type="text" name="username" id="username" autocomplete="username" v-model="user.username" />
        </md-field>
        <md-field class="md-layout-item md-size-100">
          <label for="password">Password</label>
          <md-input type="password" name="password" id="password" autocomplete="password" v-model="user.password" />
        </md-field>
        <md-checkbox v-model="user.remember">Remember Me</md-checkbox>
        </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showLogin = false">Close</md-button>
        <md-button type="submit" class="md-primary">Submit</md-button>
      </md-dialog-actions>
      </form>
      </md-dialog-content>
    </md-dialog>
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

    .router-link-active {
        border: 1px solid md-get-palette-color(blue, A200);
    }
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

<script>
import AppHeader from './components/HeaderComponent.vue'
import AppFooter from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  data: () => ({
    menuVisible: false,
    showLogin: false,
    user: {
      username: '',
      password: '',
      remember: false
    }
  }),
  methods: {
    clearForm () {
      this.user.username = '';
      this.user.password = '';
      this.user.remember = false;
    },
    loginUser () {
      this.showLogin = false
      alert(JSON.stringify(this.user));
      this.clearForm();
    }
  }
}
</script>