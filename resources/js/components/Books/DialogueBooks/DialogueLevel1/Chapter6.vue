<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv8RmfkY/6/screen_2x/canva-man-and-woman-sitting-on-chair-in-front-of-desk-MADGv8RmfkY.jpg">

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
        padding-bottom: 10px;">Hello, this is an emergency!
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br>( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Hello, this is an emergency!</li><br />

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
          <u>Fill the blanks. Always answer with a whole sentence</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)<br />
        </p>

        <ol style="margin: 12px;">
          <li>
              The library is <u> &emsp; &emsp; &emsp; </u> the hospital.<br />
                (그 도서관은 병원 근처에 있습니다)<br />
          </li>
          <li>
              It's <u> &emsp; &emsp; &emsp; </u> the street.<br />
                 (그것은 거리 건너 편에 있습니다)<br />
          </li>
          <li>
              Wait for me <u> &emsp; &emsp; &emsp; </u>.<br />
                (밖에서 나를 기다리세요)<br />
          </li>
        </ol>

        <p>
          Free response:<br />
            What is the phone number for emergencies in Korea?<br />
            한국에서는 긴급 전화번호가 무엇입니까?<br />

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
                    <li>
                      1) Be동사의 의문문: Be 주어...? / Am I...?; Are you(we,they)...?; Is he(she,it)...?<br />
                          대답: Yes, 주어 be동사 / 짧게 대답하는 경우 주어와 동사를 줄여 쓰지 않습니다.<br />
                          Yes, I am (O) / Yes, I'm(X)<br />
                    </li>
                    <li>
                      2) 의문사 be동사를 줄여쓸 수 있지만(that's, what's), this is는 this's로 쓰지 않습니다.<br />
                    </li>
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
          speech:'Hello, fire department? This is an emergency.'
        },
        {
          name:'B:',
          speech:'What is it, ma’am?'
        },
        {
          name:'A:',
          speech:'My house is on fire.'
        },
        {
          name:'B:',
          speech:'What’s your address?'
        },
        {
          name:'A:',
          speech:'It’s 183 Maple Street.'
        },
        {
          name:'B:',
          speech:'Is that near the post office?'
        },
        {
          name:'A:',
          speech:'Yes. It’s right across the street.'
        },
        {
          name:'B:',
          speech:'Is it a big fire or a little one?'
        },
        {
          name:'A:',
          speech:'It’s a very big fire.'
        },
        {
          name:'B:',
          speech:'Don’t worry. No fire is too big for us.'
        },
        {
          name:'A:',
          speech:'Please hurry. My poor little house…'
        },
        {
          name:'B:',
          speech:'Are you in the house now?'
        },
        {
          name:'A:',
          speech:'Yes, I am. It’s very hot in here.'
        },
        {
          name:'B:',
          speech:'…And dangerous. Leave the house immediately.'
        },
        {
          name:'A:',
          speech:'All right. Please come right away.'
        },
        {
          name:'B:',
          speech:'Yes, ma’am. Wait for us outside.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'안녕하세요, 소방서인가요? 비상사태입니다.'
        },
        {
          name:'B:',
          speech:'무슨 일인가요?'
        },
        {
          name:'A:',
          speech:'제 집에 불이 났습니다.'
        },
        {
          name:'B:',
          speech:'주소가 어떻게 되십니까?'
        },
        {
          name:'A:',
          speech:'Maple가 183번지입니다.'
        },
        {
          name:'B:',
          speech:'우체국 근처에 있습니까?'
        },
        {
          name:'A:',
          speech:'네, 거리 맞은편 정면에 있습니다.'
        },
        {
          name:'B:',
          speech:'화재가 심각합니까? 아니면 미미합니까?'
        },
        {
          name:'A:',
          speech:'심각합니다.'
        },
        {
          name:'B:',
          speech:'걱정마십시오. 어떤 불도 저희에게는 크지 않습니다.'
        },
        {
          name:'A:',
          speech:'제발 서둘러 주세요. 내 불쌍한 작은 집이...'
        },
        {
          name:'B:',
          speech:'당신은 지금 집 안에 계십니까?'
        },
        {
          name:'A:',
          speech:'네, 안에 있어요. 이 안은 너무 뜨겁습니다.'
        },
        {
          name:'B:',
          speech:'....그러면 위험합니다. 즉시 그 집을 떠나십시오. '
        },
        {
          name:'A:',
          speech:'알겠습니다. 제발 지금 바로 와주세요. '
        },
        {
          name:'B:',
          speech:'네, 알겠습니다. 밖에서 저희들을 기다리세요.'
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
