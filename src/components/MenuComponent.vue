<template>
  <div>
    <md-list class="md-double-line">
      <md-list-item v-for="dish in dishes" v-bind:dish="dish" v-bind:key="dish.id">
        <md-avatar>
          <img :src="dish.image" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{ dish.name }}</span>
          <span>{{ dish.description }}</span>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
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
   ]
  })
}
</script>

<style lang="scss" scoped>
  .md-list {
    width: 100%;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>