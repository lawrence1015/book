<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGxyccMIo/4/screen_2x/canva-view-of-tourist-resort--MADGxyccMIo.jpg">

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
        padding-bottom: 10px;">Forecasting (will: predictions)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
      <li style="list-style-type: none;">Interviewer: What do you think about the location of the resort, near Berlin?</li>
      <li style="list-style-type: none;">Caroline: &emsp; Well, the reason it’s there is, simply, because there was already a dome there.</li>
      <li style="list-style-type: none; padding-left: 83px;">Tropical Islands Resort didn’t build the dome. They bought it, for quite a low price.</li>
      <li style="list-style-type: none; padding-left: 83px;">A company called CargoLifter built the dome as a factory, to make big airships.</li>
      <li style="list-style-type: none; padding-left: 83px;">But CargoLifter went out of business and had to sell the dome.</li>
      <li style="list-style-type: none; padding-left: 83px;">So Tropical Islands bought it and… so they had very low construction costs.</li>
      <li style="list-style-type: none;">Interviewer: So, do they think the resort’ll be successful in the long term?  </li>
      <li style="list-style-type: none;">Caroline: &emsp; Possibly. I think it’ll probably be quite popular in the short term… in the first few months.</li>
      <li style="list-style-type: none; padding-left: 83px;">I think a lot of people’ll probably come to have a look… they’ll want to see what it’s like.</li>
      <li style="list-style-type: none; padding-left: 83px;">After that, it depends what they think of it.</li>
      <li style="list-style-type: none;">Interviewer: Some people say this resort won’t help to make forecasts for other resorts because there was no need to build a dome. Do you agree with that?</li>
      <li style="list-style-type: none;">Caroline: &emsp; Um… no. I think it’ll help a lot. Definitely. The construction costs aren’t difficult to calculate.</li>
      <li style="list-style-type: none; padding-left: 83px;">The difficult question is, what sort of people will visit the dome? I’m sure it’ll be popular with families with young children,</li>
      <li style="list-style-type: none; padding-left: 83px;">for example. So, the project’ll be good for getting information about the market.</li>
      <li style="list-style-type: none;">Interviewer: Do you think someone will build another dome like this somewhere, one day?</li>
      <li style="list-style-type: none;">Caroline: &emsp; It’s possible, yeah. Maybe there’s a huge market for them. I mean, it’s not a completely new idea.</li>
      <li style="list-style-type: none; padding-left: 83px;">There’s already a dome like this one in Japan.</li>
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Are these sentences true(T) or false(F)<br />
          Caroline thinks
        </p>

        <ol style="margin: 12px;">
          <li>
            the resort will possibly be successful in the long term. (&emsp;)
          </li>
          <li>
            the number of visitors will probably be low in the first few months. (&emsp;)
          </li>
          <li>
            it definitely won’t help to predict the success of other resorts. (&emsp;)
          </li>
          <li>
            the resort will certainly be popular with families. (&emsp;)
          </li>
          <li>
            perhaps somebody will build another dome, somewhere. (&emsp;)
          </li>
          <li>
            maybe there’s a very large market for tropical domes. (&emsp;)
          </li>
        </ol>

        <p>
           Free response:<br />
           Talk about tropical domes.<br />
           Do you think the Berlin resort will be successful in the long term?<br />
           Do you think companies will build comes in other locations?
        </p>

        <p>
          Talk about a project you're planning or starting soon. Explain what you want to do, then make forecasts about the project.
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
                  Will: predictions<br />
                  I <b>think</b> the project <b>will</b> be successful.<br />
                  I <b>don’t think</b> it’ll be very successful. (it’ll = it will)<br />
                  Personally, I <b>think it’ll / it won’t</b> be a success.
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
