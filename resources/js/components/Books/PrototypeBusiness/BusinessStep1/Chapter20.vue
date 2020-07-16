<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/aMskc/MADyRQaMskc/1/s2/canva-people-eating-pizza-MADyRQaMskc.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(72, 87, 125, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Discussing Future Arrangements
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #43464C; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <table style = "border-collapse: collapse;">
    
      <tr v-for="dialog in dialogs" :key="dialog">
        <td class = "uppertable" >{{dialog.name}}</td>
        <td class = "lowertable" >{{dialog.speech}}</td>
      </tr>

    </table>


<div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Translation</h3>
    <div style="padding : 16px;">

      <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations" :key="translation">
          <td class = "uppertable" >{{translation.name}}</td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>

      </table>

    </div>  

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Fill in the gaps.<br />
          Who / Why/ How/arriving/ flying / staying
        </p>
        <ol style="margin: 12px;">
          <li>
             ( &emsp; &emsp; &emsp; &emsp; ) are you going to Paris? On business?
          </li>
          <li>
             ( &emsp; &emsp; &emsp; &emsp; ) are you meeting? Tanya Dolan again?
          </li>
          <li>
             ( &emsp; &emsp; &emsp; &emsp; ) are you travelling to Paris? Are you driving?
          </li>
          <li>
             When are you ( &emsp; &emsp; &emsp; &emsp; ) in London? At 20.30.
          </li>
          <li>
             Are you ( &emsp; &emsp; &emsp; &emsp; ) to Barcelone? Yes, with Lufthansa.
          </li>
          <li>
             Where are you ( &emsp; &emsp; &emsp; &emsp; ) in Avignon? At the hotel ibis.
          </li>
        </ol>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Self Study</h3>
      <div style="padding : 16px;">


          <p>
            Notes
          </p>

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#9197A6">
                  <v-card-text class="px-10">
                    <p>
                      현재진행형:<br />
                      I’m flying to London on Monday.<br />
                      She’s meeting a colleague this afternoon.
                    </p>
                    <p>
                      Who..? Why?:<br />
                      Who are you working with? I’m working with John.<br />
                      Why are you going to Hamburg? I’m going to a meeting.
                    </p>
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
          name:'Lilly:',
          speech:'When are you going to Europe, Gary? Next week?'
        },
        {
          name:'Gary:',
          speech:'Yes. I’m leaving Los Angeles on Monday.'
        },
        {
          name:'Lilly:',
          speech:'Where are you going? To the London office?'
        },
        {
          name:'Gary:',
          speech:'Yes.'
        },
        {
          name:'Lilly:',
          speech:'Uhuh. Who are you meeting? Tanya Dolan again?'
        },
        {
          name:'Gary:',
          speech:'Yes. I’m working with Tanya on Tuesday. Then I’m meeting Sue Redman and James Barker on Wednesday, then I’m going to Paris.'
        },
        {
          name:'Lilly:',
          speech:'Really? Why are you going to Paris? On business?'
        },
        {
          name:'Gary:',
          speech:'No. I’m taking a break. I’m having two days off.'
        },
        {
          name:'Lilly:',
          speech:'Great. Good idea. So, how are you travelling to Paris? Are you driving?'
        },
        {
          name:'Gary:',
          speech:'No. I’m taking the train - the Eurostar.'
        },
        {
          name:'Lilly:',
          speech:'Oh, right.'
        },
        {
          name:'Gary:',
          speech:'Then I’m staying in Paris for three nights.'
        },
        {
          name:'Lilly:',
          speech:'Great. So are you flying back to LA from Paris? Or…'
        },
        {
          name:'Gary:',
          speech:'No. I’m coming back to London on the train. Then I’m flying home on Saturday afternoon.'
        },
        {
          name:'Lilly:',
          speech:'OK.'
        },
        {
          name:'Gary:',
          speech:'I’m arriving in LA in the middle of the night. Just after midnight.'
        },
        {
          name:'Lilly:',
          speech:'Mmm. So, is it just one flight between LA and London?'
        },
        {
          name:'Gary:',
          speech:'No. I’m not flying direct. I’m going LA, New York, London. Then, on the flight home, I’m changing in Chicago.'
        },
        ],

        translations:[
        {
          name:'릴리:',
          speech:'게리, 언제 유럽에 갈 거예요? 다음 주에요?'
        },
        {
          name:'게리:',
          speech:'그래요. 월요일에 로스앤젤레스를 떠납니다.'
        },
        {
          name:'릴리:',
          speech:'어디 가세요? 런던 지사로요?'
        },
        {
          name:'게리:',
          speech:'그래요.'
        },
        {
          name:'릴리:',
          speech:'네. 누구를 만나요? 또 타냐 돌란요?'
        },
        {
          name:'게리:',
          speech:'그래요. 저는 화요일에 타냐와 함께 일합니다. 그리고 수요일에 Sue Redman과 James Bakker를 만나고 파리로 갈 거예요.'
        },
        {
          name:'릴리:',
          speech:'그래요? 당신은 왜 파리에 가나요? 사업상요?'
        },
        {
          name:'게리:',
          speech:'아니요. 전 쉬어요. 이틀 동안 쉬어요.'
        },
        {
          name:'릴리:',
          speech:'좋아요. 좋은 생각이에요. 그래서, 파리는 어떻게 여행할 건가요? 운전할건가요?'
        },
        {
          name:'게리:',
          speech:'아니요. 저는 유로스타 열차를 타고 갈 거예요.'
        },
        {
          name:'릴리:',
          speech:'아, 그렇군요.'
        },
        {
          name:'게리:',
          speech:'그럼 저는 파리에서 3박을 할 거예요.'
        },
        {
          name:'릴리:',
          speech:'좋아요. 그럼 파리에서 LA로 돌아가시는 건가요? 아니면요...'
        },
        {
          name:'게리:',
          speech:'아니요. 저는 기차를 타고 런던으로 돌아갑니다. 그럼 토요일 오후에 비행기를 타고 집에 갈 거예요.'
        },
        {
          name:'릴리:',
          speech:'네.'
        },
        {
          name:'게리:',
          speech:'한밤중에 LA에 도착할 거예요. 자정 직후에요.'
        },
        {
          name:'릴리:',
          speech:'음. 그럼, LA와 런던 사이의 비행기 한 대인가요?'
        },
        {
          name:'게리:',
          speech:'아니요. 직항편이 아닙니다. LA, 뉴욕, 런던에 갈 거예요. 그럼, 집으로 가는 비행기에서 시카고에서 갈아탈 거예요.'
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
  border-color: transparent #43464C transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #43464C;
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
