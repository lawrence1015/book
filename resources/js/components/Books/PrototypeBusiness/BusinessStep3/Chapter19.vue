<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/excited-by-good-news-motivated-colleagues-celebrating-corporate-success-together_1163-5118.jpg">

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
        padding-bottom: 10px;">Talking about your education and career (Present perfect/Past simple)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <h3>Promotion of Jerome Gilder to Production Manager(Melbourne)</h3>

   <p>
     I am very pleased to announce that we have promoted Jerome Gilder to production manager at our Melbourne plant.
     Jerome will start work in his new position at the beginning of next month.
   </p>

   <p>
     Jerome has worked at a number of PolyVec's branches. He joined the company in 2002, and spent some time as a production planner,
     first in our Boston office, then at head office in the UK.
     He then moved to South Africa three years ago, to work in his present position-assistant production manager at our Cape Town plant.
   </p>

   <p>
     Jerome has worked for two other companies. He started his career with Alton, as a management trainee. He then left to join BTE,
     where he worked in production planning. Jerome studied Business and Economics at Cambridge University.
      He graduated in 1994, and spent the following year at the Sanford Institute of Technology, where he did a Masters in Distribution Management.
   </p>

   <p>
     Congratulations to Jerome on his promotion. I'm sure he will continue to enjoy a successful career with PolyVec.
   </p>

   <p>
     Simon Atkins, Production Director,<br />
     PolyVec International
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Make sentence. Use the present perfect.
        </p>

        <ol style="margin: 12px;">
          <li>
            you / use / this program before?  -> Have you used this program before?
          </li>
          <li>
            I / not / see / this version before.  ->
          </li>
          <li>
            you / work / with her before?  ->
          </li>
          <li>
            you / ever / visit / China?  ->
          </li>
          <li>
             I / never / visit / Canada.  ->
          </li>
          <li>
             I / never / visit / Canada.  ->
          </li>
          <li>
             you / ever / live / in a different country?  ->
          </li>
        </ol>

        <p>
          Free response:
        </p>
        <ol style="margin: 12px;">
          <li>
            When did you start work at your present company?
          </li>
          <li>
            Talk about the best times in your education and career. Why did you enjoy them?
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
                  - Present perfect/Past simple
                </p>
                <p>
                  Jerome <b>has</b> work<b>ed</b> at a number of branches.<br />
                  Jerome join<b>ed</b> the company in 2002<br />
                  - Present perfect: negatives and questions<br />
                  <b>Have</b> you us<b>ed</b> this software <b>before</b>?<br />
                  <b>Have</b> you <b>ever</b> work<b>ed</b> with his software?<br />
                  No, I <b>haven’t</b> work<b>ed</b> with this. I<b>’ve never</b> us<b>ed</b> it.
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
