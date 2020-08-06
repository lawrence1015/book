<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/two-gift-boxes-near-cake-with-happy-birthday-candles-against-blue-backdrop_23-2148190488.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgb(59, 105, 120, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">When is your birthday? 
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">When is your birthday?</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs" :key="dialog">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Exercise</h3>
        <div style="padding : 16px;">

        <p>
          <u>Answer the question</u><br />
          ( 질문에 답하시오 )
        </p>

        <ol style="margin: 12px;">
          <li>
            What’s the date today? - It’s ....<br />
              오늘은 며칠입니까?<br />
          </li>
          <li>
            What was the date yesterday?<br />
              어제는 며칠이었습니까?<br />
          </li>
          <li>
            When is the New Year’s Day? <br />
              새해는 언제입니까?<br />
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
            When is your birthday?<br />
            When is your parents’ birthday?<br/ >
            What is your favorite holiday? When is it?<br />
            


        </p>



      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Translation</h3>
      <div style="padding : 16px;">

        <table style = "border-collapse: collapse;">

          <tr v-for="translation in translations" :key="translation">
            <td class = "uppertable" >{{translation.name}}</td>
            <td class = "lowertable" >{{translation.speech}}</td>
          </tr>

        </table>
        
</div>
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
        </div>
        <h3 class = "border white--text" style="padding-top: 7px;
                                                margin-left: -18px;
                                                margin-right: -18px;
                                                padding-left: 10px;
                                                padding-bottom: 10px;
                                                padding-top: 10px;
                                                margin-top: 0px;
                                                background-color: #204051;">Self Study</h3>
        <div style="padding : 16px;">

          <p>

            <v-container grid-list-md text-xs-left>
              <v-layout row wrap>


                <v-flex xs12>
                  <v-card light color="#cae8d5">
                    <v-card-text class="px-10">
                    <li>
                      Notes
                    </li>
                    <ol style="margin: 12px;">
                    <li>
                      전치사 in : 연도나 달 앞에 전치사 in을 사용합니다. in January / in May / in December / etc.<br />
                    </li>
                  </ol>
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
          speech:'Hello.'
        },
        {
          name:'B:',
          speech:'Hi, Walt. It’s me, Sharon.'
        },
        {
          name:'A:',
          speech:'Hi, Sharon. What’s up?'
        },
        {
          name:'B:',
          speech:'Walt, is it your birthday this weekend?'
        },
        {
          name:'A:',
          speech:'Yep. It’s this Saturday, May 28th.'
        },
        {
          name:'B:',
          speech:'Are you going to celebrate? How about going to the music festival at Sun City Stadium? I can get you a ticket if you want.'
        },
        {
          name:'A:',
          speech:'Really? That sounds great! What time does it start?'
        },
        {
          name:'B:',
          speech:'It starts at 4:00.'
        },
        {
          name:'A:',
          speech:'Hmm… I’m afraid I can’t make it by then. I have to study late on Saturday. What time does it end?'
        },
        {
          name:'B:',
          speech:'Not too late. Probably around 7:30. How about going to the Vienna Café for some cake and coffee after the concert?'
        },
        {
          name:'A:',
          speech:'What time does the café close?'
        },
        {
          name:'B:',
          speech:'At midnight. Come on … it’s your birthday!'
        },
        {
          name:'A:',
          speech:'OK, you’re right! I’ll be there around 4:00.'
        },
        {
          name:'B:',
          speech:'Great! See you then.'
        },
        {
          name:'A:',
          speech:'Oh… and when’s your birthday, by the way?'
        },
        {
          name:'B:',
          speech:'Not any soon. My birthday is in October.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'안녕하세요.'
        },
        {
          name:'B:',
          speech:'안녕, Walt. 나야, Sharon이야.'
        },
        {
          name:'A:',
          speech:'안녕, Sharon. 무슨 일이야?'
        },
        {
          name:'B:',
          speech:'Walt, 이번 주말이 너의 생일이지?'
        },
        {
          name:'A:',
          speech:'응. 이번주 토요일, 5월 28일이 내 생일이야.'
        },
        {
          name:'B:',
          speech:'축하파티할거야? Sun City Stadium에서 하는 뮤직 페스티발에 가는 것 어때? 너가 원하면 티켓을 구할 수 있어.'
        },
        {
          name:'A:',
          speech:'정말? 좋은 것 같애! 몇시에 시작하니?'
        },
        {
          name:'B:',
          speech:'4시에 시작해.'
        },
        {
          name:'A:',
          speech:'음... 유감이지만 그 때까지 못 갈 것 같애. 토요일날 늦게까지 공부를 해야 해서. 언제끝나니?'
        },
        {
          name:'B:',
          speech:'그렇게 늦게 끝나진 않아. 아마도 7시 30분쯤. 콘서트 끝나고 Vienna Cafe에 가서 케이크랑 커피를 마시는건 어때?'
        },
        {
          name:'A:',
          speech:'카페는 언제 끝나는데?'
        },
        {
          name:'B:',
          speech:'12시에. 제발... 너 생일이잖아!'
        },
        {
          name:'A:',
          speech:'알았어. 너의 말이 맞아! 한 4시쯤 거기로 갈께.'
        },
        {
          name:'B:',
          speech:'좋아! 그 때봐!'
        },
        {
          name:'A:',
          speech:'오... 그런데 너 생일은 언제니?'
        },
        {
          name:'B:',
          speech:'빠르지않아. 내 생일은 10월이야.'
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

.border:before {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 40px 40px 0px 0px;
  transform: rotate(180deg);
  border-color: transparent #204051 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #204051;
  padding-left: 10px;

}
.profile {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top : 330px;
  padding-left : 10px;
  padding-bottom: 10px;
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
