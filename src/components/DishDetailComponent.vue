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
  filters: {
    date: function (value) {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(value)))
    }
  },
  data: () => ({
    selectedDish: {
        id: '0',
        name: 'Uthappizza',
        image: '/assets/images/uthappizza.png',
        category: 'mains',
        featured: true,
        label: 'Hot',
        price: '4.99',
        // tslint:disable-next-line:max-line-length
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    }
  })
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