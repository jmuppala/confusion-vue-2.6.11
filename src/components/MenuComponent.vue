<template>
<div>
  <div class="md-layout md-alignment-center-center">
    <div class="md-layout-item md-size-100">
        <md-button to='/home'><md-icon>home</md-icon> Home</md-button>
        <md-button disabled><md-icon>chevron_right</md-icon></md-button>
        <md-button disabled><md-icon>menu</md-icon> Menu</md-button>
        <h1 class="md-Heading">Menu</h1>
        <md-divider></md-divider>
    </div>
    <Loading v-if="dishes.isLoading" message="Loading Dishes ..."></Loading>
    <div v-else-if="dishes.errMess" class="md-layout-item">
      <h6 class="md-title">{{dishes.errMess}}</h6>
    </div>
    <md-list v-else-if="dishes.items !== null" class="md-layout-item">
      <div  class="md-layout md-gutter md-alignment-center-center">
      <md-list-item v-for="dish in dishes.items" v-bind:dish="dish" v-bind:key="dish.id" class="md-layout-item" :to="'/menu/' + dish.id">
        <md-card>
            <md-card-media-cover md-text-scrim>
                <md-card-media md-ratio="1:1">
                    <img :src="baseUrl + dish.image" :alt="dish.name">
                </md-card-media>

                <md-card-area>
                    <md-card-header>
                        <span class="md-title">{{ dish.name }}</span>
                    </md-card-header>
                </md-card-area>
            </md-card-media-cover>
        </md-card>
      </md-list-item>
      </div>
    </md-list>
    <Loading v-else-if="!dishes.isLoading" message="Loading Dishes ..."></Loading>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

export default {
  name: 'MenuList',
  components: {
    Loading
  },
  data: () => ({
    baseUrl: baseUrl
  }),
  computed: mapState({
    dishes: state => state.dishes
  })
}
</script>

<style lang="scss" scoped>
  .md-list {
    width: 90%;
    max-width: 99%;
  }
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

 .md-layout {
  margin: 0px;
  padding: 40px;

 }
</style>