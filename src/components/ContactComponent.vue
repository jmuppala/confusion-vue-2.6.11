<template>
<div class="md-layout md-gutter md-alignment-center-space-around">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="md-layout-item md-size-100">
        <md-button to='/home'><md-icon>home</md-icon> Home</md-button>
        <md-button disabled><md-icon>chevron_right</md-icon></md-button>
        <md-button disabled><md-icon>contact_phone</md-icon> Contact Us</md-button>
        <h1 class="md-Heading">Contact Us</h1>
        <md-divider></md-divider>
    </div>
    <div class="md-layout-item md-xsmall-size-100 md-small-size-40">
        <h2 class="md-Heading">Our Address</h2>
        <address class="md-body2">
          121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>
          <md-icon>phone</md-icon>: +852 1234 5678<br>
          <md-icon>print</md-icon>: +852 8765 4321<br>
          <md-icon>email</md-icon>:
          <a href="mailto:confusion@food.net">confusion@food.net</a>
        </address>
        <md-button class="md-dense md-raised" href="tel:+85212345678"><md-icon>phone</md-icon> Call Us</md-button>
        <md-button class="md-dense md-raised"><md-icon class="fa fa-skype"></md-icon> Skype</md-button>
        <md-button class="md-dense md-raised" href="mailto:confusion@food.net"><md-icon>mail</md-icon> Email</md-button>
    </div>
    <div class="md-layout-item md-xsmall-size-100 md-small-size-40">
        <h2 class="md-Heading">Map of Our Location</h2>
    </div>
</div>
</template>

<script>
export default {
  name: 'Contact',

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
</style>