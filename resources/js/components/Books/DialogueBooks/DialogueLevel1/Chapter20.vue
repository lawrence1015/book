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
        padding-bottom: 10px;">How many?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br>( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">How many?</li><br />

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
              How <u> &emsp; &emsp; &emsp; </u> hours are there in a day? <br />
                하루는 몇시간입니까?
          </li>
          <li>
              There <u> &emsp; &emsp; &emsp; </u> many small restaurants in my neighborhood.<br />
                내 지역에는 많은 작은 식당들이 있습니다.
          </li>
          <li>
              There <u> &emsp; &emsp; &emsp; </u> much noise.
                소음이 거의 없습니다.
          </li>
        </ol>

        <p>
          Free response:<br />
          How many people are there in your family?


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
                      1) 질문 : How much (얼마나 많은 양)....? / 대답 : there is.... (양은 셀 수 없기 때문에 단수취급합니다) <br />
                                 How many (얼마나 많은 수)....? / 대답 : there are....                 
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
          name:'Nick:',
          speech:'How many people are there in your family?'
        },
        {
          name:'Pam:',
          speech:'There are four people in my family.'
        },
        {
          name:'Nick:',
          speech:'Do you have a brother or a sister?'
        },
        {
          name:'Pam:',
          speech:'I have a younger sister.'
        },
        {
          name:'Nick:',
          speech:'How’s your new apartment?'
        },
        {
          name:'Pam:',
          speech:'I love it. It’s downtown, so it’s very convenient.'
        },
        {
          name:'Nick:',
          speech:'Downtown? Is there much noise?'
        },
        {
          name:'Pam:',
          speech:'Oh, no. There isn’t any. It’s on the fifth floor.'
        },
        {
          name:'Nick:',
          speech:'How many restaurants are there near your place?'
        },
        {
          name:'Pam:',
          speech:'A lot. In fact, there’s an excellent Japanese place just around the corner.'
        },
        {
          name:'Nick:',
          speech:'What about parking? Is there enough parking?'
        },
        {
          name:'Pam:',
          speech:'Well, there aren’t many parking garages. But there’s usually some place on the street.'
        },
        {
          name:'Nick:',
          speech:'Is there much crime?'
        },
        {
          name:'Pam:',
          speech:'No, it’s pretty safe… Hold on. That’s my car alarm!'
        },
        ],

        translations:[
        {
          name:'Nick:',
          speech:'너의 가족은 몇 명이니? (너의 가족에는 얼마나 많은 사람이 있니?)'
        },
        {
          name:'Pam:',
          speech:'4명이야 (내 가족에는 4명이 있어)'
        },
        {
          name:'Nick:',
          speech:'형제나 자매가 있니?'
        },
        {
          name:'Pam:',
          speech:'여동생이 있어'
        },
        {
          name:'Nick:',
          speech:'너의 새 아파트는 어떻니?'
        },
        {
          name:'Pam:',
          speech:'너무 좋아. 그것은 중심가에 있어. 그래서 매우 편리해'
        },
        {
          name:'Nick:',
          speech:'중심가에? 소음이 많이 나지?'
        },
        {
          name:'Pam:',
          speech:'오, 아니. 전혀 없어. 그 아파트는 5층이야.'
        },
        {
          name:'Nick:',
          speech:'네 아파트 근처에는 얼마나 많은 레스토랑이 있니?'
        },
        {
          name:'Pam:',
          speech:'많아. 사실, 모퉁이 바로 근처에 훌륭한 일본 레스토랑이 있어.'
        },
        {
          name:'Nick:',
          speech:'주차장은 어떻니? 충분한 주차장이 있니?'
        },
        {
          name:'Pam:',
          speech:'글쎄, 주차장은 많지 않아. 하지만 대개 거리에는 어느 정도의 공간은 있어.'
        },
        {
          name:'Nick:',
          speech:'범죄가 많니?'
        },
        {
          name:'Pam:',
          speech:'아니, 그 곳은 꽤 안전해... 잠깐만. 내 차 경보음이야'
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
