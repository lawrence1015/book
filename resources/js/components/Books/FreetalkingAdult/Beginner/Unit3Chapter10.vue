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


<p>In English grammar, when you use multiple adjectives in one sentence, you must follow this sequence:
</p>

<ol style="margin: 12px;">
  <li>Determiners - a, an, the, my, your, several, three, five, etc.
  </li>

  <li>Observations - beautiful, dirty, smooth, etc.
  </li>

  <li>Size - small, big, huge, etc.
  </li>

  <li>Shape - circular, round, square, rectangle, etc.
  </li>

  <li>Age - new, old, ancient, etc.
  </li>

  <li>Color - blue, yellow, red, etc.
  </li>

  <li>Origin - Italian, French, American, etc.
  </li>

  <li>Material- silver, copper, bronze, silk, wood, etc.
  </li>

</ol>

<p>
Examples
</p>

<ol style="margin: 12px;">

  <li>I saw three, lovely, lacy, yellow Mexican dresses!
  </li>

  <li>We bought a small, circular American tin clock
  </li>

  <li>The five beautiful,   long, pink, French silk ties caught my attention!
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
Make sentences using the given words and pictures. Arrange the adjectives in the proper sequence.
</p>


<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MADGxvIz9M8/4/screen_2x/canva-focus-photo-of-4-wooden-pawn-figurine-MADGxvIz9M8.jpg ">
                                </v-card-media>

                                <v-card-text>
                                    little/lovely/ wooden/British/four/
                                    <li style="list-style-type: none;">Figurines
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="//live.staticflickr.com/5487/9642885512_980e447e83_c.jpg">
                                </v-card-media>

                                <v-card-text>
                                    purple/two/satin
                                    <li style="list-style-type: none;">Bubble Dresses
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MAAgcGT391U/1/screen_2x/canva-sunbathing-people-at-bondi-beach-MAAgcGT391U.jpg">
                                </v-card-media>

                                <v-card-text>
                                    young/thousand/Australian
                                    <li style="list-style-type: none;">People
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MADGydKku7A/4/screen_2x/canva-selective-focus-photography-of-jelly-beans-on-jar-MADGydKku7A.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Canadian/sweet/a bowl of/colorful
                                    <li style="list-style-type: none;">Jelly beans
                                    </li>
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
  <li>What’s your most prized possession?
  </li>

  <li>Can you describe it?
  </li>

  <li>Why is it special to you?
  </li>

  <li>How will you feel if you lose it?
  </li>

  <li>What will you do if a friend borrows it from you?
  </li>

  <li>What if a friend borrowed and lost it?
  </li>

  <li>If you can give something to your parents that you want them to prize, what will it be? How about  to  your wife/husband/children?
  </li>

  <li>Do you have something from your ancestors?
  </li>

  <li>What do you think makes a thing so precious?
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
