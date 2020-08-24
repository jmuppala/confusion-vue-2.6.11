<template>
  <div class="md-layout md-alignment-top-center">
    <md-card v-if="selectedDish !== null" class="md-layout-item md-size-45">
      <md-card-media>
        <img :src="selectedDish.image" :alt="selectedDish.name">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ selectedDish.name }}</div>
      </md-card-header>

      <md-card-content>
          {{ selectedDish.description }}
      </md-card-content>
    </md-card>
    <md-list class="md-layout-item md-triple-line">
        <h4 class="md-headline">Comments</h4>
        <md-list-item v-for="comment in selectedDish.comments" v-bind:comment="comment" v-bind:key="comment.id">
            <div class="md-list-item-text">
                <span>{{comment.comment}}</span>
                <span>{{comment.rating}} Stars</span>
                <span>-- {{comment.author}} {{comment.date | date}}</span>
            </div>
        </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'DishDetail',
  props: {
    selectedDish: {
      type: Object,
      required: true
    }
  },
  filters: {
    date: function (value) {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(value)))
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-list {
    width: 640px;
    display: inline-block;
    max-width: 45%;
  }
  .md-card {
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

</style>