<template>
  <b-container fluid>
    <b-row class="mt-5">
        <b-col lg="3"></b-col>
      <b-col lg="6">
        <iq-card>
          <template v-slot:body>
            <b-row>
              <b-col lg="12">
                <div id="contact-form" class="contact-form">
                    <h1 class="contact-form_title">Contact Us</h1>
                    <div class="separator"></div>
                    <form class="form" @submit="onSubmit">                      
                        <input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
                        <input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
                        <input required name="subject" v-model="contact.subject" placeholder="Subject" type="text" autocomplete="off">
                        <textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
                    <button class="button">Send</button>
                    </form>
                </div>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<style scoped>
  h5 {
    font-size: 22px;
    color:var(--iq-body-text);
    font-weight: lighter;
  }
  body {
	background: #f1f1f1;
	font-family: 'Roboto', sans-serif;
}
.contact-form {
	font-family: 16px;
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
}

.contact-form .separator {
	border-bottom: solid 1px #ccc;
	margin-bottom: 15px;
}

.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 16px;
}

.contact-form_title {
	color: #ddd;
	text-align: left;
	font-size: 28px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
	border: solid 1px #e8e8e8;
	font-family: 'Roboto', sans-serif;
	padding: 10px 7px;
	margin-bottom: 15px;
  outline: none;
  background-color: var(--iq-bg1);
  color: white;
}

.contact-form textarea {
	resize: none;
}

.contact-form .button {
	background: #017afe;
	border: solid 1px #017afe;
	color: white;
	cursor: pointer;
	padding: 10px 50px;
	text-align: center;
	text-transform: uppercase;
}

.contact-form .button:hover {
	background: #00438b;
	border: solid 1px #00438b;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
	font-size: 15px;
	border-radius: 3px
}
</style>>

</style>
<script>
import { core } from '../../config/pluginInit'
import axios from 'axios'
export default {
  name: 'ContactUs',
  mounted () {
    core.index()
  },
  data () {
      return {
          contact: {
              name: '',
              email: '',
              subject: '',
              message: '',
          }
      }
  },
  methods: {
        clearForm() {
          for (let field in this.contact) {
            this.contact[field] = ''
          }
        },
        onSubmit (e) {
            e.preventDefault()
            let form = new FormData();
            for (let field in this.contact) {
                form.append(field, this.contact[field]);
            }
            // Send form to server	
            this.$store.dispatch('Extra/contactUs', form).then((response) => {
                alert("Sent email successfully. You can receive answer within a few hours.")
                this.clearForm()
                console.log(response)
            })
      }
  }
}
</script>
