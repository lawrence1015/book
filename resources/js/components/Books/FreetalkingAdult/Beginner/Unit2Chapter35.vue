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


<p>Gemstones are thought to bring good luck. Which do you want to have? To whom do you want to give these to?
</p>

<p>
Would is the past tense of will.  However, it can also be used to express a desire or a wish.
</p>

<li style="list-style-type: none;">Ex. I would like to give you a present.
</li>

<li style="list-style-type: none;">It means the same with 'I want to give you a present.
</li>

</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
  Gemstones are thought to bring good luck. Which do you want to have? To whom do you want to give these to?
</p>


<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MADGx1lOlcI/4/screen/canva-ring-on-white-surface-MADGx1lOlcI.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Amethyst
                                    <li style="list-style-type: none;">Relieves stress and depression; Promotes peace
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

                                <v-card-media src="//live.staticflickr.com/6025/5960175226_79e7c0ee68_k.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Turquoise
                                    <li style="list-style-type: none;">Attracts friendships, luck, and happiness; releases shame and guilt
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

                                <v-card-media src="//live.staticflickr.com/3280/2933084852_fa1cae829b.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Aventurine
                                    <li style="list-style-type: none;">Good luck in financial matters
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

                                <v-card-media src="//live.staticflickr.com/2266/2505030324_7bbc80053b_h.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Jade
                                    <li style="list-style-type: none;">Peace, harmony, and wisdom
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

                                <v-card-media src="//live.staticflickr.com/3844/14881258173_9d379be701_k.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Aquamarine
                                    <li style="list-style-type: none;">Courage, decreases anxiety, and fear
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

                                <v-card-media src="//live.staticflickr.com/6120/6418402303_195501cbd2_k.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Citrine
                                    <li style="list-style-type: none;">Promotes patience and optimism; good for business
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

                                <v-card-media src="//live.staticflickr.com/65535/47605213602_18f42753a9_k.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Ruby
                                    <li style="list-style-type: none;">Protection from misfortune and bad health; promotes love
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

                                <v-card-media src="//live.staticflickr.com/5561/14740491878_9d05eb21eb_k.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Topaz
                                    <li style="list-style-type: none;">Calms bad temper; gives strength, focus, and confidence
                                    </li>
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
