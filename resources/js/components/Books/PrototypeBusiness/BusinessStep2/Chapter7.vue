<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGxqLWB8E/4/screen_2x/canva-green-and-yellow-outdoor-playhouse-with-slide-MADGxqLWB8E.jpg">

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
        padding-bottom: 10px;">Talking about the weather and climate 1 (Review of present and past tenses)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <ol style="margin: 12px;">
      <p>
      <li>
        Dear Celia and Alex,<br />
        I hope you had a good weekend. I wanted to take the kids to the park, but the weather was miserable.
        It was cold (two degrees) and foggy all day on Saturday, then it rained all day on Sunday.
        Typical weather for the season. And now I'm back at work, it's a beautiful sunny day! What's the weather like with you?
        Are you both OK for the conference call later today?<br />
        <br />
        Seb

      </li>
    </p>
    <p>
      <li>
        Hi Seb,<br />
        Yes, I'm OK for the call. It's cloudy here this morning, and it's raining a bit. It's very hot and humid, though.
        It looks like we'll get a thunderstorm. I'm actually pleased to be in a cool office, with air-conditioning!
        The system in my apartment isn't working.<br />
        <br />
        Celia
      </li>
    </p>
    <p>
      <li>
        But it's minus 18 degrees here at the moment, so it's not a problem! It's quite windy as well, so it feels even colder.
        Seb, you said it was 'cold' on Saturday (two degrees). Here, when the temperature's about zero and it's snowing,
        people say it's 'warn'! I guess two degrees is 'absolutely freezing' for you, Celia!
        I look forward to the conference call later.<br />
        <br />
        Alex<br />
      </li>
    </p>
    </ol>

    <v-container grid-list-md text-xs-center>
      <v-layout wrap align-content-center>

        <v-flex xs8 md4>
          <v-expand-transition>
          <v-card hover>

            <v-card-media src="https://marketplace.canva.com/MADGxsrr4YU/4/screen_2x/canva-high-rise-building-at-golden-hour-MADGxsrr4YU.jpg">
            </v-card-media>

            <v-card-text>
              Manila
            </v-card-text>
          </v-card>
        </v-expand-transition>
        </v-flex>

        <v-flex xs8 md4>
          <v-expand-transition>
          <v-card hover>

            <v-card-media src="https://marketplace.canva.com/MADGyepflCo/4/screen_2x/canva-lighted-classic-cathedral-photo-MADGyepflCo.jpg">
            </v-card-media>

            <v-card-text>
              Milan
            </v-card-text>
          </v-card>
        </v-expand-transition>
        </v-flex>

        <v-flex xs8 md4>
          <v-expand-transition>
          <v-card hover>

            <v-card-media src="https://marketplace.canva.com/MADQ5N0yA7E/1/screen/canva-a-city-view-MADQ5N0yA7E.jpg">
            </v-card-media>

            <v-card-text>
              Moscow
            </v-card-text>
          </v-card>
        </v-expand-transition>
        </v-flex>

    </v-layout>
    </v-container>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Read the emails again. One lives in Manila, one lives in Milan and one lives in Moscow.<br />
        Which person is from which city?
      </p>

      <ol style="margin: 12px;">
        <li>
           ( &emsp; &emsp; &emsp; &emsp; ) is from Manila.
        </li>
        <li>
           ( &emsp; &emsp; &emsp; &emsp; ) is from Milan.
        </li>
        <li>
           ( &emsp; &emsp; &emsp; &emsp; ) is from Moscow.
        </li>
      </ol>

      <p>
        Free response:<br />
        Talk about the weather in your country/ region.
      </p>
      <p>
        - What's the weather like today?<br />
        - What was it like yesterday?<br />
        - What's the weather usually like in:<br />
        January? April? August?
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
                    Review of present and past tenses.
                  </p>
                  <p>
                    Present continuous<br />
                    It's raining at the moment.
                  </p>
                  <p>
                    Present simple<br />
                    It rains a lot in winter.
                  </p>
                  <p>
                    Past simple<br />
                    It rained yesterday.
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
