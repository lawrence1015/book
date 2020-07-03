<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/UNITED_Airlines_B747-400_landing_at_Tokyo_Narita_Airport.jpg/800px-UNITED_Airlines_B747-400_landing_at_Tokyo_Narita_Airport.jpg">

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
        padding-bottom: 10px;">Describing plans 2 (Future with going to)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">

    <ol style="margin: 12px;">
      <p>
      <li>
        Dear Celia and Alex,<br />
        I look forward to seeing you in Tokyo next week.
        My flight arrives at Narita Airport at 17:10 on Wednesday. I'm going to take a taxi to the hotel (I'm staying at the New Empire).<br />
        I think the trip takes about half an hour, so if you like, we can meet in the evening. Shall we have dinner?<br />
        I think it's better if we start discussing the website before we go into the office on Thursday.<br />
        It's often easier to have ideas outside the office.<br />
        Regards,<br />
        Kristi
      </li>
    </p>
    <p>
      <li>
        Hi Kristi,<br />
        Yes, I agree. Let's have dinner on Wednesday and discuss our ideas. I know a good restaurant near the New Empire, so I can book a table there.<br />
        Shall I meet you at the hotel at 7.30?<br />
        Akio
      </li>
    </p>
    <p>
      <li>
        Dear Akio<br />
        OK, fine. See you at 7.30.<br />
        Kristi
      </li>
    </p>
    </ol>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        You work for a large international company. Next year, your company wants to hold a conference for some of its managers.
        You and your partner have to organize the conference.
      </p>

      <p>
        Talk about this list of jobs you have to do. Put them in order, from most to least urgent.
      </p>

      <p>
        ( &emsp; ) Make a list of people we're going to invite.<br />
        ( &emsp; ) Arrange the timing: number of days, dates.<br />
        ( &emsp; ) Choose a location: country and city<br />
        ( &emsp; ) Choose accommodation: hotel? conference center?<br />
        ( &emsp; ) Plan the events at the conference: presentations, meetings...<br />
        ( &emsp; ) Send invitations.<br />
        ( &emsp; ) Write a brochure giving information about the conference.<br />
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
                    Objectives
                  </p>
                  <p>
                    Our aim/target/goal is to finish the work today.
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
