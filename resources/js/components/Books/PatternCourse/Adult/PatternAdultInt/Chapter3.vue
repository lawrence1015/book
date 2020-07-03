<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/young-male-web-designers-working-computer_1303-19449.jpg">

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
        border-radius: 30px;">What Did She Tell You?
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
                  <i>Reported Speech</i>
                </p>
                <hr />
                <p>
                  <u>ask</u> - to speak or write to someone in order to get an answer, information, or a solution
                </p>
                <p>
                  say - to express an idea, feeling, or thought using words
                </p>
                <p>
                  tell - if someone tells you something, they communicate information, a story, or their feelings to you
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
      <i><b>Reported Speech</b></i> is what we use if we want to share with another person
      a conversation we had in the past. We always change the main verb
      of the original message to its simple past form. The most common reporting verbs that we can use are
      <b><i>told, said,</i></b> and <b><i>asked.</i></b>
    </p>

    <p><v-container grid-list-md text-xs-left>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card light color="#f6eec7">
            <v-card-text class="px-10">
              <center>
                If we are going to use <b><i>told</i></b> in the reported speech, we need to have the object (me, you, her). However, if we use
                <b><i>say,</i></b> we don’t need to have the object.
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


  <table style = "border-collapse: collapse;">

    <tr v-for="firstexample in firstexamples">
      <td class = "uppertable" >{{firstexample.name}}</td>
      <td class = "lowertable" >{{firstexample.speech}}</td>
    </tr>

  </table>

  <br />
  <p>
    But, we can use Present Tense if the statement is still happening or thought to be happening in the present.
  </p>
  <p>
    This way, you don’t need to change the main verb of the original sentence.
  </p>
  <p>
    Example
  </p>


  <table style = "border-collapse: collapse;">

    <tr v-for="secondexample in secondexamples">
      <td class = "uppertable" >{{secondexample.name}}</td>
      <td class = "lowertable" >{{secondexample.speech}}</td>
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
  <h3>A. Fill in the blanks with said and told.
  </h3>

  <ol style="margin: 12px;">
    <li>
      My parents <u>&emsp; &emsp; </u>  me that they are very well.
    </li>
    <li>
      Tracy <u>&emsp; &emsp; </u>  her that he has a new car.
    </li>
    <li>
      She <u>&emsp; &emsp; </u>  that she was going to enroll in a driving school.
    </li>
    <li>
      Jenny <u>&emsp; &emsp; </u>  that she was going to enroll in a driving school.
    </li>
    <li>
      I <u>&emsp; &emsp; </u>  Lisa that I didn’t have any money.
    </li>
    <li>
      Steve <u>&emsp; &emsp; </u>  that he was feeling ill.
    </li>
    <li>
      I <u>&emsp; &emsp; </u>  him to read these books.
    </li>
    <li>
      Christine <u>&emsp; &emsp; </u>  that she was almost sure.
    </li>
    <li>
      Mary <u>&emsp; &emsp; </u>  Liza to be careful.
    </li>
    <li>
      I <u>&emsp; &emsp; </u>  him not to wait for me outside the cinema.
    </li>
  </ol>

  <h3>B. Pattern Exercise. Turn the following into reported speech.</h3>

  <ol style="margin: 12px;">
    <li>
      “Is Peter here?” Calvin asked.
    </li>
    <li>
      “What are you going to do this holiday?” Sunny asked Joe.
    </li>
    <li>
      “Are you from Korea?’ the police asked the girl.
    </li>
    <li>
      Mother asked, “What do you want for breakfast?”
    </li>
    <li>
      “I will meet all of you on Friday,” the teacher said.
    </li>
    <li>
      Christine said, “I want to be a doctor.”
    </li>
    <li>
      “Wait for me here,” Kate said.
    </li>
    <li>
       Jean asked, “Where are you going?”
    </li>
    <li>
       “Take care of your sister,” mother said.
    </li>
    <li>
       Tommy said, “I want to watch the baseball game on Saturday.”
    </li>
  </ol>

  <h3>C. Complete the reported speech sentences. The first one was done for you.
  </h3>

  <ol style="margin: 12px;">
    <li>
      “It’s hot.” <br />
      Alice said that it was hot.
    </li>
    <li>
      “You should eat less.”<br />
      The doctor told me <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
    </li>
    <li>
      “Look for a job if you wanted to earn money.” <br />
      My father told me <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
    </li>
    <li>
      “Why did you buy that skirt?” <br />
      Tina asked Sarah <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
    </li>
    <li>
      “Don’t disturb me.” <br />
      I told her <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
    </li>
    <li>
      “Look on the bright side of life.”<br />
      My mother told me <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
    </li>
    <li>
      “You need to give more time on important things.”<br />
      She said that <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
    </li>
    <li>
      “Who helped you with your work?”<br />
      The teacher asked me <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
    </li>
    <li>
      “When is your birthday?”<br />
      Tommy asked me <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </u>.
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
  <h3>A. Fill in the blanks with said and told.
  </h3>

  <ol style="margin: 12px;">
    <li>
      My parents <u>told</u> me that they are very well.
    </li>
    <li>
      Tracy <u>told</u> her that he has a new car.
    </li>
    <li>
      She <u>said</u> that she was going to enroll in a driving school.
    </li>
    <li>
      Jenny <u>said</u> that she was going to enroll in a driving school.
    </li>
    <li>
      I <u>told</u> Lisa that I didn’t have any money.
    </li>
    <li>
      Steve <u>said</u> that he was feeling ill.
    </li>
    <li>
      I <u>told</u> him to read these books.
    </li>
    <li>
      Christine <u>said</u> that she was almost sure.
    </li>
    <li>
      Mary <u>told</u> Liza to be careful.
    </li>
    <li>
      I <u>told</u> him not to wait for me outside the cinema.
    </li>
  </ol>

  <h3>B. Pattern Exercise. Turn the following into reported speech.</h3>

  <ol style="margin: 12px;">
    <li>
      Calvin asked if Peter was here.
    </li>
    <li>
      Sunny asked Joe what he was going to do this holiday.
    </li>
    <li>
      The police asked the girl if she was from Korea.
    </li>
    <li>
      My mother asked what I want for breakfast.
    </li>
    <li>
      The teacher said that he'll meet all of us on Friday.
    </li>
    <li>
      Christine said that she wants to be a doctor.
    </li>
    <li>
      Kate said to wait for her here.
    </li>
    <li>
      Jean asked me where I was going.
    </li>
    <li>
      Mother said that I should take care of my sister.
    </li>
    <li>
      Tommy said that he wants to watch the baseball game on Saturday
    </li>
  </ol>

  <h3>C. Complete the reported speech sentences. The first one was done for you.
  </h3>

  <ol style="margin: 12px;">
    <li>
      “It’s hot.” <br />
      Alice said that it was hot.
    </li>
    <li>
      The doctor told me that I should eat less.
    </li>
    <li>
      My father told me to look for a job if I wanted to earn money.
    </li>
    <li>
      Tina asked Sarah why she bought the skirt.
    </li>
    <li>
      I told her not to disturb me.
    </li>
    <li>
      My mother told me to look on the bright side of life.
    </li>
    <li>
      She said that I should give more time on important things.
    </li>
    <li>
      The teacher asked who helped me with my work
    </li>
    <li>
      Tommy asked me when my birthday was.
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
      
      firstexamples:[
        {
          name: 'Message:',
          speech: 'Mother said, “If you study hard, you will get good grades.”'
        },
        {
          name: 'Reported Speech:',
          speech: 'Mother told me that if I studied hard, I would get good grades.'
        },
        {
          name: 'Message:',
          speech: '“Where are you going?”, Amy asked John.'
        },
        {
          name: 'Reported Speech:',
          speech: 'Amy asked John where he was going.'
        },
      ],


      secondexamples:[
        {
          name:'Message:',
          speech: 'June said, “I am sick.”'
        },
        {
          name:'Reported Speech:',
          speech: 'June said that she is sick. (It means even until now June is still sick.)'
        },
      ],

      dialogs:[
        {
          name:'A:',
          speech:'Oh Bob! You’re still here?'
        },
        {
          name:'B:',
          speech: 'I forgot some of my files. That’s why I came back to the office. Why? Is there something you want to tell me?'
        },
        {
          name:'A:',
          speech:'Actually Leo, your friend, was here a while ago, I’m sorry Bob, I told him that you went home already.'
        },
        {
          name:'B:',
          speech: 'Oh, it`s okay. It`s not your fault anyway, but did he ever tell you why he tried to visit me?'
        },
        {
          name:'A:',
          speech:'He said that he would just come back here tomorrow to see you in person. And oh, he also told me, you could call him if you have got his message.'
        },
        {
          name:'B:',
          speech: 'Thank you for that, Chris!'
        },
        {
          name:'A:',
          speech:'No problem, Bob!'
        },
      ],

      translations:[
      {
          name:'A:',
          speech:'오 Bob! 아직 여기 있어?'
        },
        {
          name:'B:',
          speech: '내 파일 몇 개를 잊어버렸어. 그래서 사무실로 돌아온 거야. 왜? 나한테 할말 있어?'
        },
        {
          name:'A:',
          speech:'사실 네 친구 Leo가 조금 전에 여기 있었는데, 미안해, Bob, 집에 벌써 갔다고 내가 말했어.'
        },
        {
          name:'B:',
          speech: '아, 괜찮아. 어차피 네 잘못은 아니지만, 그가 왜 나를 방문하려고 했는지 말해준 적이 있었니?'
        },
        {
          name:'A:',
          speech:'내일 그냥 직접 보러 온다고 했어. 그리고 아, 그리고 그가 나에게 말하길, 만약 네가 그의 메시지를 받았으면 그에게 전화해도 된다고 했어.'
        },
        {
          name:'B:',
          speech: '고마워, Chris!'
        },
        {
          name:'A:',
          speech:'문제 없어, Bob!'
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
