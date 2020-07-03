<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/beautiful-girl-standing-airport_1157-22071.jpg">

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
        padding-bottom: 10px;">Checking in for a flight (Countable and uncountable nouns some/any/no)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      Stewardess: Hello.<br />
      Passenger:  Hello. Where did I put my ticket? Ah. There it is. Here you are.<br />
      Stewardess: Thank you. Do you have any ID?<br />
      Passenger:  Sorry?<br />
      Stewardess: Do you have any identification? Your passport or an identity card...<br />
      Passenger:  Oh yes. My passport. There you are.<br />
      Passenger:  Yes, that's fine.<br />
      Stewardess: The plane's quite full. The last flight was cancelled.<br />
      Passenger:  Right. So is this flight on time?<br />
      Stewardess: Um... it's delayed about ten minutes. Do you have any luggage?<br />
      Passenger:  Just one case.<br />
      Stewardess: A suitcase?<br />
      Passenger:  No, it's just a briefcase. I'll take it as hand luggage.<br />
      Stewardess: OK. So you have no luggage to check in.<br />
      Passenger:  No. I don't have any other bags.<br />
      Stewardess: OK, fine. Here's your boarding pass.<br />
      Passenger:  Thank you.<br />
      Stewardess: We're boarding in... thirty-five minutes. Gate twelve B.<br />
      Passenger:  Right. Um... are there any shops, after the security check? <br />
      Stewardess: No. There are some shops over there. Before you go through security.<br />
      Passenger:  Oh, I see. OK, thank you.<br />
      Stewardess: You're welcome.
    </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Answer the questions.
      </p>

      <ol style="margin: 12px;">
        <li>
          What identification does the man have?
        </li>
        <li>
          Does he get a window seat?
        </li>
        <li>
          Why is the plane full?
        </li>
        <li>
          Is the flight on time?
        </li>
        <li>
          Does the man have any luggage to check in?
        </li>
        <li>
          Which gate does he need to go to?
        </li>
        <li>
          Where are the shops?
        </li>
      </ol>
      <p>
        Free response:<br />
        Talk about your bad or funny experiences of travelling by plane.
      </p>
      <p>
        - delays<br />
        - cancellations<br />
        - lost luggage<br />
        - missing a flight><br />
        - forgetting your ticket or passport
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
                    some/any/no
                  </p>
                  <p>
                    의문형: any<br />
                    Do you have <b>any</b> information about the flight?
                  </p>
                  <p>
                    긍정문: some<br />
                    There are <b>some</b> passengers at the check-in.
                  </p>
                  <p>
                    부정문: no 또는 any<br />
                    I have <b>no</b> hand luggage.<br />
                    I don't have <b>any</b> hand luggage.
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
