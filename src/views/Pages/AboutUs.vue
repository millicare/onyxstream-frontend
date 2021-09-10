<template>
  <b-container fluid>
    <b-row class="mt-5">
      <b-col lg="12">
        <iq-card>
          <template v-slot:body>
            <b-row>
              <b-col lg="2"></b-col>
              <b-col lg="8">
                <h2>About Us</h2>
                <p><h5> If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Onxy Streaming’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</h5></p>

                <p><h5>The term ‘Onyx Streaming’ or ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website.</h5></p>

                <p><h5>The use of this website is subject to the following terms of use: </h5></p>
                <p><h5> The content of the pages of this website is for your general information and use only. It is subject to change without notice.<br> This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties</h5></p>
                <p><h5>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.
                 You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</h5></p>
                <p><h5>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.<br>
                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which f orms part of these terms and conditions.</h5></p>
                <p><h5>All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
                Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.<br>
                From time to time this website may also include links to other websites.These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).<br>
                Your use of this website and any dispute arising out of such use of the website is subject to the laws.</h5></p>
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
</style>>

</style>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'AboutUs',
  mounted () {
    core.index()
  },
}
</script>
