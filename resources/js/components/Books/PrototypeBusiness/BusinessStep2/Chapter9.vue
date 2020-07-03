<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="//live.staticflickr.com/8801/28778702031_fba41794b4_h.jpg">

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
        padding-bottom: 10px;">Making comparisons (Comparatives)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <ol style="margin: 12px;">
      <li>
        The Airbus is larger than the Boeing 747.
      </li>
      <li>
        The 747-400 is more modern than the first 747.
      </li>
      <li>
        Modern planes are more economical than older ones.
      </li>
      <li>
        Air travel is safer than road travel.
      </li>
      <li>
        Flying a plane is more difficult than driving a car.
      </li>
      <li>
        Because of computers, modern planes are easier to fly.
      </li>
      <li>
        Planes are less reliable than high-speed trains.
      </li>
    </ol>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Make comparisons.
      </p>

      <ol style="margin: 12px;">
        <li>
           planes/trains (+fast)
        </li>
        <li>
           Ferraris/Fords (-economical)
        </li>
        <li>
           driving/flying (+dangerous)
        </li>
        <li>
           modern jets/older planes(+safe)
        </li>
      </ol>

      <p>
        Free response:<br />
        Work with a partner. Compare these products.
      </p>

      <v-container grid-list-md text-xs-center>
        <v-layout wrap align-content-center>

          <v-flex xs9 md5>
            <v-expand-transition>
            <v-card hover>

              <v-card-media src="https://marketplace.canva.com/cgiZU/MADyQ3cgiZU/1/s2/canva-white-and-red-mini-cooper-countryman-MADyQ3cgiZU.jpg">
              </v-card-media>

              <v-card-text>
                Mini
              </v-card-text>
            </v-card>
          </v-expand-transition>
          </v-flex>

          <v-flex xs9 md5>
            <v-expand-transition>
            <v-card hover>

              <v-card-media src="https://marketplace.canva.com/MADQ4-6pJ6o/1/screen_2x/canva-a-car-parked-MADQ4-6pJ6o.jpg">
              </v-card-media>

              <v-card-text>
                Porsche
              </v-card-text>
            </v-card>
          </v-expand-transition>
          </v-flex>

      </v-layout>
      </v-container>

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
                    Comparatives
                  </p>
                  <p>
                    Short adjectives<br />
                    cheap>cheap<b>er</b><br />
                    fast>fast<b>er</b>
                  </p>
                  <p>
                    Long adjectives<br />
                    difficult> <b>more</b> difficult<br />
                    expensive> <b>less</b> expensive
                  </p>
                  <p>
                    irregular adjectives<br />
                    good><b>better</b><br />
                    bad><b>worse</b><br />
                    far><b>further</b>
                  </p>
                  <p>
                    <b>than</b><br />
                    The Airbus A380 is <b>bigger than</b> the Boeing 747.
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
