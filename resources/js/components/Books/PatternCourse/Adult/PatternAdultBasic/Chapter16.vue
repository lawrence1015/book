<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGxge54m4/5/screen_2x/canva-singer-singing-on-stage-beside-guitar-player-and-bass-player-MADGxge54m4.jpg">

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
        background-color: rgba(2, 21, 70, 0.64);
        border:0px solid #afcde3;
        -webkit-border-radius: 30px;
        border-radius: 30px;">I would rather….
      </h1>
    </v-layout>
  </v-img>


  <h2 style="padding-top : 10px;
  padding-left : 15px;
  padding-bottom: 10px;">Preview</h2>

  <hr width="60%">
  <div style="padding : 15px;">


    <p>

      <v-container grid-list-md text-xs-left>
        <v-layout row wrap>


          <v-flex xs12>
            <v-card light color="#d7eaea">
              <v-card-text class="px-10">
                <p>
                  <i>“I would rather…” and “I would prefer…”</i>
                </p>
                <hr />
                <p>
                  <b>choice</b> - if you have a choice, you can choose between several things
                </p>
                <p>
                  <i>Examples</i>
                  <br />
                  <i>Teacher: Would you rather eat apples or oranges?</i>
                  <br />
                  <i>Student: I would rather eat apples.</i>
                </p>
                <p>
                  <i>Student: Would you prefer to eat apples or oranges?</i><br />
                  <i>Teacher: I would prefer to eat apples.</i>
                </p>

              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </p>

    <h2 style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #9692af;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Getting Started</h2>

    <div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

      <h3>Rather and Prefer are words used to show a choice from different options.</h3>

      <p>
        Would rather is followed by a base verb.
      </p>
      <p>
        I would rather <u><i>live</i></u> in California.
      </p>
      <p>
        <i>Your turn!</i>
      </p>
      <p>
        I would rather <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
      </p>
      <p>
        <b>Would prefer</b> is followed by an infinitive (to+verb).
      </p>

      <p>
        I would prefer to live in California.
      </p>
      <p>
        <i>Your turn!</i>
      </p>
      <p>
        I would rather <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
      </p>

    </div>


    <h2  style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #9692af;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Activity
  </h2>

  <div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

    <p>
      <h3>A. Use the following words in a sentence. All the words listed below are in base form. Follow the pattern “I would rather.”</h3>
    </p>

    <ol style="margin: 12px;">
      <li>
        dance
      </li>
      <li>
        sing
      </li>
      <li>
        make
      </li>
      <li>
        take
      </li>
      <li>
        go
      </li>
      <li>
        turn
      </li>
      <li>
        spend
      </li>
      <li>
        buy
      </li>
      <li>
        touch
      </li>
      <li>
        Choose
      </li>
    </ol>

    <h3>B. Use the following infinitives in a sentence. Follow the pattern <i>“I would prefer.”</i>
    </h3>

    <ol style="margin: 12px;">
      <li>
        to live
      </li>
      <li>
        to meet
      </li>
      <li>
        to dance
      </li>
      <li>
        to dream
      </li>
      <li>
        to play
      </li>
      <li>
        to work
      </li>
      <li>
        to cook
      </li>
      <li>
        to sing
      </li>
      <li>
        to die
      </li>
      <li>
        to lose
      </li>
    </ol>

    <p>
      <h3>C. Dialogue
      </h3>
    </p>
    
    <table style = "border-collapse: collapse;">
    
      <tr v-for="dialog in dialogs">
        <td class = "uppertable" >{{dialog.name}}</td>
        <td class = "lowertable" >{{dialog.speech}}</td>
      </tr>

    </table>

    </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #afcde3; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #9692af;">Translation</h3>
    <div style="padding : 16px;">

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
    background-color: #9692af;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Activity
  </h2>

  <div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

    <h3>A. Respond to the following situations using the patten “I would rather…” and “I would prefer to…”</h3>
    <ol style="margin: 12px;">
      <li>
        It’s raining cats and dogs, what would you do?
      </li>
      <p class="activity">
        a. I would rather <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u>.
      </p>
      <p class="activity">
        b. I would prefer to <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u>.
      </p>
      <p class = "meaning">
        <i><b>raining cats and dogs</b> - heavy rain</i>
      </p>
      <li>
        You’re on cloud nine because you got promoted. What would you do?
      </li>
      <p class="activity">
        a. I would rather <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u>.
      </p>
      <p class="activity">
        b. I would prefer to <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u>.
      </p>
      <p class = "meaning">
        <i><b>on cloud nine</b> - very happy because something wonderful has happened</i>
      </p>
      <li>
        If you will see your parents once in a blue moon, what would you do?
      </li>
      <p class="activity">
        a. I would rather <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u>.
      </p>
      <p class="activity">
        b. I would prefer to <u>&emsp; &emsp; &emsp; &emsp; &emsp; </u>.
      </p>
      <p class = "meaning">
        <i><b>once in a blue moon</b> - it happens very rarely</i>
      </p>
    </ol>

  </div>

  <h2  style="margin-left: -30px;
      overflow: hidden;
      padding: 5px;
      padding-left: 35px;
      padding-right: 0px;
      background-color: #9692af;
      border:0px solid #afcde3;
      -webkit-border-radius: 30px;
      border-radius: 30px;">Vocabulary
  </h2>
  <div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

