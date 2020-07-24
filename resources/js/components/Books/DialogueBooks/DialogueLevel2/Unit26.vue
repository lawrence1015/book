 <template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/beautiful-asian-woman-using-smartphone-buying-online-shopping_7861-797.jpg">

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
        padding-bottom: 10px;">Personal information
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Personal information</li><br />

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
          <u>Role play the last conversation using the following information</u><br />
          (주어진 정보를 이용해서 마지막 대화를 역할극을 해보세요)
        </p>

        <ol style="margin: 12px;">
            A. ( live ) – driver’s license / on 56th Street in South Brentwood <br />
            B. ( work ) – employee ID / for Lemon Computers at the library <br />
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
                      ESL (English as second language) : 영어가 모국어가 아닌 두번째 언어. <br />
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
          speech:'AMC Movie Theater. How can I help you?'
        },
        {
          name:'B:',
          speech:'I’d like two tickets for Aladdin, please.'
        },
        {
          name:'A:',
          speech:'For when?'
        },
        {
          name:'B:',
          speech:'Saturday at four o’clock.'
        },
        {
          name:'A:',
          speech:'That’s $9. How would you like to pay?'
        },
        {
          name:'B:',
          speech:'Visa. Card number 9999 8160 2277 4538.'
        },
        {
          name:'A:',
          speech:'And what’s your name?'
        },
        {
          name:'B:',
          speech:'Lee. William Lee'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'C:',
          speech:'Are you a student here?'
        },
        {
          name:'D:',
          speech:'Are you a student here?'
        },
        {
          name:'C:',
          speech:'What are you studying?'
        },
        {
          name:'D:',
          speech:'E.S.L.'
        },
        {
          name:'C:',
          speech:'Oh, where are you from?'
        },
        {
          name:'D:',
          speech:'Busan in South Korea.'
        },
        {
          name:'C:',
          speech:'Are you a student in Korea?'
        },
        {
          name:'D:',
          speech:'No, I’m not. I work for an airline.'
        },
        {
          name:'C:',
          speech:'Oh, really? Which one?'
        },
        {
          name:'D:',
          speech:'Korean Air. Do you know it?'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'E:',
          speech:'Hello. I’d like a membership card for the Recreation Center.'
        },
        {
          name:'F:',
          speech:'The Center is for the Brentwood area only.'
        },
        {
          name:'E:',
          speech:'Yes, I know.'
        },
        {
          name:'F:',
          speech:'Do you live, work, or go to school here?'
        },
        {
          name:'E:',
          speech:'I go to school here.'
        },
        {
          name:'F:',
          speech:'Do you have a student ID?'
        },
        {
          name:'E:',
          speech:'It’s right here. I’m a student at Brentwood College.'
        },
        {
          name:'F:',
          speech:'OK. Can you complete this form? I also need a photograph and $20.'
        },
        {
          name:'E:',
          speech:'Is there a student discount?'
        },
        {
          name:'F:',
          speech:'Yes. There’s a discount of twenty-five percent. Twenty dollars is the discount price.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'AMC Movie Theater입니다. 어떻게 도와드릴까요?'
        },
        {
          name:'B:',
          speech:'Aladdin 티켓 2장을 사고 싶습니다.'
        },
        {
          name:'A:',
          speech:'언제로 하시겠습니까?'
        },
        {
          name:'B:',
          speech:'토요일 4시 정각으로요.'
        },
        {
          name:'A:',
          speech:'9달러입니다. 어떻게 계산 하시겠습니까?'
        },
        {
          name:'B:',
          speech:'Visa로 하겠습니다. 카드번호는 9999 8160 2277 4538입니다.'
        },
        {
          name:'A:',
          speech:'성함이 어떻게 되십니까?'
        },
        {
          name:'B:',
          speech:'Lee입니다. William Lee입니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'C:',
          speech:'당신은 여기 학생입니까?'
        },
        {
          name:'D:',
          speech:'네. 오늘이 처음 온 날입니다.'
        },
        {
          name:'C:',
          speech:'무엇을 공부하십니까?'
        },
        {
          name:'D:',
          speech:'E.S.L이요'
        },
        {
          name:'C:',
          speech:'오, 어디에서 오셨습니까?'
        },
        {
          name:'D:',
          speech:'한국에 있는 부산에서 왔습니다.'
        },
        {
          name:'C:',
          speech:'당신은 한국에서 온 학생입니까?'
        },
        {
          name:'D:',
          speech:'아니요, 학생이 아닙니다. 저는 항공사에서 일합니다.'
        },
        {
          name:'C:',
          speech:'오, 그렇습니까? 어느 항공사입니까?'
        },
        {
          name:'D:',
          speech:'대한항공입니다. 그곳을 아십니까?'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'E:',
          speech:'안녕하세요. 저는 Recreation Center의 멤버쉽 카드를 원합니다.'
        },
        {
          name:'F:',
          speech:'그 센터는 Brentwood지역을 위해서만 있습니다.'
        },
        {
          name:'E:',
          speech:'네, 압니다.'
        },
        {
          name:'F:',
          speech:'당신은 이곳에서 사시거나 일하시거나 학교에 다니십니까?'
        },
        {
          name:'E:',
          speech:'네 이곳에 있는 학교에 다닙니다.'
        },
        {
          name:'F:',
          speech:'학생증이 있습니까?'
        },
        {
          name:'E:',
          speech:'바로 여기 있습니다. 저는 Brentwood College의 학생입니다.'
        },
        {
          name:'F:',
          speech:'좋습니다. 이 양식을 완성해 주시겠습니까? 저는 또한 사진과 20달러가 필요합니다.'
        },
        {
          name:'E:',
          speech:'학생 할인이 있습니까?'
        },
        {
          name:'F:',
          speech:'네, 25퍼센트 할인이 됩니다. 20달러가 할인 가격입니다.'
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
