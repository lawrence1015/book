<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGyH6cBB0/4/screen_2x/canva-orange-and-green-label-airplane-ticket-MADGyH6cBB0.jpg">

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
      <li style="list-style-type: none;">Assistant:  GlenAir, good afternoon. How can I help you?</li>
      <li style="list-style-type: none;">Customer:  Hello. I’d like to fly to Lisbon at the end of May.</li>
      <li style="list-style-type: none;">Assistant:  Lisbon?</li>
      <li style="list-style-type: none;">Customer:  Yes.</li>
      <li style="list-style-type: none;">Assistant:  What date are you planning to leave?</li>
      <li style="list-style-type: none;">Customer:  On May the twenty-fourth.</li>
      <li style="list-style-type: none;">Assistant:  May the twenty-fourth. Is it a return flight?</li>
      <li style="list-style-type: none;">Customer:  A return, yes. I want to come back on the thirty-first.</li>
      <li style="list-style-type: none;">Assistant:  The thirty-first of May… OK, the cheapest fare’s fifty-five pounds.</li>
      <li style="list-style-type: none;">Customer:  That’s for a return.</li>
      <li style="list-style-type: none;">Assistant:  Yes.</li>
      <li style="list-style-type: none;">Customer:  OK. Um… and can I change the date if I need to?</li>
      <li style="list-style-type: none;">Assistant:  No. For that fare, you can’t change the booking, and there’s no refund if you cancel.</li>
      <li style="list-style-type: none;">Customer:  Right. So fifty-five pounds. And are there any extra charge? For airport tax, or…</li>
      <li style="list-style-type: none;">Assistant:  No, that’s included.</li>
      <li style="list-style-type: none;">Customer: OK. Um… oh, that’s the other question-what’s the maximum baggage allowance? Because I want to take a surfboard with me.</li>
      <li style="list-style-type: none;">Assistant:  Right. Well, the maximum allowance is twenty kilograms. The excess baggage charge is six pounds per kilogram, but for a surfboard…</li>
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <ol style="margin: 12px;">
          <li>
            Where does he want to go?
          </li>
          <li>
            What type of ticket does he want?
          </li>
          <li>
            What item of luggage does he want to take?
          </li>
          <li>
            Complete the information : Date of departure:<br />
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; &thinsp; Date of return trip:<br />
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; &thinsp; Price of ticket:<br />
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; &thinsp; Baggage allowance:<br />
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; &thinsp; Excess baggage charge:
          </li>
        </ol>

        <p>
          Free response:<br />
          Discuss air travel.<br />
          Which airlines do you use?<br />
          Which is your favorite airline?<br />
          Do you often fly long distances?<br />
          Do you like travelling by plane? Why/Why not?
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
                Useful language<br />
                I’d like to book flight to Barcelona.<br />
                If you book two months in advance there’s a 10% discount.<br />
                Are there any extra charges or is everything included in the fare?<br />
                If I cancel the booking can I get refund?<br />
                If you go over the baggage allowance, the excess baggage charge is ten pounds per kg.
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
