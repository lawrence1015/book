<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGyKshH4k/4/screen_2x/canva-group-of-people-sitting-on-white-mat-on-grass-field-MADGyKshH4k.jpg">

        <v-layout
        align-end
        fill-height
        pa-2
        white--text
        >
        <h1 style="margin:0 -30px 10px;
        overflow: hidden;
        padding: 5px;
        padding-left: 35px;
        padding-right: 25px;
        background-color: rgba(209, 90, 124, 0.80);
        border:0px solid #afcde3;
        -webkit-border-radius: 30px;
        border-radius: 30px;">Possibilities and the General Truth
      </h1>
    </v-layout>
  </v-img>


  <h2 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Preview</h2>

  <hr width="60%">
  <div style="padding : 15px;">


    <p>

      <v-container grid-list-md text-xs-left>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card light color="#f6eec7">
              <v-card-text class="px-10">
                <p>
                  <i>Possibilities and the General Truth</i>
                </p>
                <hr />
                <p>
                  <u>truth</u> - the true facts about something, rather than what is untrue, imagined, or guessed<br />
                  <u>real</u> - actually happening in life, not invented in a book<br />
                  <u>possibility</u> - if there is a possibility that something is true or that something will happen, it might be true or it might happen
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </p>



  </div>


  <h2 style="margin-left: -30px;
  overflow: hidden;
  padding: 5px;
  padding-left: 35px;
  padding-right: 0px;
  background-color: #ee8972;
  border:0px solid #afcde3;
  -webkit-border-radius: 30px;
  border-radius: 30px;">Getting Started</h2>

  <div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

    <p>
      <i><b>Zero Conditional</b></i> is used if we are talking about a fact. In this kind of conditional,
      we can use <i><b>when</b></i> in place of <b><i>if</i></b>,
      and the meaning remains the same, but intechanging <i><b>if</b></i> and <i><b>when</b></i>
      can only be applied in the <i><b>Zero Conditional</b></i> and the
      <i><b>First Conditional.</b></i> So, please don’t be confused.
    </p>

    <p><v-container grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card light color="#f6eec7">
            <v-card-text class="px-10">
              <center>
                <p>
                  These forms are interchangeable; one can start a sentence with the if clause or the main clause.
                </p>
                <p>
                  <b>
                    <i>
                      If + simple present… simple present imperative.<br />
                      When + simple present… simple present/imperative.<br />
                      Unless + simple present...simple present/imperative.<br />
                    </i>
                  </b>
                </p>
              </center>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </p>

  <p>
    Notice that <b><i>unless</i></b> means the same as <b><i>if not.</i></b>
  </p>

  <p>
    <i>Unless you’ve heard it from her, you don’t appreciate that she cares.</i>
  </p>

  <p>
    Examples
  </p>

  <p>
    <i>If it rains, the grass gets wet.<br />
      When people get sick, they usually go to the hospital.<br />
      Unless you need more time to finish everything, it’s always impressive to submit requirements as <br />
      early as possible.
    </i>
  </p>

  <p>
    The <b><i>First Conditional</i></b> is used when we talk about real and possible events. We use the simple present in the
    <i>if-clause</i> while we use <b><i>will </i></b> in the <i>main clause.</i> We use <b><i>will</i></b> to show that we are
    sure that this event will happen in the future.
  </p>

  <v-container grid-list-md text-xs-left>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card light color="#f6eec7">
          <v-card-text class="px-10">
            <center>
              <p>
                These forms are interchangeable; one can start a sentence with the if clause or the main clause.
              </p>
              <p>
                <b><i>If + simple present… will + verb.<br />
                  When + simple present… will + verb.
                </i></b>
              </p>
            </center>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  <p>
    Examples
  </p>

  <p>
    <i>I’ll go shopping this afternoon if I have enough time.<br />
      If I go home late today, my mom will be angry.
    </i>
  </p>
</div>

<h2  style="margin-left: -30px;
overflow: hidden;
padding: 5px;
padding-left: 35px;
padding-right: 0px;
background-color: #ee8972;
border:0px solid #afcde3;
-webkit-border-radius: 30px;
border-radius: 30px;">Activity
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

  <h3>A. Dialogue
  </h3>

  <table style = "border-collapse: collapse;">

    <tr v-for="dialog in dialogs">
      <td class = "uppertable" >{{dialog.name}}</td>
      <td class = "lowertable" >{{dialog.speech}}</td>
    </tr>

  </table>  

