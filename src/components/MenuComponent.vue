<template>
<div>
  <div class="md-layout md-alignment-center-center">
    <md-list>
      <div  class="md-size-75 md-layout md-gutter md-alignment-center-center">
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
    <dish-detail></dish-detail>
</div>
</template>

<script>
import DishDetail from './DishDetailComponent';

export default {
  name: 'MenuList',
  components: {
      DishDetail
  },
  data: () => ({
    dishes: [
    {
      id: 0,
      name:'Uthappizza',
      image: 'assets/images/uthappizza.png',
      category: 'mains',
      label:'Hot',
      price:'4.99',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
   {
      id: 1,
      name:'Zucchipakoda',
      image: 'assets/images/zucchipakoda.png',
      category: 'appetizer',
      label:'',
      price:'1.99',
      description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
   {
      id: 2,
      name:'Vadonut',
      image: 'assets/images/vadonut.png',
      category: 'appetizer',
      label:'New',
      price:'1.99',
      description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
   {
      id: 3,
      name:'ElaiCheese Cake',
      image: 'assets/images/elaicheesecake.png',
      category: 'dessert',
      label:'',
      price:'2.99',
      description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
   ],
   selectedDish: null
  })
}
</script>

<style lang="scss" scoped>
  .md-list {
    width: 90%;
    max-width: 100%;
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