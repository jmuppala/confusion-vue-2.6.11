<template>
<div>
  <div class="md-layout md-alignment-center-center">
    <md-list class="md-layout-item md-size-75">
      <div  class="md-layout md-gutter md-alignment-center-center">
      <md-list-item v-for="dish in dishes" v-bind:dish="dish" v-bind:key="dish.id" class="md-layout-item" @click="selectedDish = dish">
        <md-card>
            <md-card-media-cover md-text-scrim>
                <md-card-media md-ratio="1:1">
                    <img :src="dish.image" :alt="dish.name">
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
  </div>
    <dish-detail v-if="selectedDish !== null" :selectedDish="selectedDish"></dish-detail>
</div>
</template>

<script>
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

export default {
  name: 'MenuList',
  components: {
      DishDetail
  },
  data: () => ({
    dishes: DISHES,
   selectedDish: null
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

  .md-layout-item {
    width: 320px;
  }
</style>