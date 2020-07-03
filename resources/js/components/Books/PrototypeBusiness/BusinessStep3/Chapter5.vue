<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/iZlaI/MADyQ2iZlaI/1/s2/canva-man-and-woman-having-a-meeting-in-the-office-MADyQ2iZlaI.jpg">

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
        padding-bottom: 10px;">Discussing strengths and weaknesses (Gerund)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

   <p>
      <li style="list-style-type: none;">Judith: Marco works for PAF, he’s in the creative department, we know him, he knows us…</li>
      <li style="list-style-type: none; padding-left: 50px;">But is that an advantage?</li>
      <li style="list-style-type: none;">Rowan: Well, we want someone to manage the department.</li>
      <li style="list-style-type: none; padding-left: 53px;">We need a manager to make the new strategy work.</li>
      <li style="list-style-type: none; padding-left: 53px;">We don’t really need new ideas. Marco’s experienced, he knows the company well,</li>
      <li style="list-style-type: none; padding-left: 53px;">and he knows what we want.</li>
      <li style="list-style-type: none; padding-left: 53px;">I think his experience with PAF is a big advantage.</li>
      <li style="list-style-type: none; padding-left: 53px;">Hiring someone new is… it’s obviously a risk.</li>
      <li style="list-style-type: none;">Judith: Yeah. But making Marco the department manager’s also a risk.</li>
      <li style="list-style-type: none; padding-left: 50px;">OK, he enjoys working for the company, he’s popular in the department,</li>
      <li style="list-style-type: none; padding-left: 50px;">but… that doesn’t mean he’s good at managing a team.</li>
      <li style="list-style-type: none;">Rowan: But the number one priority is the new strategy.</li>
      <li style="list-style-type: none; padding-left: 53px;">The manager has to sell the new strategy to the team.</li>
      <li style="list-style-type: none; padding-left: 53px;">We know Marco’s a good salesman. He likes selling ideas.</li>
      <li style="list-style-type: none;">Judith: Yeah… But, what about the other people in the department?</li>
      <li style="list-style-type: none; padding-left: 50px;">They work with him at the moment. What happens if they have to work for him?</li>
      <li style="list-style-type: none;">Rowan: Oh, I think he can cope with all that…</li>
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
            Where does Marco work?
          </li>
          <li>
            What are his main strengths?
          </li>
          <li>
            What’s the problem with making him the manager?
          </li>
          <li>
            Do you think Judith and Rowan agree about Marco?
          </li>
        </ol>

        <p>
           Free response:<br />
           - Talk about the skills and characteristics you need in your job or a job you would like to have.<br />
           - What skills and characteristics do people need for these jobs? Give your opinion.<br />
           They need to be/be good at...<br />
           They need to like/enjoy...<br />
           (engineers, salespeople, fashion designers, politicians, chief executives)
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
                  Gerund
                </p>
                <p>
                  He’s <b>good at</b> solv<b>ing</b> problems.<br />
                  I’m <b>not very good at</b> mak<b>ing</b> presentations.<br />
                  They <b>like/enjoy</b> work<b>ing</b> here<br />
                  (gerund after verbs of like/dislike)<br />
                  Manag<b>ing</b> a big department isn’t easy.
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
