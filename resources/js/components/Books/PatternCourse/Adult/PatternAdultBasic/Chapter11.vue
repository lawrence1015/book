<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/coworkers-discussing-business-ideas_23-2148336958.jpg">

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
    border-radius: 30px;">What do you know about… ?
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
              <i>“What do you know about…?”</i>
            </p>
            <hr />
            <p>
              <u>occupation</u> - the principal activity in your life that you do to earn money / <span style="font-size:14px">직업</span>
            </p>
            <p>
              <u>profession</u> - an occupation requiring special education / <span style="font-size:14px">직업</span>
            </p>
            <p>
              <u>responsibility</u> – obligation / <span style="font-size:14px">직업</span>
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

<h3>A. Dialogue
</h3>

<table style = "border-collapse: collapse;">
    
  <tr v-for="dialog in dialogs">
    <td class = "uppertable" >{{dialog.name}}</td>
    <td class = "lowertable" >{{dialog.speech}}</td>
  </tr>

</table>


<h3>B. Exercise. Make sentences using the following words.
</h3>

<ol style="margin: 12px;">
  <li>
    occupation
  </li>
  <li>
    profession
  </li>
  <li>
    responsibility
  </li>
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
    border-radius: 30px;">Activity
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">
  <h3>A. Dialogue</h3>

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

<h3>A. Pattern Exercise: Formulate a question using different professions. Follow the pattern “What do you know about?”</h3>


<ol style="margin: 12px;">
  <li>
   Engineer
   <br />
   <i>Answer:<u>What do you know about an engineer?</u></i>
  </li>
  <li>
   Nurse
  </li>
  <li>
   Doctor
  </li>
  <li>
   Teacher
  </li>
  <li>
   Dentist
  </li>
</ol>

<v-container grid-list-md text-xs-left>
    <v-layout row wrap>


        <v-flex xs12>
        <v-card light color="#d7eaea">
          <v-card-text class="px-10">
            <p>
              <i>The sound of a word's first letter determines which to use. If the word starts with a vowel sound, you should use “an”. If it starts with a consonant sound, you should use “a”.</i>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</v-container>

<h3>B. Pattern Exercise: Formulate a question using different occupations. Follow the pattern “What do you know about?” then provide answers to the questions made.
</h3>

<ol style="margin: 12px;">
  <li>
   Dancer
  </li>
  <li>
   Chef
  </li>
  <li>
   Businessman
  </li>
  <li>
   Surgeon
  </li>
  <li>
   Construction worker
  </li>
  <li>
   Carpenter
  </li>
  <li>
   Farmer
  </li>
  <li>
   Driver
  </li>
  <li>
   Painter
  </li>
  <li>
   Florist
  </li>
</ol>


<h3>C. Pattern Exercise: Answer the questions about the given list of occupations.
</h3>

<ol style="padding-right: 20px; padding-top: 10px;">
  <li>
   What do you know about jobs in big companies?
  </li>
  <li>
   What do you know about jobs related to human life?
  </li>
  <li>
   What do you know about jobs that require English skills?
  </li>
  <li>
   What do you know about jobs abroad?
  </li>
  <li>
   What do you know about dangerous jobs?
  </li>
  <li>
   What do you know about jobs related to music?
  </li>
  <li>
   What do you know about jobs that require you to stay late at night?
  </li>
  <li>
   What do you know about the jobs that are popular among teenagers?
  </li>
  <li>
   What do you know about volunteer work?
  </li>
  <li>
   What do you know about jobs mostly for males?
  </li>
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

<p>
  1. Related - Being connected either logically or causally or by shared characteristics <i>/ related ~ <span style="font-size:14px">에 관련된</span></i>
</p>

<p>
  2. Require - Make someone do something <i>/ require <span style="font-size:14px">요구하다</span></i>
</p>

<p>
  3. Dangerous - Involving or causing danger or risk; liable to hurt or harm <i>/ dangerous <span style="font-size:14px">위험한</span></i>
</p>

<p>
  4. Popular - Regarded with great favor, approval, or affection <i>/ popular <span style="font-size:14px">인기있는</span></i>
</p>

<p>
  5. Volunteer - Without payment <i>/ volunteer <span style="font-size:14px">자원봉사자</span></i>
</p>

<h3>Vocabulary Exercise: Use the following words in a sentence.</h3>

<ol style="margin: 12px;">
  <li>
   Related
  </li>
  <li>
   Require
  </li>
  <li>
   Dangerous
  </li>
  <li>
   Popular
  </li>
  <li>
   Volunteer
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
          name:'Selena:',
          speech:'Hello! How are you Tony?'
        },
        {
          name:'Tony:',
          speech:'I’m pretty good. How about you?'
        },
        {
          name:'Selena:',
          speech:'I’m doing well with my new occupation as a teacher; and you?'
        },
        {
          name:'Tony:',
          speech:'That’s good! Well, I’m practicing my profession as an engineer.'
        },
        {
          name:'Selena:',
          speech:'That sounds really great. Nice meeting you Tony!'
        },
        {
          name:'Tony:',
          speech:'Same here! See you around.'
        },
        ],

        translations:[
        {
          name:'Selena:',
          speech:'여보세요! 토니 잘 지내니?'
        },
        {
          name:'Tony:',
          speech:'난 꽤 괜찮아. 너는 어때?'
        },
        {
          name:'Selena:',
          speech:'난 교사로서의 새로운 직업에 만족하고 있어. 너는?'
        },
        {
          name:'Tony:',
          speech:'좋네! 글쎄, 난 엔지니어로서의 내 일을 연습하고 있어.'
        },
        {
          name:'Selena:',
          speech:'정말 좋다. 만나서 반가워 토니!'
        },
        {
          name:'Tony:',
          speech:'나도 마찬가지야! 다음에 보자.'
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
