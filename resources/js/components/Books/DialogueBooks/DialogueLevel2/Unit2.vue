<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/beautiful-shot-modern-house-kitchen_181624-4007.jpg">

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
        padding-bottom: 10px;">Our apartment
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

    <li style="list-style-type: none;">Our apartment</li><br />


    <table style = "border-collapse: collapse;">
    
      <tr v-for="dialog in dialogs"  :key="dialog">
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
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            How <u> &emsp; &emsp; &emsp; </u> bedrooms do you have? <br />
              신은 침실이 몇 개 있습니까?<br />
          </li>
          <li>
            Our TV is too old. We <u> &emsp; &emsp; &emsp; </u> a new one. <br />
              우리의 TV는 너무 낡았습니다. 우리는 새 것이 필요합니다.<br />
          </li>
          <li>
            Is <u> &emsp; &emsp; &emsp; </u> a bathtub in your bathroom? <br />
              당신의 욕실에는 욕조가 있습니까?<br />
          </li>
        </ol>



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

          <tr v-for="translation in translations"  :key="translation">
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
                      we don't have much furniture : <br />
                        가구는 셀 수 없는 명사로 취급해서 many를 쓰지 않고 much를 사용했습니다.<br />
                    </li>
                    <li>
                      what's ... like? 무엇을 좋아하는가를 묻는 것이 아니라 모양이나 상태가 어떠한가를 묻는 것입니다.<br />
                    </li>
                    <li>
                      pretty는 형용사가 아니라 부사로 꽤, 비교적이라고 해석을 합니다.<br />
                    </li>
                    <li>
                      한세대 한세대를 apartment라고 부르고 빌딩 전체를 <br />
                        apartment house(4, 5층 정도까지), apartment building(높이에 관계없이),<br />
                        apartment complex(오락시설이 있는 단지) 등으로 부릅니다.<br />
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
          speech:'How many rooms are in your apartment?'
        },
        {
          name:'B:',
          speech:'There is one bedroom, a living room and a small kitchen.'
        },
        {
          name:'A:',
          speech:'Are the rooms large or small?'
        },
        {
          name:'B:',
          speech:'They are pretty small, so we don’t have much furniture.'
        },
        {
          name:'A:',
          speech:'What color are the walls?'
        },
        {
          name:'B:',
          speech:'The walls are white. We like bright rooms.'
        },
        {
          name:'A:',
          speech:'Are there any plants in your home?'
        },
        {
          name:'B:',
          speech:'Yes. We have some green plants, so the air is always fresh.'
        },
        {
          name:'A:',
          speech:'What’s the kitchen like?'
        },
        {
          name:'B:',
          speech:'The kitchen is small, but it’s enough for only two of us.'
        },
        {
          name:'A:',
          speech:'Is the furniture comfortable?'
        },
        {
          name:'B:',
          speech:'Yes, we have a large comfortable sofa in the living room.'
        },
        {
          name:'A:',
          speech:'Do you have a balcony or a veranda?'
        },
        {
          name:'B:',
          speech:'We have a tiny veranda for storing stuff.'
        },
        {
          name:'A:',
          speech:'What do you need for your home?'
        },
        {
          name:'B:',
          speech:'Actually, we need a bigger apartment. This one is so cramped.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'당신의 아파트에는 방이 몇 개가 있나요?'
        },
        {
          name:'B:',
          speech:'침실 하나, 거실 하나 그리고 작은 부엌이 하나 있습니다.'
        },
        {
          name:'A:',
          speech:'방들은 큰가요 작은가요?'
        },
        {
          name:'B:',
          speech:'그것들은 꽤 작습니다, 그래서 우리는 가구가 많지 않습니다.'
        },
        {
          name:'A:',
          speech:'벽은 무슨 색깔인가요?'
        },
        {
          name:'B:',
          speech:'벽은 하얗습니다. 우리는 밝은 방을 좋아합니다.'
        },
        {
          name:'A:',
          speech:'당신의 집에는 식물이 있나요?'
        },
        {
          name:'B:',
          speech:'네. 식물이 조금 있습니다, 그래서 공기가 항상 신선합니다.'
        },
        {
          name:'A:',
          speech:'부엌은 어떻나요?'
        },
        {
          name:'B:',
          speech:'부엌은 작습니다, 하지만 우리 둘에게는 충분합니다.'
        },
        {
          name:'A:',
          speech:'가구는 편안한가요?'
        },
        {
          name:'B:',
          speech:'네, 거실에 크고 편안한 소파가 있습니다.'
        },
        {
          name:'A:',
          speech:'발코니나 베란다는 있나요?'
        },
        {
          name:'B:',
          speech:'물건을 저장하기 위한 작은 베란다가 있습니다.'
        },
        {
          name:'A:',
          speech:'당신 집에 필요한 것은 뭔가요?'
        },
        {
          name:'B:',
          speech:'사실, 우리는 더 큰 아파트가 필요합니다. 이것은 너무 비좁습니다.'
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
