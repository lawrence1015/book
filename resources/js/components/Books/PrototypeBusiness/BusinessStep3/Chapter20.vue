<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/young-it-service-man-repairing-computer_1303-19460.jpg">

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
        padding-bottom: 10px;">Giving an update (Present perfect: yet/already/so far)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
      <li style="list-style-type: none;">Yves:   Yves Cordier.</li>
      <li style="list-style-type: none;">Andy:  Yves, it’s Andy Bell.</li>
      <li style="list-style-type: none;">Yves:   Andy, hi, How are things?</li>
      <li style="list-style-type: none;">Andy:  Going quite well.</li>
      <li style="list-style-type: none;">Yves:   Is everything nearly ready?</li>
      <li style="list-style-type: none;">Andy:  Well, we’ve got a full accounts department. I interviewed someone on Monday and she’s accepted the post.
                                         Sara Bernard. I’ve already sent her details to personnel, so that’s gone well…</li>
      <li style="list-style-type: none;">Yves:   OK, good. And, what about the IT system? Have they installed that yet?</li>
      <li style="list-style-type: none;">Andy:  Well, that’s more difficult. Um… I’ve found two technicians so far, er, but unfortunately,
                                         I haven’t found the third person we need, so…</li>
      <li style="list-style-type: none;">Yves:   So you haven’t finished the IT installation?</li>
      <li style="list-style-type: none;">Andy:  No, we… we haven’t actually started it yet. But…</li>
      <li style="list-style-type: none;">Yves:   You haven’t started it yet? Andy, we need to open that office in two weeks!</li>
      <li style="list-style-type: none;">Andy:  I know. I’ve spoken to Daniela in the Zurich office and she’s going to send someone next week.
                                         I think we can still open on time.</li>
      <li style="list-style-type: none;">Yves:   We need to. How long is it going to take for you to get…</li>
   </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Fill in the gaps with already, yet or so far.
        </p>

        <ol style="margin: 12px;">
          <li>
            Have you finished <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>?
          </li>
          <li>
            We have to build six units today, and we've only built two <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
          </li>
          <li>
             I didn't plan to finish all the work today, but I've <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u> done everything.
          </li>
          <li>
            The work has gone well <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>, but we haven't done the hardest job <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
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
                Present perfect: yet/already/so far<br />
                Have you written that report <b>yet</b>?<br />
                I’ve started it, but I haven’t finished it <b>yet</b>.<br />
                We’re doing well. We’ve <b>already</b> done most of the work.<br />
                I’m reading your report. I’ve read half of it <b>so far</b>.
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
