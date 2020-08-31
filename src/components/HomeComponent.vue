<template>
<div class="md-layout md-gutter md-alignment-center-space-around">
    <card-view :item="dish" class="md-layout-item md-xsmall-size-100 md-medium-size-33"></card-view>
    <card-view :item="promotion" class="md-layout-item md-xsmall-size-100 md-medium-size-33"></card-view>
    <card-view :item="leader" class="md-layout-item md-xsmall-size-100 md-medium-size-33"></card-view>
</div>
</template>

<script>
import CardView from './CardViewComponent';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
      CardView
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters('dishes', {
      dish: 'featured'
    }),
    ...mapGetters('promotions', {
      promotion: 'featured'
    }),
    ...mapGetters('leaders', {
      leader: 'featured'
    })
  }
}
</script>

<style lang="scss" scoped>

 .md-layout {
  margin: 0px;
  padding: 40px;
 }
</style>