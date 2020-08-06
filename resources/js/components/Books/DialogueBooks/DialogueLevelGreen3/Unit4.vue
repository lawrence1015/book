<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://i1.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/03/orlando-florida.jpg">

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
        padding-bottom: 10px;">Talking about the past
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Talking about the past</li><br />

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
          <u>Look at the map (you are in Orlando) and make similar conversations as in the dialog #3</u><br />
          (지도를 보세요 (당신은 Orlando에 있습니다) 그리고 세번째 대화처럼 비슷한 대화를 만들어 보세요.)<br />
        </p>

        <v-container grid-list-md text-xs-center>
          <v-layout wrap align-content-center>
          
            <v-flex xs12 md6 >
              <v-card hover>
          
                <v-img src="images/orlando.png" />
          
              </v-card>
            </v-flex>
          
          </v-layout>
        
        </v-container>
        <br />
        <p>
          Free response:<br />
            Where did you go yesterday?<br />

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
                      1) 과거시제와 함께 쓰이는 부사구 : in + 연도, last night(week), yesterday, When~?, ago 등<br />
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
          name:'1:',
          speech:' '
        },
        {
          name:'A:',
          speech:'Hi, there. I’m David and I’m your waiter for today. Are you enjoying your vacation?'
        },
        {
          name:'B:',
          speech:'Yes, thanks.'
        },
        {
          name:'A:',
          speech:'Is this your first day in Orlando?'
        },
        {
          name:'B:',
          speech:'No, we came here two days ago.'
        },
        {
          name:'A:',
          speech:'Where are you from?'
        },
        {
          name:'B:',
          speech:'Canada… We’re from Toronto.'
        },
        {
          name:'A:',
          speech:'Did you go to a theme park yesterday?'
        },
        {
          name:'B:',
          speech:'Yes. We went to Universal Studios.'
        },
        {
          name:'A:',
          speech:'Did you have a good time?'
        },
        {
          name:'B:',
          speech:'Yes, thank you.'
        },
        {
          name:'A:',
          speech:'Great! Now, what can I get you for breakfast?'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'2',
          speech:' '
        },
        {
          name:'C:',
          speech:'Excuse me. I left my glasses here this morning.'
        },
        {
          name:'D:',
          speech:'Where did you leave them?'
        },
        {
          name:'C:',
          speech:'Over there. I was at the table by the window.'
        },
        {
          name:'D:',
          speech:'Well, you’re lucky. The waiter found them about an hour ago.'
        },
        {
          name:'C:',
          speech:'Thank goodness! I was really worried.'
        },
        {
          name:'D:',
          speech:'There you go. He gave them to me a few minutes ago.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'3',
          speech:' '
        },
        {
          name:'E:',
          speech:'What did you do last weekend?'
        },
        {
          name:'F:',
          speech:'I went to Tampa.'
        },
        {
          name:'E:',
          speech:'Really? How did you go?'
        },
        {
          name:'F:',
          speech:'I went by car.'
        },
        {
          name:'E:',
          speech:'How long did it take?'
        },
        {
          name:'F:',
          speech:'It took about two hours.'
        },
        {
          name:'E:',
          speech:'Did you have a good time?'
        },
        {
          name:'F:',
          speech:'Yeah, I did'
        }, 
        ],

        translations:[
        {
          name:'1:',
          speech:' '
        },
        {
          name:'A:',
          speech:'안녕하세요. 저는 David이고 오늘 당신의 웨이터입니다. 휴가는 잘 보내고 계신가요?'
        },
        {
          name:'B:',
          speech:'네, 고맙습니다.'
        },
        {
          name:'A:',
          speech:'Orlando에서의 첫번째 날입니까?'
        },
        {
          name:'B:',
          speech:'아니오, 우리는 이 곳에 이틀 전에 왔습니다.'
        },
        {
          name:'A:',
          speech:'당신은 어디에서 오셨습니까?'
        },
        {
          name:'B:',
          speech:'Canada에서요... 우리는 Toronto에서 왔습니다.'
        },
        {
          name:'A:',
          speech:'당신은 어제 놀이공원에 갔습니까?'
        },
        {
          name:'B:',
          speech:'네, 우리는 Universal Studios에 갔습니다.'
        },
        {
          name:'A:',
          speech:'좋은 시간을 보냈습니까?'
        },
        {
          name:'B:',
          speech:'네, 고맙습니다.'
        },
        {
          name:'A:',
          speech:'멋집니다! 헌데, 당신에게 아침식사로 무엇을 드릴까요?'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'2',
          speech:' '
        },
        {
          name:'C:',
          speech:'실례합니다. 저는 오늘 아침 여기에 제 안경을 놔뒀는데요.'
        },
        {
          name:'D:',
          speech:'어디에 두셨나요?'
        },
        {
          name:'C:',
          speech:'저기에요. 저는 창문 옆 탁자에 있었습니다.'
        },
        {
          name:'D:',
          speech:'그럼, 당신은 운이 좋으십니다. 웨이터가 한 시간 전에 그것을 발견했습니다.'
        },
        {
          name:'C:',
          speech:'감사합니다! 저는 정말 걱정했습니다.'
        },
        {
          name:'D:',
          speech:'여기 있습니다. 그가 몇 분 전에 저에게 안경을 주었습니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'3',
          speech:' '
        },
        {
          name:'E:',
          speech:'지난 주말에 당신은 무엇을 했습니까?'
        },
        {
          name:'F:',
          speech:'저는 Tampa에 갔습니다.'
        },
        {
          name:'E:',
          speech:'정말요? 어떻게 갔습니까?'
        },
        {
          name:'F:',
          speech:'차로 갔습니다.'
        },
        {
          name:'E:',
          speech:'얼마나 걸렸습니까?'
        },
        {
          name:'F:',
          speech:'2시간 정도 걸렸습니다.'
        },
        {
          name:'E:',
          speech:'좋은 시간을 보냈습니까?'
        },
        {
          name:'F:',
          speech:'네, 그랬습니다.'
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
