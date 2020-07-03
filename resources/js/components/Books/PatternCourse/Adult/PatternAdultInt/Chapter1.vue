<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940">

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
        border-radius: 30px;">Just My Imagination
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
                  <i>If I were… I would do</i>
                </p>
                <hr />
                <p>
                  <u>imagination</u> - the ability to form pictures or ideas in your mind<br />
                  <u>imagery</u> - the use of words or pictures to describe ideas or actions in poems, books, films, and others
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
      We use <i>“If I were..I would do”</i> if we want to talk about what we would do in an impossible situation. In the <i>if-clause</i>, we use the simple past form of the verb to show that this event to show that this event will unlikely happen. There is a zero possibility for the event/activity to take place.
    </p>

    <p><v-container grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card light color="#f6eec7">
            <v-card-text class="px-10">
              <center>
                <p>
                  If I were a billionaire, <u>I would never work again</u>.
                  <br />
                  <b>IF-CLAUSE &emsp; &emsp; &emsp; MAIN CLAUSE</b>
                </p>
              </center>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </p>

  <p>
    We follow this kind of form:
  </p>

  <v-container grid-list-md text-xs-left>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card light color="#f6eec7">
          <v-card-text class="px-10">
            <p>
              <i>If + simple past form of a verb…, would + base form of a verb</i><br />
              or<br />
              <i>...would + base form of a verb… if + simple past form of a verb</i>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  <p>
    We can also use <i>could</i> and <i>might</i> in place of <i>would.</i>
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
  <h3>A. Fill in the blanks with the correct answer.
  </h3>

  <ol style="margin: 12px;">
    <li>
      If I <u>&emsp; &emsp; </u> (am) you, I would look for a new place to live. I will not stay in that dingy flat.
    </li>
    <li>
      If I went to Cambodia, I <u>&emsp; &emsp; </u> (will) absolutely visit the famous Angkor Wat.
    </li>
    <li>
      If I <u>&emsp; &emsp; </u> (live) in Japan, I <u>&emsp; &emsp; </u> (will) have sushi everyday.
    </li>
    <li>
      She <u>&emsp; &emsp; </u> (can) help you, if she <u>&emsp; &emsp; </u> (are) here.
    </li>
    <li>
      If car companies <u>&emsp; &emsp; </u> (sell) affordable cars, I <u>&emsp; &emsp; </u> (may) buy one.
    </li>
    <li>
      I would <u>&emsp; &emsp; </u> (build) my own castle, if I <u>&emsp; &emsp; </u> (am) rich.
    </li>
    <li>
      I would <u>&emsp; &emsp; </u> (drive) her home, if I <u>&emsp; &emsp; </u> (am) her mother.
    </li>
    <li>
      I could be his princess, if he <u>&emsp; &emsp; </u> (is) a prince.
    </li>
    <li>
      If I <u>&emsp; &emsp; </u> (am) a painter, I <u>&emsp; &emsp; </u> (can) paint you a picture.
    </li>
    <li>
      If I <u>&emsp; &emsp; </u> (am) taller, I would <u>&emsp; &emsp; </u> (play) basketball.
    </li>
  </ol>

  <h3>B. Pattern Exercise. Share your ideas about the given pictures. What do these people wish for? Use the featured expressions to complete your answers.</h3>

  <v-container grid-list-md text-xs-center>
    <v-layout wrap align-content-center>

      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://live.staticflickr.com/6074/6144729060_3d4d722f56_4k.jpg">
          </v-card-media>

          <v-card-text>
            1.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
          </v-card-text>
        </v-card>
      </v-flex>





      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGx0p36q0/4/screen_2x/canva-yellow-sports-car-during-day-time-MADGx0p36q0.jpg">
          </v-card-media>

          <v-card-text>
            2. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
          </v-card-text>
        </v-card>
      </v-flex>



      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGv6xJ7sc/7/screen_2x/canva-man-and-woman-in-red-flannel-shirts-at-the-subway-MADGv6xJ7sc.jpg">
          </v-card-media>

          <v-card-text>
            3.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
          </v-card-text>
        </v-card>
      </v-flex>



      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGxp3VTRs/4/screen_2x/canva-gray-painted-house-MADGxp3VTRs.jpg">
          </v-card-media>

          <v-card-text>
            4.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  </u>.
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>

  <h3>C. Please answer the questions using the Present Unreal Conditional form of sentences.
  </h3>

  <ol style="margin: 12px;">
    <li>
      What would you do if a stranger talks to you?
    </li>
    <li>
      What would you do if you were accidentally locked in a dark room?
    </li>
    <li>
      If you could have any job, what would you want to have?
    </li>
    <li>
      If you could speak three other languages, what would they be?
    </li>
    <li>
      If you were given a choice between great wisdom or great wealth, which one would you choose?
    </li>
    <li>
      What would you do if you have one million dollars?
    </li>
    <li>
      What would you do if you saw a ghost?
    </li>
    <li>
      What would you do if you have a spaceship?
    </li>
    <li>
      What would you do if you can fly?
    </li>
    <li>
      What would you do if you saw a bear in the forest?
    </li>
  </ol>

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
  <h3>A. Fill in the blanks with the correct answer.
  </h3>

  <ol style="margin: 12px;">
    <li>
      If I <u>were</u> you, I would look for a new place to live. I will not stay in that dingy flat.
    </li>
    <li>
      If I went to Cambodia, I <u>would</u> absolutely visit the famous Angkor Wat.
    </li>
    <li>
      If I <u>lived</u> in Japan, I <u>would have</u> have sushi everyday.
    </li>
    <li>
      She <u>could </u> help you, if she <u>were </u> here.
    </li>
    <li>
      If car companies <u>sell</u> affordable cars, I <u>might</u> buy one.
    </li>
    <li>
      I would <u>have built</u> my own castle, if I <u>were</u> rich.
    </li>
    <li>
      I would <u>have driven</u> her home, if I <u>were</u> her mother.
    </li>
    <li>
      I could be his princess, if he <u>were</u> a prince.
    </li>
    <li>
      If I <u>were</u> a painter, I <u>could</u> paint you a picture.
    </li>
    <li>
      If I <u>were</u> taller, I would <u>have played </u> basketball.
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
          speech:'I wish I had more energy, doctor. If I had more energy, I would be able to accomplish a lot more in my life. I could go to the places I wanted to go and even do the things I wanted to do.'
        },
        {
          name:'B:',
          speech:'That’s because you don’t exercise enough. If you got more exercise, you’d feel a million times better.'
        },
        {
          name:'A:',
          speech:'I’m afraid that I eat too much bread, cereal, and pasta. I like carbohydrates. I can’t really help it.'
        },
        {
          name:'B:',
          speech:'I know you couldn’t, but if you cut down on carbohydrates, you’d lose weight. If you lose weight, you’ll feel more energetic.'
        },
        {
          name:'A:',
          speech:'If I were over fifty, I’d understand why I’m so tired, but I’m only thirty-five years old.'
        },
        {
          name:'B:',
          speech: 'You’d be surprised how quick your energy would come back if you put your mind to it.'
        },
      ],

      translations:[
      {
          name:'A:',
          speech:'의사 선생님더 많은 에너지가 있었으면 좋겠어요. 만약 내가 더 많은 에너지를 가지고 있다면, 나는 내 인생에서 더 많은 것을 성취할 수 있을 거예요. 가고 싶은 곳에 가서 하고 싶은 일까지 할 수 있겠군요.'
        },
        {
          name:'B:',
          speech: '그건 네가 운동을 충분히 하지 않기 때문이야. 운동을 더 많이 하면 기분이 아주 좋아질 거야.'
        },
        {
          name:'A:',
          speech:'빵, 시리얼, 파스타를 너무 많이 먹는 것 같아 걱정입니다. 저는 탄수화물을 좋아해요. 정말 어떻게 할 수가 없어요.'
        },
        {
          name:'B:',
          speech: '그럴 수 없다는 건 알지만, 탄수화물을 줄이면 살이 빠질 거야. 체중을 줄이면 더욱 기운이 납니다.'
        },
        {
          name:'A:',
          speech:'쉰 살이 넘으면 왜 이렇게 피곤한지 이해할 텐데, 겨우 서른 다섯 살이네요.'
        },
        {
          name:'B:',
          speech: '마음만 먹으면 에너지가 얼마나 빨리 돌아올지 놀랄 거야.'
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
