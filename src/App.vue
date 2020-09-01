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
          <div class="md-layout-item md-size-100">
            <md-field :class="getValidationClass('username')">
              <label for="username">Username</label>
              <md-input type="text" name="username" id="username" autocomplete="username" v-model="user.username" @keyup="handleChange" />
              <span v-if="errors.username != null" class="md-error">{{errors.username}}</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field :class="getValidationClass('password')">
              <label for="password">Password</label>
              <md-input type="password" name="password" id="password" autocomplete="password" v-model="user.password" @keyup="handleChange" />
              <span v-if="errors.password != null" class="md-error">{{errors.password}}</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-checkbox v-model="user.remember">Remember Me</md-checkbox>
          </div>
        </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showLogin = false">Close</md-button>
        <md-button type="submit" class="md-primary" :disabled="(this.errors.username != null && this.errors.username.length > 0) || (this.errors.password != null && this.errors.password.length > 0)">Submit</md-button>
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

  }
</style>

<script>
import AppHeader from './components/HeaderComponent.vue'
import AppFooter from './components/FooterComponent.vue'
import { mapActions } from 'vuex'

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
    },
    errors: {
      username: null,
      password: null
    }
  }),
  created (){
    this.fetchDishes();
    this.fetchPromotions();
    this.fetchLeaders();
    this.fetchComments();
  },
  methods: {
    getValidationClass (fieldName) {

      switch (fieldName) {
        case 'username':
          return { 'md-invalid': (this.errors.username != null && this.errors.username.length > 0) }
        case 'password':
          return { 'md-invalid': (this.errors.password != null && this.errors.password.length > 0) }
        default:
          return null;
      }
    },
    clearForm () {
      this.user.username = '';
      this.user.password = '';
      this.user.remember = false;
      this.errors.username = null;
      this.errors.password = null;
    },
    validate(name, value) {
      switch (name) {
        case 'username':
          if (value.length < 3)
            this.errors.username = 'Username should be >= 3 characters';
          else if (value.length > 10)
            this.errors.username = 'Username should be <= 10 characters';
          else
            this.errors.username = '';
          return;

        case 'password':
          if (value.length < 8)
            this.errors.password = 'Password should be >= 8 characters';
          else
            this.errors.password = '';
          return;

        default:
          return;
      }
    },
    handleChange (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.validate(name, value);
    },
    loginUser (event) {
      this.showLogin = false
      alert(JSON.stringify(this.user));
      this.clearForm();
      event.target.reset();
    },
    ...mapActions('dishes', {
      fetchDishes: 'fetchItems'
    }),
    ...mapActions('promotions', {
      fetchPromotions: 'fetchItems'
    }),
    ...mapActions('leaders', {
      fetchLeaders: 'fetchItems'
    }),
    ...mapActions('comments', {
      fetchComments: 'fetchComments'
    })
  }
}
</script>