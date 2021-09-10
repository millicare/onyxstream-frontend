<template>
    <section class="m-profile">
        <b-container v-if="loading==true">
            <h4 class="main-title mb-4">Pricing Plan</h4>
            <b-row class="justify-content-center">
                <b-col lg="12" >
                    <div class="sign-user_card">
                        <div class="table-responsive pricing pt-2">
                            <table id="my-table" class="table">
                                <thead>
                                    <tr>
                                        <th class="text-center prc-wrap"></th>
                                        <th v-for="(item, index) in memships" class="text-center prc-wrap" :key="index">
                                            <div :class="user.memship.name==item.name ? 'prc-box active' : 'prc-box'">
                                                <div class="h3 pt-4 text-white">{{ item.feePerMonth }}$<small> / Per month</small></div>
                                                <span class="type">{{ item.name }}</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="text-center" scope="row">Multi Login Count</th>
                                        <td v-for="(item, index) in memships" :class="user.memship.name==item.name ? 'text-center child-cell active' : 'text-center child-cell'" :key="index">
                                            {{ item.multiLoginCount }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-center" scope="row">Unlimited Movies</th>
                                        <td v-for="(item, index) in memships" :class="user.memship.name==item.name ? 'text-center child-cell active' : 'text-center child-cell'" :key="index">
                                            <i v-if="item.unLimitContent" class="ri-check-line ri-2x"></i>
                                            <i v-else class="ri-close-line i-close"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-center" scope="row">Watch on your laptop, tablet and phone</th>
                                        <td v-for="(item, index) in memships" :class="user.memship.name==item.name ? 'text-center child-cell active' : 'text-center child-cell'" :key="index">
                                            <i v-if="item.enbAllDevice" class="ri-check-line ri-2x"></i>
                                            <i v-else class="ri-close-line i-close"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-center" scope="row">HD(720~1080p) Video Quality</th>
                                        <td v-for="(item, index) in memships" :class="user.memship.name==item.name ? 'text-center child-cell active' : 'text-center child-cell'" :key="index">
                                            <i v-if="item.enbHDQuality" class="ri-check-line ri-2x"></i>
                                            <i v-else class="ri-close-line i-close"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-center" scope="row">UHD(4K+) Video Quality</th>
                                        <td v-for="(item, index) in memships" :class="user.memship.name==item.name ? 'text-center child-cell active' : 'text-center child-cell'" :key="index">
                                            <i v-if="item.enbUHDQuality" class="ri-check-line ri-2x"></i>
                                            <i v-else class="ri-close-line i-close"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><i class="ri-close-line i_close"></i></td>
                                        <td v-for="(item, index) in memships" class="text-center" :key="index">
                                            <a href="#" @click="purchaseMemship(item)" class="btn btn-hover mt-3">Purchase</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <div class="modal fade bd-example-modal-xl" id="payOption" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" style="background: var(--iq-body-bg)">
                    <div class="modal-header">
                        <h5 class="modal-title">Pay via Stripe</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <b-row>
                            <b-col lg="12">
                            <form role="form" action="http://localhost:8001/api/payment/add-funds/stripe" method="post" class="validation"
                                                                                data-cc-on-file="false"
                                                                                data-stripe-publishable-key="pk_test_51Hvx9gKTG3bBPojijmHjyeaa7KZ4QJ1WcyqlDiQFCEyX42YClQACvCBSS6G4ot4nNGj9OPtjdO6FwHXu6H44kS6Q00mu3S1EoT"
                                                                                id="stripe-form">
                                <input type="hidden" name="_token" :value="csrf">
                                <div class='form-row row'>
                                    <div class='col-lg-12 form-group required'>
                                        <label class='control-label'>Name on Card</label> <input
                                            class='form-control' size='4' type='text'>
                                    </div>
                                </div>
        
                                <div class='form-row row'>
                                    <div class='col-lg-12 form-group required'>
                                        <label class='control-label'>Card Number</label> <input
                                            autocomplete='off' class='form-control card-num' size='20'
                                            type='text'>
                                    </div>
                                </div>
        
                                <div class='form-row row'>
                                    <div class='col-xs-12 col-md-4 form-group cvc required'>
                                        <label class='control-label'>CVC</label> 
                                        <input autocomplete='off' class='form-control card-cvc' placeholder='e.g 415' size='4'
                                            type='text'>
                                    </div>
                                    <div class='col-xs-12 col-md-4 form-group expiration required'>
                                        <label class='control-label'>Expiration Month</label> <input
                                            class='form-control card-expiry-month' placeholder='MM' size='2'
                                            type='text'>
                                    </div>
                                    <div class='col-xs-12 col-md-4 form-group expiration required'>
                                        <label class='control-label'>Expiration Year</label> <input
                                            class='form-control card-expiry-year' placeholder='YYYY' size='4'
                                            type='text'>
                                    </div>
                                </div>
        
                                <div class='form-row row'>
                                    <div class='col-md-12 hide error form-group'>
                                        <div class='alert-danger alert'>Confirm payment info before you make a payment.</div>
                                    </div>
                                </div>
        
                                <div class="row">
                                    <div class='col-md-12 form-group'>
                                    <button class="btn btn-primary stripe" @click="payViaStripe($event)">Pay Now</button>
                                    </div>
                                </div>
                            </form>
                            </b-col>
                        </b-row>
                        <b-row>
                        </b-row>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
<script>
import { core } from '../../../config/pluginInit'
import axios from 'axios'
import { mapGetters } from 'vuex'
import authHeader from '../../../services/auth-header'
export default {
  name: 'PricingPlan',
  components: {
  },
  created () {
      this.csrf = document.querySelector('meta[name="csrf-token"]').content
  },
  mounted () {
    core.index()
    axios.get('http://localhost:8001/api/memship').then(
        response => {
            console.log(response)
            this.memships = response.data
            this.loading = true
        }
    )
    this.$loadScript("https://js.stripe.com/v2/");
    // var vm = this
    // this.$loadScript("https://www.paypalobjects.com/api/checkout.js")
    //     .then(() => {
    //         this.paypalCheckout()
    //     })
    //     .catch(() => {

    //     })
    this.paypalForm = $('#paypal-form')
    this.stripeForm = $('#stripe-form')
  },
  updated () {
      $("#my-table tr th").click(function () {
        $('#my-table tr th').children().removeClass('active');
        $(this).children().addClass('active');
        $("#my-table td").each(function () {
            if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            }
        });
        var col = $(this).index();
        $("#my-table tr td:nth-child(" + parseInt(col + 1) + ")").addClass('active');
      });
  },
  data () {
    return {
        loading: false,
        memships: [],
        memship_id: 0,
        csrf: null,
        fee: 8.99,
        paypalForm: null,
        stripeForm: null,
    }
  },
  computed: {
      ...mapGetters({
          user: 'Auth/userState',
      })
  },
  methods: {
      stripeHandleResponse (status, response) {
            if (response.error) {
                $('.error')
                    .removeClass('hide')
                    .find('.alert')
                    .text(response.error.message);
            } else {
                var token = response['id'];
                // this.stripeForm.find('input[type=text]').empty();
                // this.stripeForm.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
                // this.stripeForm.append("<input type='hidden' name='amount' value='" + this.fee + "'/>");
                // this.stripeForm.get(0).submit();

                let form = new FormData();
                let contact = {
                    stripeToken: token,
                    amount: this.fee
                }
                for (let field in contact) {
                    form.append(field, contact[field]);
                }
                this.$store.dispatch('Extra/payWithStripe', form).then(data => {
                    if (data.success) {
                        this.$store.dispatch('Auth/upgradeMembership', {memship_id: this.memship_id}).then((response) => {
                            if (response) {
                                alert("You upgraded membership successfully!")
                                $('#payOption').modal('hide')
                            } else {
                                alert("Sorry, upgrading membership failed because of some reasons")
                            }
                        })
                    }
                })
            }
      },
      payViaPaypal (e) {
          e.preventDefault()
          this.paypalForm.submit()
      },
      payViaStripe (e) {
            var $form         = $(".validation"),
                inputVal = ['input[type=email]', 'input[type=password]',
                                'input[type=text]', 'input[type=file]',
                                'textarea'].join(', '),
                $inputs       = $form.find('.required').find(inputVal),
                $errorStatus = $form.find('div.error'),
                valid         = true;
            $errorStatus.addClass('hide');
        
            $('.has-error').removeClass('has-error');
            $inputs.each(function(i, el) {
                var $input = $(el);
                if ($input.val() === '') {
                    $input.parent().addClass('has-error');
                    $errorStatus.removeClass('hide');
                    e.preventDefault();
                }
            });
  
            if (!$form.data('cc-on-file')) {
                e.preventDefault();
                Stripe.setPublishableKey($form.data('stripe-publishable-key'));
                Stripe.createToken({
                    number: $('.card-num').val(),
                    cvc: $('.card-cvc').val(),
                    exp_month: $('.card-expiry-month').val(),
                    exp_year: $('.card-expiry-year').val()
                }, this.stripeHandleResponse);
            }
      },
      purchaseMemship (memship) {
        $('#payOption').modal('show')
        this.fee = memship.feePerMonth
        this.memship_id = memship.id
      },
      paypalCheckout () {
        const vm = this
        paypal.Button.render({
            env: 'sandbox',
            client: {
                sandbox: 'AS3JSQLLgzQVRep3VZJx1Kzw6kqT7fEv-0K1trl7zef4gGJ77QUWraOsxDsv-VirjcqUlCNnuLl5E4Ug',
                production: 'EJlT5-YFhKKdR1K62Ug_H7MgEWgkxcZuLtSpVpXrE_dVTK3_AqkEL4iXdbr_-wiDcJvhJ4fc5OoDPyve'
            },

            locale: 'en_US',
            style: {
                size: 'medium',
                color: 'gold',
                shape: 'pill',
            },

            commit: true,

            payment: function(data, actions) {
                let returnUrl = "'http://localhost:8001/" + this.$router.currentRoute.path
                let amount = 0.01
                return new Promise((resolve, reject) => {
                    axios.post('/checkout-paypal', {
                        return_url: returnUrl,
                        amount:amount
                    }, { headers: authHeader() })
                    .then(res => {
                        resolve(res.data.id)
                    })
                    .catch(error => {
                        reject(error)
                    })
                })
                // return actions.payment.create({
                //     transactions: [{
                //         amount: {
                //             total: '0.01',
                //             currency: 'USD'
                //         }
                //     }]
                // });
            },

            onAuthorize: function(data, actions) {
                // return new Promise((resolve, reject) => {
                //     axios.post('/execute-paypal', {
                //         payer_id: data.payerID,
                //         payment_id: data.paymentID,
                //     }, { headers: authHeader() })
                //     .then(res => {
                //         resolve(res)
                //     })
                //     .catch(error => {
                //         reject(error)
                //     })
                // })
                return actions.payment.execute().then(function() {
                    window.alert('Thank you for your purchase!');
                });
            }
        }, '#paypal-button');
      }
  }
}
</script>

<style scoped>
 .paypal, .stripe {
     width: 100%;
     border-radius: 20px!important;
 }
</style>