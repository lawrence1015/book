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

<p>
Study the sentences on the right box.
</p>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="images/perfect-reading-weather.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Desert
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>



<li style="list-style-type: none;">Past
</li>

<li style="list-style-type: none;">What was the weather yesterday?
</li>

<li style="list-style-type: none;">It was a sunny day.
</li>

<li style="list-style-type: none;">It was sunny.
</li>

<li style="list-style-type: none;">The weather was sunny.
</li>

<br>

<li style="list-style-type: none;">Present
</li>

<li style="list-style-type: none;">What is the weather today?
</li>

<li style="list-style-type: none;">It is a sunny day.
</li>

<li style="list-style-type: none;">It is sunny.
</li>

<li style="list-style-type: none;">The weather is sunny.
</li>

<br>

<li style="list-style-type: none;">Future
</li>

<li style="list-style-type: none;">What will the weather be tomorrow?
</li>

<li style="list-style-type: none;">It will be a sunny day.
</li>

<li style="list-style-type: none;">It will be sunny
</li>

<li style="list-style-type: none;">The weather will be sunny.
</li>

<br>




</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Enhance!</h3>
<div style="padding : 16px;">


<p>Ask the appropriate questions based on the given
  situation and give your answers (in three forms) based on the picture.
</p>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="images/perfect-reading-future1.jpg">
                                </v-card-media>

                                <v-card-text>
                                  1. FUTURE
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="images/perfect-reading-past.jpg">
                                </v-card-media>

                                <v-card-text>
                                  2. PAST
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="images/perfect-reading-present.jpg">
                                </v-card-media>

                                <v-card-text>
                                  3. PRESENT
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="images/perfect-reading-future2.jpg">
                                </v-card-media>

                                <v-card-text>
                                  4. FUTURE
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

</div>



<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>What is your favorite type of weather? Why?
  </li>

  <li>What do you like to do during this type of weather?
  </li>

  <li>What is your least favorite day? Why not?
  </li>

  <li>What is usually the weather in March? September? December?
  </li>

  <li>What do you wear on a sunny weather?
  </li>

  <li>What do you wear on a rainy weather?
  </li>

  <li>What do you wear on a chilly weather?
  </li>

  <li>Do you like to eat certain food at a certain weather?
  </li>

  <li>Do you think the weather affects the way people feel?
  </li>

  <li>Where do you get your weather information?
  </li>

  <li>Have you been caught in bad weather? What did you do?
  </li>



</ol>

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
