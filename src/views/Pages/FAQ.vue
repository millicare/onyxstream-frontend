<template>
  <b-container fluid class="mt-5">
    <b-row>
      <b-col lg="12">
        <div class="iq-accordion career-style faq-style  ">
          <iq-card :class="`iq-card iq-accordion-block ${index == 0 ? 'accordion-active' : ''}`" v-for="(item,index) in faqList" :key="index">
            <div class="clearfix">
              <div class="container">
                <b-row class="py-2" >
                  <b-col sm="12"><a class="accordion-title" @click="onCollapse" v-b-toggle="`accordian-${index}`"><span> {{ item.title }} </span> </a></b-col>
                </b-row>
              </div>
            </div>
            <b-collapse :id="`accordian-${index}`" :visible="index == 0 ? true : false" accordion="my-accordion" role="tabpanel" class="accordion-details">
              <div class="container">
                <p class="mb-0">{{ item.description }} </p>
              </div>
            </b-collapse>
          </iq-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'FAQ',
  mounted () {
    core.index()
  },
  data () {
    return {
      faqList: [
        {
          title: 'What is Onyx Streaming?',
          description: "Onyx Streaming offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want for one low monthly price. There's always something new on next with new TV shows and movies added weekly.",
          active: false
        },
        {
          title: 'How much does Onyx Streaming cost?',
          description: 'Stream on all your smart devices, TV, or laptop, for one low monthly fee. Plans range from $4.99 to $9.99 a month with no extra costs or no contracts.',
          active: false
        },
        {
          title: 'Where can I stream?',
          description: 'Watch on an unlimited number of devices anywhere or anytime. Sign into your Onyx Streaming account to watch instantly, on the web at onyxstreaming.com, from your personal computer or on any internet-connected device that offers the Onyx Streaming app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
          active: false
        },
        {
          title: 'How do I cancel',
          description: 'Onyx Streaming is flexible. There are no contracts or commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
          active: false
        }
      ]
    }
  },
  methods: {
    onCollapse (e) {
      const activeEl = document.getElementsByClassName('accordion-active')[0]
      activeEl.classList.remove('accordion-active')
      const el = e.target.closest('.iq-accordion-block')
      el.classList.add('accordion-active')
    }
  }
}
</script>
