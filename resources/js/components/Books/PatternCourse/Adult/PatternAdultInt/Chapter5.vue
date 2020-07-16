<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv7ZFKXM/7/screen_2x/canva-grayscale-photo-of-four-men-sitting-on-bench-along-the-street-MADGv7ZFKXM.jpg">

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
        border-radius: 30px;">Looking Back to the Past
      </h1>
    </v-layout>
  </v-img>


  <h2 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Preview</h2>

  <hr width="60%">
  <div style="padding : 15px; line-height: 200%;">


    <p>

      <v-container grid-list-md text-xs-left>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card light color="#f6eec7">
              <v-card-text class="px-10">
                <p>
                  <i>Past Tenses (using I Used To)</i>
                </p>
                <hr />
                <p>
                  <u>past</u> - the time that existed before the present<br />
                  <u>when</u> - at or during the time that something happens
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
      How do we talk about a routine we had in the past in English? One of the easiest ways to do that is to use the verb <b><i>used to.</i></b>
      There are a lot of instances wherein we need to narrate a habit we did in the past; this usually happens when we are trying to let a person get to know us better.
    </p>

    <p><v-container grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card light color="#f6eec7">
            <v-card-text class="px-10">
              <center>
                <p>
                  Often, we use the conjunction <b><i>when</i></b> in our sentences.<br />
                  Notice that after the phrase <b><i>I used to,</i></b> the verb takes its base form.
                </p>
              </center>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </p>

  <p>
    Examples
  </p>

  <p>
    <i>I used to go to school.<br />
       I used to study.
    </i>
  </p>

  <p>
    <i>When I was younger, I used to drink milk.<br />
       When I was still in my university, I used to play football.
    </i>
  </p>

  <v-container grid-list-md text-xs-left>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card light color="#f6eec7">
          <v-card-text class="px-10">
            <center>
              <p>
                However, for actions that we never really did in the past and until now, we use <b><i>I didn’t</i></b><br />
                <b><i>use to</i></b> or <b><i>I used to.</i></b>
              </p>
            </center>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  <p>
    Example
  </p>
  <p>
    <i>I didn’t use to like it.<br />
       I used not to swim in the pool.<br />
       I didn’t use to play outside when I was still a kid.<br />
       I used not to study.
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

    <tr v-for="dialog in dialogs" :key="dialog">
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
  <h3>A. Fill in the blanks with the correct answer using Used to. The verb that we must use in the sentence is already given.
  </h3>

  <ol style="margin: 12px;">
    <li>
      Amy <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> to work but now she takes the bus. (drive)
    </li>
    <li>
      I <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> football every weekend but I don’t have time anymore. (play)
    </li>
    <li>
      Kyle <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> watching action films, but she loves them now. (like)
    </li>
    <li>
      She <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> a house in the countryside. (have)
    </li>
    <li>
      When I was young, <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> fishing with my father. (go)
    </li>
    <li>
      I <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> cinnamon bread but now I like it. (eat)
    </li>
    <li>
      Ken <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> in hot countries, I guess that is the reason why he is getting a lot of difficulties in living in cold countries. (live)
    </li>
    <li>
      People <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> each other stories to be entertained but now they watch TV and movies. (tell)
    </li>
    <li>
      I <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> in a crowded place when I was ten. Now, I like staying in a peaceful place. (to be)
    </li>
    <li>
      When Jay was a child, he <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> trees. (climb)
    </li>
  </ol>

  <h3>B. Pattern Exercise. Here are the profiles of four different people. These profiles talk about the things they used to do in the past. Try to change some sentences where you can use the phrase I Used to.</h3>
      <ol style="margin: 12px;">
        <li>
          Leo<br />
          <i>He is an athlete. He is 27 years old. He is not married. When he was young he did not like sports.
            He watched TV and met his friends a lot. He was lazy. Today,
            he loves sports. He does not watch TV and meets his friends sometimes. He likes working.
          </i>
        </li>
        <li>
          Andy<br />
          <i>He is an office personnel in a school now. He is 45 years old. He is married and has three children.
             When he was young, he went to school everyday. He liked school very much. He did not watch TV.
             He read a lot of books. Today, he does not like to go to school, but he still needs to go there every day.
             He likes watching TV. He does not like reading.
          </i>
        </li>
        <li>
          Shane<br />
          <i>She is a stage actress. She is 38 years old, and she is not married. She did not learn languages when she was young.
            She did not cook. She did not sing or dance.
            Today, Shane is a good cook. She dances and sings beautifully. She speaks two foreign languages.
          </i>
        </li>
        <li>
          Chris<br />
          <i>She is a doctor. She is 43 years old. She is married and has two children. When she was young, she did not like going to hospitals.
            She liked playing the piano. She liked dancing and listening to music. Today, she loves going to the hospital.
            She does not play the piano. She does not dance and does not listen to music either.
          </i>
        </li>
      </ol>


  <h3>C. What do these people use to do in the past? What do you think they do now? The pictures show the past activities, try to guess what they do now. Use the featured expression in answering.</h3>

  <v-container grid-list-md text-xs-center>
    <v-layout wrap align-content-center>

      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGyZXW3Tg/4/screen_2x/canva-male-holding-cue-stick-ready-to-hit-the-ball-MADGyZXW3Tg.jpg">
          </v-card-media>

          <v-card-text>
            1.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
          </v-card-text>
        </v-card>
      </v-flex>





      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGyZg6Mz4/4/screen_2x/canva-person-in-teal-ice-cream-print-tank-top-holds-ice-cream-MADGyZg6Mz4.jpg">
          </v-card-media>

          <v-card-text>
            2. <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
          </v-card-text>
        </v-card>
      </v-flex>



      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/cI7gY/MADyQ_cI7gY/1/s2/canva-woman-doing-facial-mask-MADyQ_cI7gY.jpg">
          </v-card-media>

          <v-card-text>
            3.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
          </v-card-text>
        </v-card>
      </v-flex>



      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGxxhHerA/4/screen_2x/canva-underwater-scuba-diving-selfie-shot-with-selfie-stick.-deep-blue-MADGxxhHerA.jpg">
          </v-card-media>

          <v-card-text>
            4.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  </u>.
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGxy8d130/4/screen_2x/canva-closeup-of-woman-holding-shopping-bags-with-copy-space-MADGxy8d130.jpg">
          </v-card-media>

          <v-card-text>
            5.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  </u>.
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGv4dpZqc/7/screen_2x/canva-photography-of-women-talking-to-each-other-MADGv4dpZqc.jpg">
          </v-card-media>

          <v-card-text>
            6.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  </u>.
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://image.freepik.com/free-photo/pointing-sketch_1098-14323.jpg">
          </v-card-media>

          <v-card-text>
            7.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  </u>.
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGvnBEdtY/7/screen_2x/canva-selective-focus-photography-of-woman-using-white-and-black-slr-camera-MADGvnBEdtY.jpg">
          </v-card-media>

          <v-card-text>
            8.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  </u>.
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADQ4zhn0yE/1/screen_2x/canva-food-is-served-MADQ4zhn0yE.jpg">
          </v-card-media>

          <v-card-text>
            9.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  </u>.
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 md12 >
        <v-card hover>

          <v-card-media src="https://marketplace.canva.com/MADGwPM2jH4/5/screen_2x/canva-group-of-people-partying-MADGwPM2jH4.jpg">
          </v-card-media>

          <v-card-text>
            10.<u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  </u>.
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

    <tr v-for="translation in translations" :key="translation">
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
  <h3>A. Fill in the blanks with the correct answer using Used to. The verb that we must use in the sentence is already given.
  </h3>

  <ol style="margin: 12px;">
    <li>
      Amy <u>used to drive</u> to work but now she takes the bus.
    </li>
    <li>
      I <u>used to play</u> football every weekend but I don’t have time anymore.
    </li>
    <li>
      Kyle <u>didn't use to</u> watching action films, but she loves them now.
    </li>
    <li>
      She <u>used to</u> a house in the countryside.
    </li>
    <li>
      When I was young, <u>used to go</u> fishing with my father.
    </li>
    <li>
      I <u>didn't use to eat</u> cinnamon bread but now I like it.
    </li>
    <li>
      Ken <u>used to live</u> in hot countries, I guess that is the reason why he is getting a lot of difficulties in living in cold countries.
    </li>
    <li>
      People <u>used to tell</u> each other stories to be entertained but now they watch TV and movies. (tell)
    </li>
    <li>
      I <u>used to like</u> in a crowded place when I was ten. Now, I like staying in a peaceful place. (to be)
    </li>
    <li>
      When Jay was a child, he <u>used to climb</u> trees. (climb)
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
          speech:'It is really hard if you are now in the end days of years.'
        },
        {
          name:'B:',
          speech: 'I guess you’re correct there my friend. There are a lot of things we’ve been missing.'
        },
        {
          name:'A:',
          speech:'Especially the old days.'
        },
        {
          name:'B:',
          speech: 'I used to go out and stay in different sports clubs late at night.'
        },
        {
          name:'A:',
          speech:'I used to travel to different places, and to different countries. But, since our health is getting on the way, we hardly do that now.'
        },
        {
          name:'B:',
          speech: 'I used to engage in several sports before. I even became one of the top players in baseball, but now, even getting up in the morning takes a lot of effort.'
        },
        {
          name:'A:',
          speech:'Going out to enjoy and be with our friends was totally easy those days.'
        },
        {
          name:'B:',
          speech: 'And I guess we can’t do anything about that anymore.'
        },
      ],

      translations:[
      {
          name:'A:',
          speech:'네가 지금 황혼기에 있다면 정말 힘들거야.'
        },
        {
          name:'B:',
          speech: '네 말이 맞는 것 같아. 우리가 놓친 게 많아'
        },
        {
          name:'A:',
          speech:'특히 옛날이.'
        },
        {
          name:'B:',
          speech: '나는 밤에 나가서 다른 스포츠 클럽에 늦게까지 있었어.'
        },
        {
          name:'A:',
          speech:'나는 다른 장소와 다른 나라들을 여행하곤 했어. 하지만, 우리의 건강이 나아지고 있기 때문에, 우리는 지금 거의 그렇게 못하지.'
        },
        {
          name:'B:',
          speech: '전에는 여러 가지 운동을 했었어. 야구에서 최고 선수가 되기까지 했는데 지금은 아침에 일어나는 것조차 많은 노력이 필요하다.'
        },
        {
          name:'A:',
          speech:'그 시절에는 친구들과 함께 즐기고 놀러 가는 것이 정말 쉬웠어.'
        },
        {
          name:'B:',
          speech: '이제 더 이상 어쩔 수 없을 것 같아.'
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