</div>

<h2  style="margin-left: -30px;
overflow: hidden;
padding: 5px;
padding-left: 35px;
padding-right: 0px;
background-color: #ee8972;
border:0px solid #afcde3;
-webkit-border-radius: 30px;
border-radius: 30px;">Practice
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">
  <h3>A. Try to distinguish if the sentence given is a Zero Conditional or the First Conditional.
  </h3>

  <ol style="margin: 12px;">
    <li>
      I will pass my math exam if I study hard.
    </li>
    <li>
      If it rains, we won’t have our picnic.
    </li>
    <li>
      If babies are hungry, they cry.
    </li>
    <li>
      If you invite me, I will go to the party.
    </li>
    <li>
      If you touch a fire, you get burned.
    </li>
    <li>
      My boss gets angry if I’m late for work.
    </li>
    <li>
      The ice will melt when you heat it.
    </li>
    <li>
      If you see Simon later today, will you tell him to call me?
    </li>
    <li>
      If you are going to be there,  I will totally enjoy the party.
    </li>
    <li>
      When plants don’t get enough water, they die.
    </li>
  </ol>

  <h3>B. Pattern Exercise. Complete the following phrases, either giving the condition or the result. Take the pictures for clues, what do you think would happen?</h3>

  <v-container grid-list-md text-xs-center>
    <v-layout wrap align-content-center>

      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGvwj3a9Y/7/screen_2x/canva-woman-throwing-confetti-MADGvwj3a9Y.jpg">
          </v-card-media>

          <v-card-text>
            1. If she studies hard, <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
          </v-card-text>
        </v-card>
      </v-flex>





      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://image.freepik.com/free-photo/businessman-excited-because-achievement-business_1163-5344.jpg">
          </v-card-media>

          <v-card-text>
            2. Kenny will be promoted <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
          </v-card-text>
        </v-card>
      </v-flex>



      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGv5Yi1xk/6/screen_2x/canva-person-holding-medication-pill-and-capsules-MADGv5Yi1xk.jpg">
          </v-card-media>

          <v-card-text>
            3. If she keeps on taking painkillers, <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
          </v-card-text>
        </v-card>
      </v-flex>



      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGxos2Tks/4/screen_2x/canva-dock-by-the-body-of-water-MADGxos2Tks.jpg">
          </v-card-media>

          <v-card-text>
            4. I will leave on Saturday <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  </u>.
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>

  <h3>C. Change the verb inside the parenthesis to have a correct conditional.
  </h3>

  <ol style="margin: 12px;">
    <li>
      My mother always punishes my sister if she _____ a lie. (to tell)
    </li>
    <li>
      If we ____ to work, we won’t get paid. (not go)
    </li>
    <li>
      We will go jogging, if it _____ raining outside. (stop)
    </li>
    <li>
      We will go to Macau, if she ________ to work on Saturday. (not go)
    </li>
    <li>
      My brother will buy me a smartphone, if I _____ hard. (study)
    </li>
  </ol>

  <h3>D. Match column A to column B. Make sure that the sentences have complete thought.</h3>

  <v-container>
    <v-layout wrap align-content-center>

      <v-flex xs6 lg3>

        <v-card flat>


          <v-card-text>
            <center>
              A
            </center>
            <ol style="margin: 12px;">
              <li>You’ll find life much easier
              </li>
              <li>Dad will be very sad
              </li>
              <li>You won’t be tired tomorrow
              </li>
              <li>If the movie starts at eight,
              </li>
              <li>If my sister eats all of the cake,
              </li>
            </ol>

          </v-card-text>


        </v-card>
      </v-flex>



      <v-flex xs6 lg3>
        <v-card flat>

          <v-card-text>
            <center>
              B
            </center>
            <ol style="margin: 12px;" type="A">
              <li>we will be late!
              </li>
              <li>if you go to bed early.
              </li>
              <li>if you smile more often.
              </li>
              <li>I will be angry.
              </li>
              <li>if Jim forgets his birthday again.
              </li>
            </ol>

          </v-card-text>

        </v-card>
      </v-flex>

    </v-layout>
  </v-container>

</div>

