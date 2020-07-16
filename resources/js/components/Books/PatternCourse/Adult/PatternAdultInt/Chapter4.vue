<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv3ra4LQ/7/screen_2x/canva-assorted-color-pants-lot-MADGv3ra4LQ.jpg">

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
        border-radius: 30px;">Just Get it Right

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
                  <i>Manners and Expressions</i>
                </p>
                <hr />
                <p>
                  <u>respect</u> - when you regard something or someone as important and extra careful not to harm them, treat them rudely<br />
                  <u>integrity</u> - the quality of being honest and strong about what you believe to be right<br />
                  <u>hospitality</u> - friendly behavior towards visitors<br />
                  <u>tact</u> - the ability to be careful about what you say or do, so that you do not upset or embarrass other people<br />
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
  background-color: #ee8972;
  border:0px solid #afcde3;
  -webkit-border-radius: 30px;
  border-radius: 30px;">Getting Started</h2>

  <div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

    <p>
      Polite words are more than the elegant and finest clothes that we can have,
      for they can take us farther than the achievements we obtain.
      Attaining good manners is one of those things we can’t buy but we can have through living.
    </p>

    <p><v-container grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card light color="#f6eec7">
            <v-card-text class="px-10">
              <center>
                <p>
                  These are the most common and very handy polite expressions:
                </p>
                <p>
                  <b><i>Please!<br />
                    Thank you.<br />
                    May I?<br />
                    I’m sorry.<br />
                    Pardon me.
                  </i></b>
                </p>
              </center>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </p>

  <p>
    <b><i>“Please”</i></b> is the most basic courteous expression that we can have. We use this to make a request and command. Actually, we always get things done whenever we use it.
  </p>
  <p>
    <b><i>“Thank you.”</i></b> It’s the simplest but the best way to show how you appreciate the person who gave you a favor.
  </p>
  <p>
    <b><i>“May I?”</i></b> is what we use to ask permission. It is also our formal way of approaching other people.
  </p>
  <p>
    The powerful tool of forgiveness is <b><i>“I’m sorry.”</i></b> It leads to a new beginning, puts end on an argument, and inspires reconciliation.
  </p>
  <p>
    With <b><i>“Pardon me,”</i></b> it is always clear that the speaker would like to be pardoned or excused. It is actually the polite way of excusing oneself.
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
border-radius: 30px;">Activity
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">
  <h3>A. Try to use the words in a sentence.
  </h3>

  <ol style="margin: 12px;">
    <li>
      Thank you.
    </li>
    <li>
      Hospitality
    </li>
    <li>
      May I?
    </li>
    <li>
      Respect
    </li>
    <li>
      Please.
    </li>
  </ol>

  <h3>B. Fill in the blanks with the correct answers. The answers can be found inside the box.</h3>

  <p><v-container grid-list-md text-xs-left>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card light color="#f6eec7">
          <v-card-text class="px-10">
            <center>
              <p>
                <b>
                  tact&emsp;&emsp;&emsp; I’m sorry&emsp;&emsp;&emsp; integrity&emsp;&emsp;&emsp; manners&emsp;&emsp;&emsp; Pardon me
                </b>
              </p>
            </center>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</p>

<ol style="margin: 12px;">
  <li>
    It doesn’t matter if you are against the majority as long as you are right; this just shows that you have a great sense of <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
  </li>
  <li>
    <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u> for making you wait for a long time. The bus arrived late at the station.
  </li>
  <li>
    The good <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u> we have will show what kind of person we are.
  </li>
  <li>
    <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>. I didn’t really mean to bump into you.
  </li>
  <li>
    His <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u> and caution saves him from petty arguments and misunderstandings.
  </li>
</ol>

<h3>C. Pattern Exercise. Please answer the situational questions that enumerated below. Try to use the given expressions that we have in this lesson.
</h3>

<ol style="margin: 12px;">
  <li>
    You are having an afternoon snack with your friends.
    You need the ketchup for your fries, but the ketchup is at the end of the table next to your friend, Jane. What should you do?
  </li>
  <li>
    You accidentally broke your mom's favorite vase while you were cleaning the table. You honestly didn’t see it,
    and was too late to grab it when it tumbled down and fell to the floor.
    Are you going to tell the truth? What should you say to your mom?
  </li>
  <li>
    Your sister is washing her face and trying on her new make up in the bathroom,
    but you need to get in there quickly because you also need to use the room. What are you going to say to your sister?
  </li>
  <li>
    You accidentally bumped into this guy on your way to the library.
    He looked a little bit surprised as well as angry with what happened. What are you going to do in this kind of situation?
  </li>
  <li>
    Your brother is at his friend’s house and you are about to go to the movies. You saw his navy pullover sweater hanging on his clothes rack.
    It would look good with your outfit that time. So, what are you going to do? Are you going to get it without your brother’s permission?
  </li>
</ol>

<h3>Please answer the following questions in complete sentences.</h3>

<ol style="margin: 12px;">
  <li>
    Why are manners important?
  </li>
  <li>
    What are some good manners when using a phone in public?
  </li>
  <li>
    What are some good table manners?
  </li>
  <li>
    What are some good manners when using public transport?
  </li>
  <li>
    Can manners affect your success in life? How?
  </li>
  <li>
    What are some manners that are considered to be good in your country?
  </li>
  <li>
    What are some manners that are considered to be bad in your country?
  </li>
  <li>
    What are some manners in your country that have disappeared over time?
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

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;"></div>
  <ol style="margin: 12px;">
    <li>
      It doesn’t matter if you are against the majority as long as you are right; this just shows that you have a great sense of <u>integrity</u>.
    </li>
    <li>
      <u>Pardon me</u> for making you wait for a long time. The bus arrived late at the station.
    </li>
    <li>
      The good <u>manners</u> we have will show what kind of person we are.
    </li>
    <li>
      <u>I'm sorry</u>. I didn’t really mean to bump into you.
    </li>
    <li>
      His <u>tact</u> and caution saves him from petty arguments and misunderstandings.
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
          speech:'Good morning, Sir. May I help you?'
        },
        {
          name:'B:',
          speech: 'I’m looking for a pair of black cotton trousers.'
        },
        {
          name:'A:',
          speech:'Oh! I think we are looking at the wrong place, Sir. The trousers are next to those stalls. Here’s one, Sir!'
        },
        {
          name:'B:',
          speech: 'Do you mind if I try this on me?'
        },
        {
          name:'A:',
          speech:'No, not at all, Sir.'
        },
        {
          name:'B:',
          speech: 'Thank you. It’s quite all right for me. I’ll take these.'
        },
      ],

      translations:[
      {
          name:'A:',
          speech:'좋은 아침입니다, 선생님. 무슨 일이시죠?'
        },
        {
          name:'B:',
          speech: '검은색 면바지를 찾고 있습니다.'
        },
        {
          name:'A:',
          speech:'오! 우리가 잘못된 장소를 보고 있는 것 같습니다, 선생님. 바지는 저 가판대 옆에 있습니다. 여기 있습니다, 선생님!'
        },
        {
          name:'B:',
          speech: '이거 한번 입어봐도 될까요?'
        },
        {
          name:'A:',
          speech:'그럼요, 선생님.'
        },
        {
          name:'B:',
          speech: '감사합니다. 제게 꽤 잘 맞네요. 이걸로 가져갈게요.'
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

<style scoped lang="css">

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
