<template>
<div class="md-layout md-gutter md-alignment-center-space-around">
    <div class="md-layout-item md-size-100">
        <md-button to='/home'><md-icon>home</md-icon> Home</md-button>
        <md-button disabled><md-icon>chevron_right</md-icon></md-button>
        <md-button disabled><md-icon>info</md-icon> About Us</md-button>
        <h1 class="md-Heading">About Us</h1>
        <md-divider></md-divider>
    </div>
    <div class="md-layout-item md-xsmall-size-100 md-small-size-100">
      <h2 class="md-Heading">Our History</h2>
      <p class="mb-body1">Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
      <p class="mb-body1">The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
    </div>
    <div class="md-layout-item md-xsmall-size-100 md-small-size-100">
      <md-card>
        <md-card-header>
          <div class="md-title">Facts at a Glance</div>
        </md-card-header>

        <md-card-content>
          <md-table>
            <md-table-row>
            <md-table-cell align="right">Started</md-table-cell>
            <md-table-cell>3 Feb. 2013</md-table-cell>
            </md-table-row>
            <md-table-row>
            <md-table-cell align="right">Major Stake Holder</md-table-cell>
            <md-table-cell>HK Fine Foods Inc.</md-table-cell>
            </md-table-row>
            <md-table-row>
            <md-table-cell align="right">Last Year's Turnover</md-table-cell>
            <md-table-cell>$1,250,375</md-table-cell>
            </md-table-row>
            <md-table-row>
            <md-table-cell align="right">Employees</md-table-cell>
            <md-table-cell>40</md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-content>
          <h4 class="md-title">You better cut the pizza in four pieces because I'm not hungry enough to eat six.</h4>
          <h5 class="md-subheading" align="right">-- Yogi Berra, The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014.</h5>
        </md-card-content>
      </md-card>
    </div>
    <Loading v-if="leaders.isLoading" message="Loading Leaders ..."></Loading>
    <div v-else-if="leaders.errMess" class="md-layout-item md-size-100">
      <h6 class="md-title">{{leaders.errMess}}</h6>
    </div>
    <md-list v-else-if="leaders.items !== null" class="md-triple-line md-layout-item md-size-100">
      <md-list-item>
        <div class="md-list-item-text">
          <h2 class="md-heading">Corporate Leadership</h2>
        </div>
      </md-list-item>
      <md-list-item v-for="leader in leaders.items" v-bind:leader="leader" v-bind:key="leader.id">
        <md-avatar class="md-large">
          <img :src="baseUrl + leader.image" :alt="leader.name">
        </md-avatar>

        <div class="md-list-item-text">
          <h4 class="md-title">{{leader.name}}</h4>
          <h6 class="md-subheading">{{leader.designation}}</h6>
          <p class="md-body1">{{leader.description}}</p>
        </div>
      </md-list-item>
    </md-list>
    <Loading v-else-if="!leaders.isLoading" message="Loading Leaders ..."></Loading>
</div>
</template>

<script>
import { mapState } from 'vuex';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

export default {
  name: 'About',
  components: {
    Loading
  },
  data: () => ({
    baseUrl: baseUrl
  }),
  computed: mapState({
    leaders: state => state.leaders
  })

}
</script>

<style lang="scss" scoped>

 .md-layout {
  margin: 0px;
  padding: 40px;

  .md-layout-item {
      margin: 20px;
      padding: 20px;
  }
 }
</style>