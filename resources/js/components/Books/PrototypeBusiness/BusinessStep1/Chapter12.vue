<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/female-tourist-waiting-train_23-2147981863.jpg">

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
        padding-bottom: 10px;">Using the Internet 
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

      <p>Put the words in order. Make sentences.</p>

      <ol style="margin: 12px;">
        <li>
          buy/  products/ where/ I/ can/ the? ( &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          the/ can’t/ read/ I/ file. ( &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          internet/ on/ buy/ can/ books/ where/ we/ the? ( &emsp; &emsp; &emsp; &emsp; )
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
                    Can<br />
                    긍정문 주어+Can ~<br />
                    부정문 Can’t ~<br />
                    의문형 Can+주어  ~
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
          name:'Sue:',
          speech:'Stephan?'
        },
        {
          name:'Stephan:',
          speech:'Yeah?'
        },
        {
          name:'Sue:',
          speech:'Can I buy train tickets for France here in the UK?'
        },
        {
          name:'Stephan:',
          speech:'Yeah. You can book on the Internet.'
        },
        {
          name:'Sue:',
          speech:'Right.'
        },
        {
          name:'Stephan:',
          speech:'At SNCF dot com.'
        },
        {
          name:'Sue:',
          speech:'SNCF-that’s the French train company?'
        },
        {
          name:'Stephan:',
          speech:'Yeah. Do you need to book a ticket?'
        },
        {
          name:'Sue:',
          speech:'I’m not sure. Possibly. So is this website just in French, or is it…?'
        },
        {
          name:'Stephan:',
          speech:'No. You can choose English.'
        },
        {
          name:'Sue:',
          speech:'And can you pay by credit card?'
        },
        {
          name:'Stephan:',
          speech:'Yeah, and they send the tickets by mail.'
        },
        {
          name:'Sue:',
          speech:'To your home address?'
        },
        {
          name:'Stephan:',
          speech:'Yeah.'
        },
        {
          name:'Sue:',
          speech:'I can’t receive tickets, I live in the UK, though…'
        },
        {
          name:'Stephan:',
          speech:'Yes, you can. they send tickets to different countries.'
        },
        {
          name:'Sue:',
          speech:'Oh, right. So SNCF dot com, then.'
        },
        {
          name:'Stephan:',
          speech:'That’s right'
        },
        {
          name:'Sue:',
          speech:'OK, thanks.'
        },
        {
          name:'Stephan:',
          speech:'No problem. If you have any questions, just give me a call…'
        },
        ],

        translations:[
        {
          name:'수:',
          speech:'스테판?'
        },
        {
          name:'스테판:',
          speech:'네?'
        },
        {
          name:'수:',
          speech:'여기 영국에서 프랑스행 기차표를 살 수 있나요?'
        },
        {
          name:'스테판:',
          speech:'네. 인터넷으로 예약할 수 있어요.'
        },
        {
          name:'수:',
          speech:'맞아요.'
        },
        {
          name:'스테판:',
          speech:'SNCF dot com에서요.'
        },
        {
          name:'수:',
          speech:'SNCF가 프랑스 기차 회사인가요?'
        },
        {
          name:'스테판:',
          speech:'네. 티켓을 예매해야 하나요?'
        },
        {
          name:'수:',
          speech:'잘 모르겠어요. 그럴지도 모르죠 이 웹사이트는 프랑스어로만 되어 있는 건가요, 아니면…?'
        },
        {
          name:'스테판:',
          speech:'아니요 당신은 영어를 선택할 수 있습니다'
        },
        {
          name:'수:',
          speech:'그리고 카드로 지불할 수 있나요?'
        },
        {
          name:'스테판:',
          speech:'네, 그리고 표를 우편으로 보내요.'
        },
        {
          name:'수:',
          speech:'집 주소로요?'
        },
        {
          name:'스테판:',
          speech:'그래요'
        },
        {
          name:'수:',
          speech:'영국에 살면 표를 받을 수 없어요.'
        },
        {
          name:'스테판:',
          speech:'가능해요. 그들은 다른 나라로 티켓을 보냅니다'
        },
        {
          name:'수:',
          speech:'아, 맞아요. 그럼 SNCF 닷컴으로 해야겠네요.'
        },
        {
          name:'스테판:',
          speech:'그래요.'
        },
        {
          name:'수:',
          speech:'좋아요, 고마워요.'
        },
        {
          name:'스테판:',
          speech:'아니에요. 질문이 있으시면 전화 주세요…'
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
