<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_1150-7411.jpg">

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
        padding-bottom: 10px;">Leisure Time
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Leisure Time</li><br />
      
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
          <u>Answer questions.</u><br />
          (질문에 답하세요.)<br />
        </p>

        <ol style="margin: 12px;">
          <li>
            What are you doing on Friday night?<br />
              금요일밤에 당신은 무엇을 하려고 하십니까?<br />
          </li>
          <li>
            Are you going out Friday night? <br />
              금요일밤에 당신은 외출을 하려고 합니까?<br />
          </li>
          <li>
            Are you getting up early this Saturday?<br />
              이번 주 토요일에 당신은 일찍 일어날 예정입니까?<br />
          </li>
          <li>
            Are you going to the movies this weekend?<br />
              이번 주말에 영화 보러 갈 예정입니까?<br />
          </li>
        </ol>
        <br />

        <p>
          Free response:<br />
          <br />
            What are you doing on Friday night?<br />
            Are you getting up early this Saturday?<br />
            Are you going to the movies this weekend?<br />

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
                      what are you doing? 하면 너는 지금 무엇을 하고 있니? 라고 현재 진행하고 있는 것으로 주로 해석을 하지만 미래에 무엇을 할 예정인가를 물을 때에도 이 표현을 씁니다.<br />
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
          name:'1',
          speech:' '
        },
        {
          name:'A:',
          speech:'What are you doing this weekend?'
        },
        {
          name:'B:',
          speech:'I’m going out of town.'
        },
        {
          name:'A:',
          speech:'Oh? Where are you going?'
        },
        {
          name:'B:',
          speech:'I’m going to Cape Cod.'
        },
        {
          name:'A:',
          speech:'For how long?'
        },
        {
          name:'B:',
          speech:'Just for two days.'
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
          speech:'Would you like to come to a party?'
        },
        {
          name:'D:',
          speech:'Well, uh, I’d like to. When is it?'
        },
        {
          name:'C:',
          speech:'Saturday night.'
        },
        {
          name:'D:',
          speech:'Oh, sorry. I’m busy on Saturday.'
        },
        {
          name:'C:',
          speech:'What are you doing?'
        },
        {
          name:'D:',
          speech:'Uh… I’m doing my homework.'
        },
        {
          name:'C:',
          speech:'Your homework?'
        },
        {
          name:'D:',
          speech:'That’s right.'
        },
        {
          name:'C:',
          speech:'Well, maybe some other time.'
        },
        {
          name:'D:',
          speech:'Right. Uh, thanks anyway.'
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
          speech:'Hi, Emily. What are you doing tonight?'
        },
        {
          name:'F:',
          speech:'I’m seeing a movie with Thomas.'
        },
        {
          name:'E:',
          speech:'Are you meeting him at the theater?'
        },
        {
          name:'F:',
          speech:'No, we’re going in his car.'
        },
        {
          name:'E:',
          speech:'What are you doing after the movie?'
        },
        {
          name:'F:',
          speech:'We’re having dinner at a Mexican restaurant.'
        },
        {
          name:'E:',
          speech:'Well, have a good time.'
        },
        {
          name:'F:',
          speech:'Thanks Jack. See you later.'
        },
        ],

        translations:[
        {
          name:'1',
          speech:' '
        },
        {
          name:'A:',
          speech:'이번 주말에 뭐 할거니?'
        },
        {
          name:'B:',
          speech:'나는 도시에서 나갈 거야.'
        },
        {
          name:'A:',
          speech:'오? 어디로 갈 건데?'
        },
        {
          name:'B:',
          speech:'Cape Cod로 갈 거야.'
        },
        {
          name:'A:',
          speech:'얼마 동안?'
        },
        {
          name:'B:',
          speech:'이틀 동안만.'
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
          speech:'파티에 오실래요?'
        },
        {
          name:'D:',
          speech:'글쎄요, 가고 싶긴 한데요. 언제인가요?'
        },
        {
          name:'C:',
          speech:'토요일 밤이예요'
        },
        {
          name:'D:',
          speech:'오, 죄송해요. 저는 토요일에 바빠요'
        },
        {
          name:'C:',
          speech:'뭘 하실 건데요?'
        },
        {
          name:'D:',
          speech:'어.. 숙제를 할 거예요.'
        },
        {
          name:'C:',
          speech:'숙제를요?'
        },
        {
          name:'D:',
          speech:'네 그래요'
        },
        {
          name:'C:',
          speech:'그럼, 다음 기회에 오세요.'
        },
        {
          name:'D:',
          speech:'네. 어쨌든 고마워요.'
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
          speech:'안녕, Emily. 오늘밤 뭐 할 거니?'
        },
        {
          name:'F:',
          speech:'Thomas랑 영화 볼 거야.'
        },
        {
          name:'E:',
          speech:'극장에서 만날 거니?'
        },
        {
          name:'F:',
          speech:'아니, 그의 차로 갈 거야.'
        },
        {
          name:'E:',
          speech:'영화 본 후에는 뭐 할 거야?'
        },
        {
          name:'F:',
          speech:'맥시코 식당에서 저녁을 먹을 거야.'
        },
        {
          name:'E:',
          speech:'그럼, 좋은 시간 보내.'
        },
        {
          name:'F:',
          speech:'고마워 Jack. 나중에 봐.'
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
