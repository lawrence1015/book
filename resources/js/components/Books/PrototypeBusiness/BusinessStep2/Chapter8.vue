<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ5tITPus/1/screen_2x/canva-people-at-a-cafe-MADQ5tITPus.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(254, 183, 43, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Talking about the weather and climate 2 (Review of present and past tenses)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      Nigel:   Well, it's a beautiful day.<br />
      Olivier: Yeah, it's nice to see the sun. It rained nearly every day last week. <br />
      Nigel:    Really?<br />
      Olivier: Yeah. Not a very good start to the summer.<br />
      Nigel:    Does it normally rain much here, in July?<br />
      Olivier: No. You sometimes get one or two wet days. Or thunderstorms, sometimes. But, um... anyway, the sun's shining
               today, that's the main thing.<br />
      Nigel:    Yes. Ah... The waiter's coming with our bottle of water.<br />
      Olivier: Thank you. Would you like some?<br />
      Nigel:    Yes, please<br />
      Olivier: So, is this your first visit to Marseille?<br />
      Nigel:    No. I came here once before, about two years ago. In winter. It was... It was quite warm, actually.<br />
      Olivier: Yeah, winders are great here. Before, when I lived in Paris, I always hated winter. But here, it's, um...
            If there's no wind, and the sun's out, you can wear a T-shirt. We get a cold wind, sometimes, called the Mistral.
            It blows down from the mountains... from the Alps. But, um... if it's sunny, and there's no wind, then it's...
            it's quite warm.<br />
      Nigel:    Well, my boss phoned me, from the UK office, half an hour ago. Apparently, it's raining there at the moment.<br />
      Olivier: Oh dear.<br />
      Nigel:    So, here's to our colleagues in London!<br />
      Olivier: Yes. Cheers!<br />
      Nigel:    Cheers!
    </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Answer the questions.
      </p>

      <p>
        - What's the weather like today?<br />
        - What city are the colleagues in?<br />
        - What's the Mistral?<br />
        - What's the weather like in London today?<br />
        Free response:<br />
        Talk about your past experiences of extreme weather:<br />
        - very hot weather<br />
        - very cold weather<br />
        - heavy snow<br />
        - heavy rain<br />
        - strong winds
      </p>

    </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Self Study</h3>
    <div style="padding : 16px;">


      <p>
        Notes
      </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#527318">
                <v-card-text class="px-10">
                  <p>
                    The climate
                  </p>
                  <p>
                    It rains a lot in the UK in April.<br />
                    It's open foggy in November.<br />
                  </p>
                  <p>
                    The weather now<br />
                    It's freezing.<br />
                    It's snowing.
                  </p>
                  <p>
                    The weather in the past<br />
                    It rained last night.<br />
                    It was windy yesterday.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

      </p>

    </div>


  </div>


</v-layout>
</v-container>
</v-layout>
</v-container>
</div>



</template>



<script>
export default {

  props: ['fontSize'],

  data(){

    return{


    }

  },


  beforeMount(){


  },

  methods:{


  },

  watch:{

    fontSize(current, old){

      console.log(current, 'current')
      console.log(old, 'previous')


    }
  }
}
</script>

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

li{


}

body{

  font-size: 16px;
}

.border:before {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 40px 40px 0px 0px;
  transform: rotate(180deg);
  border-color: transparent #899857 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #899857;
  padding-left: 10px;

}
.profile {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top : 330px;
  padding-left : 10px;
  padding-bottom: 10px;
}


</style>
