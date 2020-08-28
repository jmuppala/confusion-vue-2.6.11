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
    <div class="md-layout-item md-size-100">
        <h2 class="md-Heading">Send Us Your Feedback</h2>
        <form novalidate @submit.prevent="submitFeedback">
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100 md-size-45">
                    <md-field :class="getValidationClass('firstname')">
                        <label for="firstname">First Name</label>
                        <md-input name="firstname" id="firstname" autocomplete="firstname" v-model.trim="$v.feedback.firstname.$model" />
                        <span class="md-error" v-if="!$v.feedback.firstname.required">First name is required</span>
                        <span class="md-error" v-else-if="!$v.feedback.firstname.minLength">First name must be at least {{$v.feedback.firstname.$params.minLength.min}} characters</span>
                        <span class="md-error" v-else-if="!$v.feedback.firstname.maxLength">First name must be less than {{$v.feedback.firstname.$params.maxLength.max}} characters</span>
                    </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-45">
                    <md-field :class="getValidationClass('lastname')">
                        <label for="lastname">Last Name</label>
                        <md-input name="lastname" id="lastname" autocomplete="lastname" v-model.trim="$v.feedback.lastname.$model" />
                        <span class="md-error" v-if="!$v.feedback.lastname.required">Last name is required</span>
                        <span class="md-error" v-else-if="!$v.feedback.lastname.minLength">Last name must be at least {{$v.feedback.lastname.$params.minLength.min}} characters</span>
                        <span class="md-error" v-else-if="!$v.feedback.lastname.maxLength">Last name must be less than {{$v.feedback.lastname.$params.maxLength.max}} characters</span>
                    </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-45">
                    <md-field :class="getValidationClass('telnum')">
                        <label for="telnum">Tel. Number</label>
                        <md-input type="telnum" name="telnum" id="telnum" autocomplete="telnum" v-model="$v.feedback.telnum.$model" />
                        <span class="md-error" v-if="!$v.feedback.telnum.required">Tel. number is required</span>
                        <span class="md-error" v-else-if="!$v.feedback.telnum.numeric">Only numbers accepted</span>
                    </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-45">
                    <md-field :class="getValidationClass('email')">
                        <label for="email">Email</label>
                        <md-input name="email" id="email" autocomplete="email" v-model="$v.feedback.email.$model" />
                        <span class="md-error" v-if="!$v.feedback.email.required">Email is required</span>
                        <span class="md-error" v-else-if="!$v.feedback.email.email">Invalid email format</span>
                    </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-45">
                    <md-checkbox v-model="feedback.agree">May we contact you?</md-checkbox>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-45">
                    <md-field>
                        <label for="contacttype">Contact Type</label>
                        <md-select name="contacttype" id="contacttype" v-model="feedback.contacttype" md-dense>
                            <md-option value=null>None</md-option>
                            <md-option value="Tel.">Tel.</md-option>
                            <md-option value="Email">Email</md-option>
                        </md-select>
                    </md-field>
                </div>
                <div class="md-layout-item md-size-90">
                    <md-field>
                        <label for="message">Your Message</label>
                        <md-textarea name="message" id="message" autocomplete="message" v-model="feedback.message" />
                    </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                    <md-button type="submit" class="md-primary md-raised" :disabled="this.$v.feedback.$invalid">Submit</md-button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    numeric,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

export default {
    name: 'Contact',
    mixins: [validationMixin],
    data: () => ({
        feedback: {
            firstname: null,
            lastname: null,
            telnum: null,
            email: null,
            agree: false,
            contacttype: null,
            message: null
        },
    }),
    validations: {
      feedback: {
        firstname: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(25)
        },
        lastname: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(25)
        },
        telnum: {
          required,
          numeric
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
        getValidationClass (fieldName) {
            const field = this.$v.feedback[fieldName]

            if (field) {
                return { 'md-invalid': field.$invalid && field.$dirty }
            }
        },
        clearForm () {
            this.feedback.firstname = null;
            this.feedback.lastname = null;
            this.feedback.telnum = null;
            this.feedback.email = null;    
            this.feedback.agree = false;    
            this.feedback.contacttype = null;    
            this.feedback.message = null;    
            this.$nextTick(() => { this.$v.feedback.$reset() })
        },
        submitFeedback () {
            this.$v.feedback.$touch
            console.log(JSON.stringify(this.feedback));
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
</style>