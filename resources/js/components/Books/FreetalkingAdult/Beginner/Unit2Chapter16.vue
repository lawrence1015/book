<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
  <div style="padding : 16px;">

<h3 style="padding-top: 7px;
      margin-left: -18px;
      margin-right: -18px;
      padding-left: 10px;
      padding-bottom: 10px;
      padding-top: 15px;
      margin-top: 40px;
      background-color: #a7d7c5;">Tips</h3>
<div style="padding : 16px;">

  <p>Using "would"
  </p>

  <p>Would is the past tense of will. However, it can also be used to express a desire or a wish.
  </p>

  <p>Ex. I would like to give you a present.<br>
     It means the same with 'I want to give you a present.
  </p>


  </div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
  Who would you like to give the following blossoms to and why?
</p>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="//live.staticflickr.com/5514/10425735826_0501359db5_k.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Gardenia – “You are lovely.”
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MADQ5ZT21Eg/1/screen/canva-untitled-MADQ5ZT21Eg.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Hydrangea – “Thank you for understanding.”
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MADQ5Ru1nD0/1/screen/canva-untitled-MADQ5Ru1nD0.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Apple Blossoms – “I will protect you.”
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MADQ5jELNZM/1/screen_2x/canva-untitled-MADQ5jELNZM.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Camellia – “I miss you.”
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MADGyK9m8Y0/4/screen_2x/canva-red-rose-with-silver-ring-macro-detail-MADGyK9m8Y0.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Red roses – “I love you.”
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MADGxxjSikw/4/screen_2x/canva-purple-cluster-petal-flower-MADGxxjSikw.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Chrysanthemum – “You are a wonderful friend.”
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>


</div>

</div>


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

<style lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}



body{

  font-size: 16px;
}

</style>
