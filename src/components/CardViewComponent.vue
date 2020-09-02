<template>
  <div>
    <transition name="expand" appear>
    <Loading v-if="item.isLoading" message="Loading ..."></Loading>
    <div v-else-if="item.errMess">
      <h6 class="md-title">{{item.errMess}}</h6>
    </div>
    <md-card v-else-if="item.item !== null">
      <md-card-media>
        <img :src="baseUrl + item.item.image" :alt="item.item.name">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ item.item.name }}</div>
        <div v-if="item.item.designation !== null" class="md-subheading">{{ item.item.designation }}</div>
      </md-card-header>

      <md-card-content>
          {{ item.item.description }}
      </md-card-content>
    </md-card>
    <Loading v-else-if="!item.isLoading" message="Loading ..."></Loading>
    </transition>
  </div>
</template>

<script>
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

export default {
  name: 'CardView',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    baseUrl: baseUrl
  }),
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>

  .md-card {
    margin: 10px;
    display: inline-block;
    vertical-align: top;
  }
  .expand-enter {
    opacity: 0;
    transform: scale(0.1);
  }

  .expand-enter-active {
      transition: all 500ms ease-in 500ms;
  }

  .expand-enter-to {
      opacity: 1;
      transform: scale(1);
  }
</style>