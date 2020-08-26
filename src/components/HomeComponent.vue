<template>
<div class="md-layout md-gutter md-alignment-center-space-around">
    <card-view :item="dishes.filter((item) => item.featured)[0]" class="md-layout-item md-xsmall-size-100 md-medium-size-33"></card-view>
    <card-view :item="promotions.filter((item) => item.featured)[0]" class="md-layout-item md-xsmall-size-100 md-medium-size-33"></card-view>
    <card-view :item="leaders.filter((item) => item.featured)[0]" class="md-layout-item md-xsmall-size-100 md-medium-size-33"></card-view>
</div>
</template>

<script>
import CardView from './CardViewComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export default {
  name: 'Home',
  components: {
      CardView
  },
  data: () => ({
    dishes: DISHES,
    promotions: PROMOTIONS,
    leaders: LEADERS,
  })
}
</script>

<style lang="scss" scoped>

 .md-layout {
  margin: 0px;
  padding: 40px;
 }
</style>