<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ40qcmqo/1/screen/canva-zakynthos-island-in-greece-MADQ40qcmqo.jpg">

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
        padding-bottom: 10px;">Talking about holidays (Past simple:irregular verbs)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      Hanna: Hi Steven.<br />
      Steven: Oh hi, Hanna. How are you?<br />
      Hanna: OK thanks. And you?<br />
      Steven: Not too bad. The first day back is never easy, but...<br />
      Hanna: Oh, of course, you're just back from holiday. I bet it was quiet in the office last week- I was in India, Martin was in Mexico,
      you were... where did you go?<br />
      Steven: Greece. Crete.<br />
      Hanna: Crete, OK. So how was it?<br />
      Steven: Fantastic. We really enjoyed it. We had two days in Athens, as well.<br />
      Hanna: Right. So your flight was to Athens?<br />
      Steven: Yeah. We flew to Athens. We stayed in a hotel there for... just one night. Then we took a ferry to Crete.<br />
      Hanna: The ferry left from Athens, then.<br />
      Steven: Yeah. It went direct to Chania in Crete, which was the town where we stayed, so...<br />
      Hanna: And did you stay in a hotel?<br />
      Steven: No, we rented an apartment-nothing special. We didn't spend a lot of time in it, really. We ate out every night.
      The nightlife was good-lots of restaurants and bars,and,er... the food was generally good... and it cost very little for a good meal.<br />
      Hanna: Mmm. So you enjoyed the food, and drank Greek wine, and... <br />
      Steven: Yeah. It was... all very relaxing.<br />
      Hanna: And how much of the island did you see? Did you travel around?<br />
      Steven: Yeah. We saw quite a few different places.<br />
      Hanna: So you rented a car and drove around, then...<br />Steven: No, no. We... we went on coach trips-organised trips-on a couple of days.
      And we travelled around by bus as well. You know, on... just on public buses.
      I don't speak a word of Greek, but... you just bought your ticket and... it was no problem.<br />
      Hanna: Sounds good.<br />
      Steven: We came back on Friday. So I had the weekend at home. And now...back to work! So how was your trip?
    </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Write the past simple form of the verbs.
      </p>

      <ol style="margin: 12px;">
        <li>
          We  ( &emsp; ) back last night. (fly)
        </li>
        <li>
          I  ( &emsp; ) this CD on my holiday.(buy)
        </li>
        <li>
          IS  ( &emsp; ) home last Friday.(come)
        </li>
        <li>
          We  ( &emsp; ) a ferry to the island. (take)
        </li>
      </ol>

      <p>
        Free response:<br />
        Talk about past holiday with a partner.<br />
        Where/What/How did...?
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
                    Past simple: irregular verbs
                  </p>
                  <p>
                    be:was/were<br />
                    become/became<br />
                    come/came<br />
                    do/did<br />
                    drive/drove<br />
                    leave/left<br />
                    see/saw<br />
                    send/sent<br />
                    sleep/slept<br />
                    ...
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
