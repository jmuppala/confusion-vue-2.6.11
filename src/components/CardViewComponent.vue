<template>
  <div>
    <Loading v-if="item.isLoading" message="Loading ..."></Loading>
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

</style>