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
        <md-button class="md-raised md-primary" @click="showForm = true"><md-icon>edit</md-icon> Submit Comment</md-button>
    </md-list>
    <md-dialog :md-active.sync="showForm">
      <md-dialog-content>
      <md-dialog-title>Submit Comment</md-dialog-title>

      <form novalidate @submit.prevent="submitComment">
        <div class="md-layout">
          <div class="md-layout-item md-size-90">
            <md-field>
              <label for="rating">Rating</label>
              <md-select name="rating" id="rating" v-model="comment.rating" md-dense>
                  <md-option value=1>1</md-option>
                  <md-option value=2>2</md-option>
                  <md-option value=3>3</md-option>
                  <md-option value=4>4</md-option>
                  <md-option value=5>5</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-90">
            <md-field :class="getValidationClass('name')">
              <label for="name">Your Name</label>
              <md-input name="name" id="name" autocomplete="name" v-model.trim="$v.comment.name.$model" />
              <span class="md-error" v-if="!$v.comment.name.required">Name is required</span>
              <span class="md-error" v-else-if="!$v.comment.name.minLength">Name must be at least {{$v.comment.name.$params.minLength.min}} characters</span>
              <span class="md-error" v-else-if="!$v.comment.name.maxLength">Name must be less than {{$v.comment.name.$params.maxLength.max}} characters</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-90">
            <md-field>
              <label for="comment">Your Comment</label>
              <md-textarea name="comment" id="comment" autocomplete="comment" v-model="comment.comment" />
            </md-field>
          </div>
        </div>
        <md-dialog-actions>
          <md-button type="submit" class="md-primary" :disabled="this.$v.comment.$invalid">Submit</md-button>
        </md-dialog-actions>
      </form>
      </md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
import CardView from './CardViewComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'

export default {
  name: 'DishDetail',
  mixins: [validationMixin],
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
      comments: null,
      comment: {
        rating: 5,
        name: null,
        comment: null
      },
      showForm: false
  }),
  created() {
      this.selectedDish = DISHES.filter((dish) => dish.id === this.id)[0];
      this.comments = COMMENTS.filter((comment) => comment.dishId === this.id);
  },
  filters: {
    date: function (value) {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(value)))
    }
  },
  validations: {
    comment: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(15)
      }
    }
  },
  methods: {
      getValidationClass (fieldName) {
          const field = this.$v.comment[fieldName]

          if (field) {
              return { 'md-invalid': field.$invalid && field.$dirty }
          }
      },
      clearForm () {
          this.comment.name = null;
          this.comment.rating = 5;
          this.comment.comment = null;
          this.$nextTick(() => { this.$v.comment.$reset() });
          this.showForm = false;
      },
      submitComment () {
          this.$v.comment.$touch
          alert(JSON.stringify(this.comment));
          this.clearForm();
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