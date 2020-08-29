<template>
<div class="md-layout md-gutter md-alignment-center-space-around">
    <card-view :item="dishes.filter((item) => item.featured)[0]" class="md-layout-item md-xsmall-size-100 md-medium-size-33"></card-view>
    <card-view :item="promotions.filter((item) => item.featured)[0]" class="md-layout-item md-xsmall-size-100 md-medium-size-33"></card-view>
    <card-view :item="leaders.filter((item) => item.featured)[0]" class="md-layout-item md-xsmall-size-100 md-medium-size-33"></card-view>
</div>
</template>

<script>
import CardView from './CardViewComponent';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
      CardView
  },
  data: () => ({
  }),
  computed: mapState({
    dishes: state => state.dishes,
    promotions: state => state.promotions,
    leaders: state => state.leaders
  })
}
</script>

<style lang="scss" scoped>

 .md-layout {
  margin: 0px;
  padding: 40px;
 }
</style>