<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/cheerful-confident-young-female-hotel-receptionist-talking-mobile-phone_23-2148033352.jpg">

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
        padding-bottom: 10px;">Making telephone calls (will:spontaneous decisions and offers)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

     <p>
       Call1<br />
       Reception: Hello. Camden Marketing.<br />
       Rob:         Hello. Could I speak to Louise Miller, please?<br />
       Reception: Who's calling, please?<br />
       Rob:         Rob Sears.<br />
       Reception: Her line's busy at the moment.<br />
       Rob:         Oh, right. Um... OK. I'll call back later.<br />
       Reception: OK.<br />
       Rob:         Bye.<br />
       Reception: Bye.
     </p>
     <p>
       Call 2<br />
       Reception: Hello. Camden Marketing.<br />
       Rob:         Hello. Louise Miller, please. It's Rob Sears.<br />
       Reception: One moment, please. I'm afraid she's still on the phone. Would you like to hold?<br />
       Rob:         Um... Could you ask her to call me back?<br />
       Reception: Yes.<br />
       Rob:         She has my number.<br />
       Reception: Could I take your name again?<br />
       Rob:         Yeah. Rob Sears. S-E-A-R-S.<br />
       Reception: OK. I'll give her the message as soon as possible.<br />
       Rob:         OK. Thanks very much. Bye.<br />
       Reception: Bye.
     </p>
     <p>
       Call 3<br />
       Rob:      Hello.<br />
       Louise : Hello. Is that Rob?<br />
       Rob:      Yes, speaking.<br />
       Louise : Hi, Rob. It's Louise.<br />
       Rob:      Oh hi, Louise. Thanks for calling back.<br />
       Louise : You're welcome. What can I do for you?
     </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Fill in the gaps in the telephone conversation.
      </p>

      <p>
        A: Could I ( &emsp; &emsp; ) to Nathalie, please?<br />
        B: Who's ( &emsp; &emsp; &emsp; &emsp; ),please?<br />
        A: ( &emsp; &emsp; )'s Jessica Keen.<br />
        B: Just a ( &emsp; &emsp; &emsp; &emsp; ),please. Would you like to ( &emsp; &emsp; )?<br />
        A: Yes, please.1<br />
        B: Sorry. I'm ( &emsp; &emsp; ) she's not in her office.<br />
        A: OK, I'll call her ( &emsp; &emsp; ) later.<br />
      </p>
      <p>
        Free response:<br />
        Do you or your colleagues speak English on the telephone? Who do you speak to?
      </p>

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
                    <b>will:</b> spontaneous decisions and offers
                  </p>
                  <p>
                    <b>I'll</b> give her the message.<br />
                    <b>She'll</b> call you back.<br />
                    (I'll=I will)
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
