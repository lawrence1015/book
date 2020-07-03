<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/front-view-young-girl-boy-talking-phones_23-2148465754.jpg">

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
        padding-bottom: 10px;">Making arrangements (will/shall : offers and suggestions)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
      <li style="list-style-type: none;">Michael: Hello.</li>
      <li style="list-style-type: none;">Sylvie:    Hello. Is that Michael?</li>
      <li style="list-style-type: none;">Michael: Speaking.</li>
      <li style="list-style-type: none;">Sylvie:    Hi Michael, It’s Sylvie in Brussels.</li>
      <li style="list-style-type: none;">Michael: Hi Sylvie, how are you?</li>
      <li style="list-style-type: none;">Sylvie:    Fine, thanks. You?</li>
      <li style="list-style-type: none;">Michael: Yeah, very well, thanks.</li>
      <li style="list-style-type: none;">Sylvie:    Are you getting ready for the conference next month?</li>
      <li style="list-style-type: none;">Michael: Um… not really. What about you?</li>
      <li style="list-style-type: none;">Sylvie:   Well, that’s what I’m phoning about, actually. How are you going to San Francisco? Are you flying direct from Dublin?</li>
      <li style="list-style-type: none;">Michael: Um… well, I still need to book my flight. But I’ll probably have to change in… either in London or… in Amsterdam. What about you?</li>
      <li style="list-style-type: none;">Sylvie:   Well, I still need to book my flight, from Amsterdam. So, um… </li>
      <li style="list-style-type: none;">Michael: Well, shall we catch the same flight?</li>
      <li style="list-style-type: none;">Sylvie:   Yeah, That’s what I thought, actually. Then we can work on the plane.</li>
      <li style="list-style-type: none;">Michael: Yeah, that makes sense. So I need to book a flight to Amsterdam, then. Shall I look into flights to San Francisco, as well?</li>
      <li style="list-style-type: none;">Sylvie:   Um… yeah, if that’s OK.</li>
      <li style="list-style-type: none;">Michael: Yeah, no problem. I’ll look on the Internet after lunch and, um… I’ll call you back. What about booking a hotel?</li>
      <li style="list-style-type: none;">Sylvie:   Um… Well, shall I contact the San Francisco office… see if they know any good places? I can get in touch with Rita.</li>
      <li style="list-style-type: none;">Michael: Yeah, good idea.</li>
      <li style="list-style-type: none;">Sylvie:   I’ll give her a call this afternoon, as soon as the office opens.</li>
      <li style="list-style-type: none;">Michael: Excellent. So I’ll look into flights. And, um… I’ll get back to you.</li>
      <li style="list-style-type: none;">Sylvie:   Great. Shall we speak at about four thirty?</li>
      <li style="list-style-type: none;">Michael: Yes, fine. I’ll call you then.</li>
      <li style="list-style-type: none;">Sylvie:   OK. Bye.</li>
      <li style="list-style-type: none;">Michael: Thanks for calling. Sylvie. Bye.</li>
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Answer the questions.
        </p>

        <ol style="margin: 12px;">
          <li>
            What do Sylvie and Michael decide to do?
          </li>
          <li>
            What does Michael say he’ll do today?
          </li>
          <li>
            What does Sylvie say she’ll do today?
          </li>
          <li>
            When do they arrange to speak again?
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
                <b>Will/shall</b> : offers and suggestions<br />
                Offers: <b>I’ll… Shall…?</b><br />
                We need more information about this.<br />
                <b>I’ll</b> look on the Internet.
                </p>
                <p>
                  We need to book our tickets.<br />
                  <b>Shall I</b> book them?
                </p>
                <p>
                  Suggestions: <b>Shall we…?</b><br />
                  When can we talk?<br />
                  <b>Shall we</b> speak this afternoon?
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
