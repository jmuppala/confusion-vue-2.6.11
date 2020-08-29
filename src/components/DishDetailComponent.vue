<template>
  <div class="md-layout md-gutter md-alignment-top-center">
    <div class="md-layout-item md-size-100">
        <md-button to='/home'><md-icon>home</md-icon> Home</md-button>
        <md-button disabled><md-icon>chevron_right</md-icon></md-button>
        <md-button to='/menu'><md-icon>menu</md-icon> Menu</md-button>
        <md-button disabled><md-icon>chevron_right</md-icon></md-button>
        <md-button v-if="selectedDish !== null" disabled>{{ selectedDish.name }}</md-button>
        <h1 v-if="selectedDish !== null" class="md-Heading">{{ selectedDish.name }}</h1>
        <md-divider></md-divider>
    </div>
    <card-view v-if="selectedDish !== null" :item="selectedDish" class="md-layout-item md-xsmall-size-100 md-medium-size-45"></card-view>
    <md-list v-if="comments !== null" class="md-layout-item md-xsmall-size-100 md-small-size-45 md-triple-line">
        <h4 class="md-headline">Comments</h4>
        <md-list-item v-for="comment in comments" v-bind:comment="comment" v-bind:key="comment.id">
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
import CardView from './CardViewComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

export default {
  name: 'DishDetail',
  components: {
      CardView
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
      selectedDish: null,
      comments: null
  }),
  created() {
      this.selectedDish = DISHES.filter((dish) => dish.id === this.id)[0];
      this.comments = COMMENTS.filter((comment) => comment.dishId === this.id);
  },
  filters: {
    date: function (value) {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(value)))
    }
  }
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
  .md-list {
    margin: 10px;
    width: 640px;
    display: inline-block;
    max-width: 45%;
  }

</style>