<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Sinclair_C5_with_high_vis_mast.jpg/1051px-Sinclair_C5_with_high_vis_mast.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(140, 103, 90, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Discussing past performance (past simple, too/enough)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
     The Sinclair C5 was a small electric vehicle with a top speed of 25kph.
     The battery was big enough for trips of 10-20km, and there were pedals,
     just in case there wasn't enough power to get you home.
     The idea for the C5 was based on a simple fact: most car trips are just
     a few kilometers, with only one person in the vehicle. In other words,
     cars are too big for their main use. The C5's small size and low cost
     weren't the only advantages: with electric power, pollution was zero.
     So why was the C5 such a flop? Was it too advanced for the consumers of 1985?
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Change the sentences. Use the adjectives and the word in brackets.
        </p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#F2CBBD">
                <v-card-text class="px-10">
                  <center>
                  <p>
                    <b>
                      Expensive&emsp;&emsp;&emsp; dangerous&emsp;&emsp;&emsp; low&emsp;&emsp;&emsp; fast&emsp;&emsp;&emsp; simple
                    </b>
                  </p>
                </center>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

        <ol style="margin: 12px;">
          <li>
            That car is too slow. (enough)<br />
            ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
          </li>
          <li>
            This is not cheap enough. (too)<br />
            ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
          </li>
          <li>
            The price of this product is too high. (enough)<br />
            ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
          </li>
          <li>
            These products aren’t safe enough. (too)<br />
            ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
          </li>
          <li>
            The design is too complicated. (enough)<br />
            ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
          </li>
        </ol>

        <p>
           Free response:<br />
           Why do you think the Sinclair C5 was a flop?
        </p>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Self Study</h3>
      <div style="padding : 16px;">


          <p>
            Notes
          </p>

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#F2CBBD">
                  <v-card-text class="px-10">
                <p>
                  Too/enough<br />
                  The battery was <b>too small.</b><br />
                  The battery was<b>n’t big enough</b>
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
  border-color: transparent#402B24 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background:#402B24;
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
