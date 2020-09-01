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
    <Loading v-if="getComments.isLoading" message="Loading Comments ..."></Loading>
    <md-list v-else-if="getComments.items !== null" class="md-layout-item md-xsmall-size-100 md-small-size-45 md-triple-line">
        <h4 class="md-headline">Comments</h4>
        <md-list-item v-for="comment in getComments.items" v-bind:comment="comment" v-bind:key="comment.id">
            <div class="md-list-item-text">
                <span>{{comment.comment}}</span>
                <span>{{comment.rating}} Stars</span>
                <span>-- {{comment.author}} {{comment.date | date}}</span>
            </div>
        </md-list-item>
        <md-button class="md-raised md-primary" @click="showForm = true"><md-icon>edit</md-icon> Submit Comment</md-button>
    </md-list>
    <Loading v-else-if="!getComments.isLoading" message="Loading Comments ..."></Loading>
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
              <label for="author">Your Name</label>
              <md-input name="author" id="author" autocomplete="author" v-model.trim="$v.comment.author.$model" />
              <span class="md-error" v-if="!$v.comment.author.required">Name is required</span>
              <span class="md-error" v-else-if="!$v.comment.author.minLength">Name must be at least {{$v.comment.author.$params.minLength.min}} characters</span>
              <span class="md-error" v-else-if="!$v.comment.author.maxLength">Name must be less than {{$v.comment.author.$params.maxLength.max}} characters</span>
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
import { validationMixin } from 'vuelidate';
import {
  required,
  minLength,
  maxLength
} from 'vuelidate/lib/validators';
import { mapGetters, mapMutations } from 'vuex';
import Loading from './LoadingComponent';

export default {
  name: 'DishDetail',
  mixins: [validationMixin],
  components: {
      CardView,
      Loading
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
      comment: {
        rating: 5,
        author: null,
        comment: null
      },
      showForm: false
  }),
  computed: {
    ...mapGetters('dishes',['getItemWithId']),
    ...mapGetters('comments', ['getCommentsWithDishId']),
    selectedDish() {
      return this.getItemWithId(this.id);
    },
    getComments() {
      return this.getCommentsWithDishId(this.id);
    }
  },
  filters: {
    date: function (value) {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(value)))
    }
  },
  validations: {
    comment: {
      author: {
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
          this.comment.author = null;
          this.comment.rating = 5;
          this.comment.comment = null;
          this.$nextTick(() => { this.$v.comment.$reset() });
          this.showForm = false;
      },
      submitComment () {
          this.$v.comment.$touch
          alert(JSON.stringify({...this.comment, dishId: this.id, date: new Date().toISOString()}));
          this.addComment({...this.comment, dishId: this.id, date: new Date().toISOString()});
          this.clearForm();
      },
      ...mapMutations('comments',['addComment'])
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