<h2  style="margin-left: -30px;
overflow: hidden;
padding: 5px;
padding-left: 35px;
padding-right: 0px;
background-color: #ee8972;
border:0px solid #afcde3;
-webkit-border-radius: 30px;
border-radius: 30px;">Translation
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

  <h3>A. Dialogue
  </h3>

  <table style = "border-collapse: collapse;">

    <tr v-for="translation in translations">
      <td class = "uppertable" >{{translation.name}}</td>
      <td class = "lowertable" >{{translation.speech}}</td>
    </tr>

  </table>
  

</div>

<h2  style="margin-left: -30px;
overflow: hidden;
padding: 5px;
padding-left: 35px;
padding-right: 0px;
background-color: #ee8972;
border:0px solid #afcde3;
-webkit-border-radius: 30px;
border-radius: 30px;">Answer Key
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">
  <h3>A. Try to distinguish if the sentence given is a Zero Conditional or the First Conditional.
  </h3>

  <ol style="margin: 12px;">
    <li>
      first conditional
    </li>
    <li>
      first conditional
    </li>
    <li>
      zero conditional
    </li>
    <li>
      first conditional
    </li>
    <li>
      zero conditional
    </li>
    <li>
      zero conditional
    </li>
    <li>
      first conditional
    </li>
    <li>
      first conditional
    </li>
    <li>
      first conditional
    </li>
    <li>
      zero conditional
    </li>
  </ol>

  <h3>C. Change the verb inside the parenthesis to have a correct conditional.
  </h3>

  <ol style="margin: 12px;">
    <li>
      My mother always punishes my sister if she <u>tells</u> a lie.
    </li>
    <li>
      If we <u>don't</u> go to work, we won't get paid.
    </li>
    <li>
      We will go jogging, if it <u>stops</u> raining outside.
    </li>
    <li>
      We will go to Macau, if she <u>doesn't</u> go to work on Saturday.
    </li>
    <li>
      My brother will buy me a smartphone, if I <u>study</u> hard.
    </li>
  </ol>

  <h3>D. Match column A to column B. Make sure that the sentences have complete thought.</h3>

  <ol style="margin: 12px;">
    <li>
      1 and 3 <br />
      You'll find life much easier if you smile more often.
    </li>
    <li>
      2 and 5 <br />
      Dad will be very sad if Jim forgets his birthday again.
    </li>
    <li>
      3 and 2 <br />
      You won't be tired tomorrow if you go to bed early.
    </li>
    <li>
      4 and 1 <br />
      If the movie starts at eight, we will be late!
    </li>
    <li>
      5 and 4 <br />
      If my sister eats all of the cake, I will be angry.
    </li>
  </ol>

</div>




</v-layout>
</v-container>


</div>


</template>



<script>
export default {

  props: ['fontSize'],

  data(){

    return{
      dialogs:[
        {
          name:'A:',
          speech:'How will you get to work tomorrow?'
        },
        {
          name:'B:',
          speech:'If it rains tomorrow, I will drive my car.'
        },
        {
          name:'A:',
          speech:'But, what if it doesn’t rain?'
        },
        {
          name:'B:',
          speech:'If it doesn’t rain, then I will walk to work.'
        },
        {
          name:'A:',
          speech:'In my case, if it’s sunny, then I’ll eat my lunch outside.'
        },
        {
          name:'B:',
          speech: 'Oh, me too. I will have my lunch on the grass if it’s nice out.'
        },
      ],

      translations:[
      {
          name:'A:',
          speech:'내일 어떻게 출근할 거야?'
        },
        {
          name:'B:',
          speech: '내일 비가 오면 내가 운전할게.'
        },
        {
          name:'A:',
          speech:'하지만, 비가 안 오면?'
        },
        {
          name:'B:',
          speech: '비가 안 오면 걸어서 출근할 거야.'
        },
        {
          name:'A:',
          speech:'나는, 날씨가 맑으면 밖에서 점심을 먹을 거야.'
        },
        {
          name:'B:',
          speech: '오, 나도. 날씨가 좋으면 나는 점심을 잔디밭에서 먹을거야.'
        },
      ],

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

<style lang="css">

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
.uppertable {
  border: 0px solid #dddddd;
  text-align: left; padding: 8px;
  vertical-align:top;
  width: 5%;
  white-space: nowrap;
}

.lowertable {
  border: 0px solid #dddddd;
  text-align: left;
  padding: 8px;
}

</style>
