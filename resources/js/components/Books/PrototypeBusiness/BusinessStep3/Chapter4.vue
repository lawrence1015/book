<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGyDSYeX4/4/screen_2x/canva-close-up-photography-of-white-poodle--MADGyDSYeX4.jpg">

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
        padding-bottom: 10px;">Discussing work in progress (Present continuous)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
      <li style="list-style-type: none;">Vanessa:  So where are you working? exactly. in France?</li>
      <li style="list-style-type: none;">John:       In the Jura. It’s not far from Switzerland.</li>
      <li style="list-style-type: none;">Vanessa:  Right. And you’re building a hotel?</li>
      <li style="list-style-type: none;">John:       We’re converting a farmhouse into a hotel. It’s very, um…it’s a very old house. When we started,
                                         it had no windows, no doors…it was a ruin, basically.</li>
      <li style="list-style-type: none;">Vanessa:  And now?</li>
      <li style="list-style-type: none;">John:       Well, now. Most of the work’s complete. I’m staying in one of the rooms, in fact, so, um, I’m the first guest.</li>
      <li style="list-style-type: none;">Vanessa:  You’re the boss, though, so you’re not paying.</li>
      <li style="list-style-type: none;">John:       Oh, I’m paying! This project’s costing a fortune!</li>
      <li style="list-style-type: none;">Vanessa:  I see. Well, that’s one of my questions, actually. What’s your budget?</li>
      <li style="list-style-type: none;">John:       Um…the total budget’s five hundred and sixty thousand euros…and I’m paying half of that.
                                         Richard and Kathy Mills are paying the rest. They’re my business partners.</li>
      <li style="list-style-type: none;">Vanessa:  And your business partners are hotel managers, Is that right?</li>
      <li style="list-style-type: none;">John:       That’s right. I’m managing the project ? the construction. And they’re still living and working in the UK at the
                                         moment, organizing the website and the marketing material, you know, brochures and things. Then they
                                         plan to live here and manage the hotel when it’s finished.</li>
      <li style="list-style-type: none;">Vanessa:  I see. So, how long are you staying in France? What’s the schedule, from start to finish?</li>
      <li style="list-style-type: none;">John:       Um…Eighteen months. And we’re more or less on schedule. At the moment, we’re working on the bathroom.
                                                     We’re having one or two problems with…</li>
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
            Which country is John working in?
          </li>
          <li>
            What’s the project?
          </li>
          <li>
            What’s the budget for the project?
          </li>
          <li>
            How much of the work is John paying for?
          </li>
          <li>
            How long is the schedule?
          </li>
        </ol>

        <p>
           Free response:<br />
           Talk about a project or job you're working on at the moment. How's it going?
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
                  Present continuous
                </p>
                <p>
                  Where <b>are you</b> working at the moment?<br />
                  <b>I’m working</b> in Italy.<br />
                  <b>Is</b> Kathy <b>working</b> with you?<br />
                  She <b>isn’t working</b> on this project. or She’s not working on this project.
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
