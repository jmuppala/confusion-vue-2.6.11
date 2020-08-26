<template>
<div>
    <md-card v-if="item !== null">
      <md-card-media>
        <img :src="item.image" :alt="item.name">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ item.name }}</div>
        <div v-if="item.designation !== null" class="md-subheading">{{ item.designation }}</div>
      </md-card-header>

      <md-card-content>
          {{ item.description }}
      </md-card-content>
    </md-card>
    </div>
</template>

<script>
export default {
  name: 'CardView',
  props: {
    item: {
      type: Object,
      required: true
    }
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