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


<p>Using ordinal numbers
</p>

<li style="list-style-type: none;">When things or objects are placed in order, we use "ordinal numbers."
</li>

<li style="list-style-type: none;">Below is the list of ordinal numbers.
</li>

              <v-container>
                  <v-layout wrap align-content-center>

                      <v-flex xs6 lg3>

                      <v-card flat>


                              <v-card-text>
                                  1st - First
                              </v-card-text>

                              <v-card-text>
                                  2nd - Second
                              </v-card-text>

                              <v-card-text>
                                  3rd -   Third
                              </v-card-text>

                              <v-card-text>
                                  4th - Fourth
                              </v-card-text>

                              <v-card-text>
                                  5th - Fifth
                              </v-card-text>

                              <v-card-text>
                                  6th - Sixth
                              </v-card-text>
                          </v-card>
                      </v-flex>



                      <v-flex xs6 lg3>
                     <v-card flat>

                              <v-card-text>
                                  7th - Seventh
                              </v-card-text>

                              <v-card-text>
                                  8th - Eighth
                              </v-card-text>

                              <v-card-text>
                                  9th - Ninth
                              </v-card-text>

                              <v-card-text>
                                  10th - Tenth
                              </v-card-text>

                              <v-card-text>
                                  11th - Eleventh
                              </v-card-text>

                              <v-card-text>
                                  12th - Twelfth
                              </v-card-text>

                          </v-card>
                      </v-flex>

                      <v-flex xs6 lg3>
                     <v-card flat>

                              <v-card-text>
                                  13th - Thirteenth
                              </v-card-text>

                              <v-card-text>
                                  14th - Fourteenth
                              </v-card-text>

                              <v-card-text>
                                  15th - Fifteenth
                              </v-card-text>

                              <v-card-text>
                                  16th - Sixteenth
                              </v-card-text>

                              <v-card-text>
                                  17th - Seventeenth
                              </v-card-text>

                              <v-card-text>
                                  18th - Eighteenth
                              </v-card-text>
                          </v-card>
                      </v-flex>




                      <v-flex xs6 lg3>
                     <v-card flat>

                              <v-card-text>
                                  19th - Nineteenth
                              </v-card-text>

                              <v-card-text>
                                  20th - twentieth
                              </v-card-text>

                              <v-card-text>
                                  21 - Twenty-first
                              </v-card-text>

                              <v-card-text>
                                  22 - Twenty-second
                              </v-card-text>

                              <v-card-text>
                                  23 - Twenty-third
                              </v-card-text>

                              <v-card-text>
                                  30 - Thirtieth
                              </v-card-text>

                          </v-card>
                      </v-flex>
                  </v-layout>
              </v-container>





  <p>
    You can also use words like "then,"  "finally,” and "next” to explain the order or sequence of things or actions.
  </p>


</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Enhance!</h3>
     <div style="padding : 16px;">


<ol style="margin: 12px;">
  <li>On what floor is your apartment located?
  </li>

  <li> What is your order among the children in your family?
  </li>

  <li>Explain the steps on how to make kimchi.
  </li>

  <li>How do you go to your office from your house?
  </li>

  <li>What are the benefits of music?
  </li>

</ol>

</div>



<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You’re on the limelight!</h3>
     <div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>Do you like music? Why or why not?
  </li>

  <li>What are the benefits of music to your life?
  </li>

  <li> What is your favorite type of music? Why?
  </li>

  <li>What types of music you don’t like the most? Why?
  </li>

  <li>Who is your favorite singer? Why?
  </li>

  <li>Can you play any musical instrument?
  </li>

  <li>If yes, who taught you? How did you learn?
  </li>

  <li>If no, do you want to? What instrument? Why?
  </li>

  <li>Have you been to a music concert? Where?
  </li>

  <li>How did you feel?
  </li>

  <li>Do you like to sing or dance?
  </li>

  <li>What will the world be like without music?
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
