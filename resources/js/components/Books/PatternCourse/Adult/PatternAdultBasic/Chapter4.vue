<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGxr9ymn4/4/screen_2x/canva-new-york-central-park-MADGxr9ymn4.jpg">

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
        border-radius: 30px;">Wh Questions
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
                <h4>‘WH Questions”</h4>

                <p>
                  <span style="font-size:14px">우리는 특정 유형의 질문을 하기 위해 의문사를 사용한다. 우리는 종종 그것들을’
                  </span>WH <span style="font-size:14px">단어’라고 부른다 왜냐하면 그것들은</span>
                  ‘WH’<span style="font-size:14px">를 포함하기 때문이다.</span>
                  (<span style="font-size:14px">예를 들어</span>  WHy, HoW).
                </p>


                <table style = "font-family: arial,
                sans-serif;
                border-collapse: collapse;
                width: 100%;">

                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">what</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">무엇</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">What is your name?</td>
                </tr>
                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">when</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">언제</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">When did he leave?</td>
                </tr>
                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">where</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">어디</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">Where do they live?</td>
                </tr>
                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">who</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">누구</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">Who opened the door?</td>
                </tr>
                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">why</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">왜</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">Why do you say that?</td>
                </tr>
                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">how</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">어떻게</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">How does this work?</td>
                </tr>
              </table>
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
  border-radius: 30px;">Dialogue</h2>

  <div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

    <table style = "border-collapse: collapse;">
    
      <tr v-for="dialog in dialogs">
        <td class = "uppertable" >{{dialog.name}}</td>
        <td class = "lowertable" >{{dialog.speech}}</td>
      </tr>

    </table>

    <table style = "border-collapse: collapse;">

      <tr v-for="translation in translations">
        <td class = "uppertable" >{{translation.name}}</td>
        <td class = "lowertable" >{{translation.speech}}</td>
      </tr>

    </table>

    <p>

      <v-container grid-list-md text-xs-left>
        <v-layout row wrap>


          <v-flex xs12>
            <v-card light color="#d7eaea">
              <v-card-text class="px-10">

                <table style = "font-family: arial,
                sans-serif;
                border-collapse: collapse;
                width: 100%;">

                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">which</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">어느것</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">Which color do you want?</td>
                </tr>
                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">whom</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">누구를</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">Whom did you see?</td>
                </tr>
                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">whose</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">누구의</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">Whose are these keys? <br /> Whose turn is it?</td>
                </tr>
                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">how far</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">얼마나 먼</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">How far is Incheon from Seoul?</td>
                </tr>
                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">how long</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">얼마나 오래</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">How long will it take?</td>
                </tr>
                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">how many</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">얼마나 많이 (수)</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">How many cars are there?</td>
                </tr>
                <tr>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">How much</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">얼마나 많이 (양)</td>
                  <td style ="border: 1px solid #dddddd; text-align: left; padding: 8px;">How much money do you have?</td>
                </tr>
              </table>

            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

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

  <h3>Pattern Exercise: Fill in the blanks with the correct WH Word/ Question Word.</h3>

  <ol style="padding-right: 20px; padding-top: 12px;">
    <li>
      <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> is your name?
    </li>
    <li>
      <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> do you live?
    </li>
    <li>
      <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> are you today?
    </li>
    <li>
      <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u>  is he?
    </li>
    <li>
      <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u>  are you tired?
    </li>
    <li>
      <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u>  book is this?
    </li>
    <li>
      <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> time do you usually get up?
    </li>
    <li>
      <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> fruit do you prefer, oranges or lemons?
    </li>
    <li>
      <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> are you leaving for the States?
    </li>
    <li>
      <u>&emsp;&emsp;&emsp;&emsp;&emsp;</u> old is she?
    </li>
  </ol>


  <h3>Pattern Exercise: Make your own WH questions for the following statements.
  </h3>

  <ol style="padding-right: 20px; padding-top: 12px;">
    <li>
      I went to Incheon last Saturday.
    </li>
    <li>
      Tina and Marie are my best buddies.
    </li>
    <li>
      I went to China last month.
    </li>
    <li>
      I usually eat lunch at 12 o’ clock.
    </li>
    <li>
      English is one of my favorite languages.
    </li>
    <li>
      Mr. Han Min Lee is my father.
    </li>
    <li>
      I go to school at Seoul University.
    </li>
    <li>
      Korean Literature is my major.
    </li>
    <li>
      I usually go to work at 7 o’ clock.
    </li>
    <li>
      I live in Suwon City.
    </li>
  </ol>

  <h3>Pattern Exercise: Make your own questions using these phrases. Focus on the words “How, Which, and Whom”.
  </h3>

  <ol style="padding-right: 20px; padding-top: 12px;">
    <li>
      5 hours of travel from Seoul to the Philippines
    </li>
    <li>
      10,000 won left with me
    </li>
    <li>
      5 cars at home
    </li>
    <li>
      blue and yellow
    </li>
    <li>
      vote for Mr. White
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
          name:'Linda:',
          speech:'Hi, Mr. Ford. How are you?'
        },
        {
          name:'Mr. Ford:',
          speech:'I`m fine. And you?'
        },
        {
          name:'Linda:',
          speech:'I`m very well, thank you! Have you just arrived from a trip?'
        },
        {
          name:'Mr. Ford:',
          speech:'Yes, I did'
        },
        {
          name:'Linda:',
          speech:'That`s nice. Where did you go?'
        },
        {
          name:'Mr. Ford:',
          speech:'Oh, I went to New York.'
        },
        {
          name:'Linda:',
          speech:'When did you go there?'
        },
        {
          name:'Mr. Ford:',
          speech:'I went there last week.'
        },
        {
          name:'Linda:',
          speech:'What did you do there Mr. Ford?'
        },
        {
          name:'Mr. Ford:',
          speech:'I visited many places with my relatives.'
        },
        {
          name:'Linda:',
          speech:'Wow! I think you had a great time, but why do you look sad, Mr. Ford?'
        },
        {
          name:'Mr. Ford:',
          speech:'I think I’m just tired today, Linda.'
        },
        ],

        translations:[
        {
          name:'Linda:',
          speech:'안녕하세요, Mr. Ford. 어떻게 지냈어요?'
        },
        {
          name:'Mr. Ford:',
          speech:'잘 지냈어요. 당신은요?'
        },
        {
          name:'Linda:',
          speech:'난 아주 잘 지내요, 여행에서 방금 도착하셨나요?'
        },
        {
          name:'Mr. Ford:',
          speech:'맞아요.'
        },
        {
          name:'Linda:',
          speech:'멋지다. 어디 갔었어요?'
        },
        {
          name:'Mr. Ford:',
          speech:'아, 뉴욕에 갔었어요.'
        },
        {
          name:'Linda:',
          speech:'언제 그곳에 갔어요?'
        },
        {
          name:'Mr. Ford:',
          speech:'지난주에 그곳에 갔었어요.'
        },
        {
          name:'Linda:',
          speech:'Mr. Ford, 거기서 뭐하셨어요?'
        },
        {
          name:'Mr. Ford:',
          speech:'나는 친척들과 많은 곳을 방문했어요.'
        },
        {
          name:'Linda:',
          speech:'와! 난 당신이 좋은 시간을 보냈다고 생각하는데, 왜 슬퍼 보이죠, Mr. Ford?'
        },
        {
          name:'Mr. Ford:',
          speech:'Linda, 오늘은 그냥 피곤한 것 같아요.'
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
