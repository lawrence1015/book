<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv7jcIQA/6/screen_2x/canva-street-under-cloudy-sky-MADGv7jcIQA.jpg">

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
        padding-bottom: 10px;">Making plans 1 (Suggestions: Shall I/we...? Let's...)

      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <p>
      Kristi: So, where shall we meet?<br />
      Akio:  Um...well, I can come to your office, or you can come here.<br />
      Kristi: Well, you came here last time, so shall I come to Tokyo?<br />
      Akio:  Yes, OK. Yeah, then you can meet our new design manager.<br />
      Kristi: Oh, yes. Good idea. OK, so let's meet in Tokyo.<br />
      Akio:  OK. How many days do we need?<br />
      Kristi: Hmm...good question.<br />
      Akio:  Shall we plan the meeting, first? Then we can decide when to meet, and how long we need...<br />
      Kristi: Yes, OK.<br />
      Akio:  I wrote a list, this morning, of the things I'd like to look at with you.<br />
      Kristi: Right. Good.<br />
      Akio:  So, um... well, Shall I email it to you? Then you can look at it, and we can talk later.<br />
      Kristi: Yes, OK, good idea. Let's do that.<br />
      Akio:  I'll send it now. And I'll call back, um... When shall I call you?<br />
      Kristi: Let's talk again in an hour.<br />
      Akio:  OK, fine. Bye.
    </p>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Put the words in order. Make sentences.
      </p>

      <ol style="margin: 12px;">
        <li>
          meeting/shall/where/have/we/the?<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          go/by/to/train/the/let's/conference.<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          shall/when/visit/the/we/factory?<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
      </ol>
      <p>
        Free response:<br />
        Work with a partner. Make suggestions about these things:
      </p>
      <p>
        - go for lunch.<br />
        - meet tomorrow<br />
        - talk next week<br />
        - discuss this now<br />
        - decide later<br />
        - put on the agenda
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
                    Making suggestions
                  </p>
                  <p>
                    <b>Shall+ I/we</b> + infinitive<br />
                    <b>Shall</b> we meet next month?<br />
                    <b>Shall</b> I call tomorrow?<br />
                    Where <b>shall</b> we meet?
                  </p>
                  <p>
                    Let's+ infinitive<br />
                    <b>Let's</b> go now.<br />
                    <b>Let's</b> meet next week.
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