<ol style="padding-right: 20px; padding-top: 10px;">
    <li>
      <u>prefer</u> - to like, choose, or want one thing rather than another.
       <i>/ prefer <span style="font-size:14px">선호하다</span></i>
    </li>
    <li>
      <u>promote</u> - to encourage people to like, buy, use, do, or support something.
       <i>/ promote <span style="font-size:14px">촉진하다</span></i>
    </li>
    <li>
      <u>infinitive</u> - the basic form of a verb that usually follows "to".
       <i>/ infinitive <span style="font-size:14px">원형사</span></i>
    </li>
</ol>
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
        dialogs:[
        {
          name:'Alex:',
          speech:'Would you rather stay home and take a rest or travel with us?'
        },
        {
          name:'Betty:',
          speech:'I would rather travel with you. I am pretty bored today, so I don’t want to just stay here. What about you? Would you rather stay in or go out?'
        },
        {
          name:'Alex:',
          speech:'I would prefer to travel, but we can stay if you would like to.'
        },
        {
          name:'Betty:',
          speech:'We better go out and spend some time together.'
        },
        {
          name:'Alex:',
          speech:'I would prefer to go somewhere quiet.'
        },
        {
          name:'Betty:',
          speech:'Really? Not me. I would rather go somewhere fun, maybe even with some live music.'
        },
        {
          name:'Alex:',
          speech:'But I thought you don’t like it?'
        },
        {
          name:'Betty:',
          speech:'I don’t, but I need to be happy as much as possible.'
        },
        {
          name:'Alex:',
          speech:'Well, I would prefer to have some coffee, but...okay, anything that would make you happy.'
        },
        ],

        translations:[
        {
          name:'Alex:',
          speech:'집에서 쉴래, 우리와 함께 여행갈래?'
        },
        {
          name:'Betty:',
          speech:'난 너희와 함께 여행하고 싶어. 나는 오늘 꽤 지루해서 그냥 여기 있고 싶지 않아. 너는 어때? 집에 있는 게 좋겠니, 아니면 밖에 나가는 게 좋겠니?'
        },
        {
          name:'Alex:',
          speech:'난 여행을 가고 싶지만, 네가 원한다면 우리는 집에 머물 수 있어.'
        },
        {
          name:'Betty:',
          speech:'나가서 같이 시간을 보내는 게 좋겠어.'
        },
        {
          name:'Alex:',
          speech:'난 조용한 곳으로 가고 싶어.'
        },
        {
          name:'Betty:',
          speech:'그래? 난 나아니야. 나는 차라리 재미있는 곳에 가고 싶어, 심지어 라이브 음악도 가지고.'
        },
        {
          name:'Alex:',
          speech:'하지만 난 네가 그것을 좋아하지 않는다고 생각했는데?'
        },
        {
          name:'Betty:',
          speech:'맞아, 근데 가능한 한 행복해야할 필요가 있어.'
        },
        {
          name:'Alex:',
          speech:'음, 난 커피를 마시고 싶지만.. 뭐든 널 행복하게 해줄 수 있는거라면 좋아.'
        },
        ]

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

.activity{
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 20px;

}
.meaning{
  padding-left: 35px;
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
