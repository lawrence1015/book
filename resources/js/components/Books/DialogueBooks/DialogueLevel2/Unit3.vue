 <template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/discussing-building-plan_1098-16479.jpg">

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
        padding-bottom: 10px;">Apartment
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Apartment</li><br />

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
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            Are there <u> &emsp; &emsp; &emsp; </u> chairs? <br />
              의자가 있습니까?<br />
          </li>
          <li>
            <u> &emsp; &emsp; &emsp; </u> many windowa in the house. <br />
              집에 창문이 많습니다.<br />
          </li>
          <li>
            <u> &emsp; &emsp; &emsp; </u> the bathroom? <br />
              욕실은 어디에 있습니까?<br />
          </li>
        </ol>

        <p>
          Free response:<br />
            Describe your home. <br />
            당신의 집을 설명해 보세요.<br />
              <br />
            Vocabulary: furniture, telephone, chair, sofa, rug, coffee table, radio, television, shelf, cupboard, wardrobe. <br />
            어휘: 가구, 전화기, 의자, 소파, 깔개, 커피테이블, 라디오, TV, 선반, 찬장, 옷장<br />

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
                      there + be(is,are)<br />
                        는 ~가 있다는 뜻이고 뒤에는 반드시 명사가 옵니다.<br />
                        뒤에 오는 명사가 단수이면<br />
                        there is를 뒤에 오는 명사가 복수이면 there are를 씁니다.<br />
                    </li>
                    <li>
                      부정문에서 very는 '그다지,그리, 도무지~않다' 입니다. <br />
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
          name:'Realtor:',
          speech:'This is a nice apartment, Mrs. Garcia. Look, here’s a floor plan.'
        },
        {
          name:'Eva:',
          speech:'Mmm…'
        },
        {
          name:'Realtor:',
          speech:'There’s a living room. There’s a kitchen, a bedroom, and a bathroom.'
        },
        {
          name:'Eva:',
          speech:'Is there a balcony?'
        },
        {
          name:'Realtor:',
          speech:'Yes, there is.'
        },
        {
          name:'Eva:',
          speech:'And a dining room… is there a dining room?'
        },
        {
          name:'Realtor:',
          speech:'No, there isn’t a dining room. But there is a dining area in the living room.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Realtor:',
          speech:'Well, this is the kitchen.'
        },
        {
          name:'Eva:',
          speech:'Oh, it’s very small.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Realtor:',
          speech:'Yes, it isn’t very large. But there’s a stove, a refrigerator, and a space for a dishwasher. There are some cabinets, and… um… there’s a small shelf under the sink.'
        },
        {
          name:'Eva:',
          speech:'Are there any windows in the bathroom?'
        },
        {
          name:'Realtor:',
          speech:'No, there aren’t. But there are two large windows in the bedroom.'
        },
        {
          name:'Eva:',
          speech:'Good. It’s a very nice apartment. Uh, where is the bathroom?'
        },
        ],

        translations:[
        {
          name:'Realtor:',
          speech:'이것은 좋은 아파트입니다 Garcia씨. 보세요, 여기 평면도가 있습니다.'
        },
        {
          name:'Eva:',
          speech:'음....'
        },
        {
          name:'Realtor:',
          speech:'거실이 있구요. 부엌, 침실, 욕실이 있습니다.'
        },
        {
          name:'Eva:',
          speech:'발코니는 있나요?'
        },
        {
          name:'Realtor:',
          speech:'네, 있습니다.'
        },
        {
          name:'Eva:',
          speech:'그리고 주방... 주방은 있나요?'
        },
        {
          name:'Realtor:',
          speech:'아니요, 주방은 없습니다. 하지만 거실에 주방 공간이 있습니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Realtor:',
          speech:'자, 이것은 부엌입니다.'
        },
        {
          name:'Eva:',
          speech:'오, 부엌이 매우 작네요.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Realtor:',
          speech:'네, 그다지 크진 않습니다. 하지만 난로, 냉장고가 있고 식기세척기를 위한 공간이 있습니다. 몇 개의 캐비넷이 있고, 그리고..음..싱크대 아래에 작은 선반이 있습니다.'
        },
        {
          name:'Eva:',
          speech:'욕실에 창문이 있나요?'
        },
        {
          name:'Realtor:',
          speech:'아니요, 없습니다. 하지만 침실에 커다란 창문이 두 개 있습니다.'
        },
        {
          name:'Eva:',
          speech:'좋아요. 매우 멋진 아파트입니다. 어, 화장실은 어디에 있나요?'
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
