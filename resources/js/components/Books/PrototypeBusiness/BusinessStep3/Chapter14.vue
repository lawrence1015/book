<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGyf8N3NE/4/screen_2x/canva-person-holding-white-stylus-MADGyf8N3NE.jpg">

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
        padding-bottom: 10px;">Confirming arrangements (present tenses as future)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
      <li style="list-style-type: none;">Naomi:  So, when’s the best time to meet, for you? I’m free next week.</li>
      <li style="list-style-type: none;">Tom:    Um… I can’t make it next week. I’m… I’m busy all week. The week after’s OK for me.</li>
      <li style="list-style-type: none;">Naomi:  The week after. What about Monday? Monday, December the twelfth?</li>
      <li style="list-style-type: none;">Tom:    Yes, that’s OK for me.</li>
      <li style="list-style-type: none;">Naomi:  In the morning?</li>
      <li style="list-style-type: none;">Tom:    Yeah.</li>
      <li style="list-style-type: none;">Naomi:  Half past nine?</li>
      <li style="list-style-type: none;">Tom:    Nine thirty? Yeah, that’s fine.</li>
      <li style="list-style-type: none;">Naomi:  OK. Monday, December the twelfth at nine thirty, then.</li>
      <li style="list-style-type: none;">Tom:    And can you send me an agenda?</li>
      <li style="list-style-type: none;">Naomi:  Yes, I’ll write an agenda this morning, and send it to you this afternoon.</li>
      <li style="list-style-type: none;">Tom:    Excellent. OK, so I look forward to receiving that, and I’ll see you on the twelfth.</li>
      <li style="list-style-type: none;">Naomi:  OK. I look forward to seeing you then.</li>
      <li style="list-style-type: none;">STom:    OK. Bye.</li>
      <li style="list-style-type: none;">Naomi:  Bye.</li>
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Complete the information.
        </p>

        <ol style="margin: 12px;">
          <li>
            Date of meeting: <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>
          </li>
          <li>
            Time of meeting: <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>
          </li>
          <li>
            Document to email: <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>
          </li>
        </ol>

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
                Present tenses as future
                </p>
                <p>
                  Future timetables/schedules: present simple<br />
                  The flight lands at 11.00.
                </p>
                <p>
                  Future arrangements: present continuous<br />
                  I’m flying at San Francisco next month.
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
