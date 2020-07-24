<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/03/iStock_000070409503_Small-1.jpg">

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
        padding-bottom: 10px;">What does she do?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">What does she do?</li><br />

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
            <u> &emsp; &emsp; &emsp; </u> you <u> &emsp; &emsp; &emsp; </u> with your parents?<br />
              당신은 부모님과 함께 삽니까?<br />
          </li>
          <li>
            And where <u> &emsp; &emsp; &emsp; </u> your brother <u> &emsp; &emsp; &emsp; </u> ?<br />
              그리고 당신의 형은 어디에 삽니까?<br />
          </li>
          <li>
            He <u> &emsp; &emsp; &emsp; </u> in Australia.<br />
              그는 호주에 삽니다. <br />
          </li>
        </ol>


        <p>
          Free response: <br />
          Talk about your friend or family member's job.<br />
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
                      주어가 3인칭인 경우의 의문문 : 의문사 + does + 주어(she,he,it)...?<br />
                    </li>
                    <li>
                      seem : ~ 처럼 보인다<br />
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
          speech:'What does Miss Sherman do?'
        },
        {
          name:'B:',
          speech:'Barbara Sherman is a secretary at the City Bank.'
        },
        {
          name:'A:',
          speech:'What hours does she work?'
        },
        {
          name:'B:',
          speech:'She works every day from nine to five.'
        },
        {
          name:'A:',
          speech:'Does she live far?'
        },
        {
          name:'B:',
          speech:'She lives a long way from her job and she doesn’t have a car.'
        },
        {
          name:'A:',
          speech:'How does she go to work?'
        },
        {
          name:'B:',
          speech:'She always goes to work by bus.'
        },
        {
          name:'A:',
          speech:'What does Susan do?'
        },
        {
          name:'B:',
          speech:'She’s a teacher. She teaches an art class at a school in Denver.'
        },
        {
          name:'A:',
          speech:'And what about Brian? Where does he work?'
        },
        {
          name:'B:',
          speech:'He works for a big computer company in San Francisco.'
        },
        {
          name:'A:',
          speech:'What does he do, exactly?'
        },
        {
          name:'B:',
          speech:'He’s a web-site designer. He designs fantastic web sites!'
        },
        {
          name:'A:',
          speech:'Is he really so good?'
        },
        {
          name:'B:',
          speech:'Yes, he has great talent.'
        },
        {
          name:'A:',
          speech:'It seems they make a good couple.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'Sherman씨는 직업이 무엇입니까?'
        },
        {
          name:'B:',
          speech:'Barbara Sherman은 City Bank에서 비서로 일합니다.'
        },
        {
          name:'A:',
          speech:'그녀는 몇 시간을 일합니까?'
        },
        {
          name:'B:',
          speech:'매일 9시부터 5시까지 일합니다.'
        },
        {
          name:'A:',
          speech:'그녀는 멀리 삽니까?'
        },
        {
          name:'B:',
          speech:'직장에서 먼 거리에 살고 있고 차는 가지고 있지 않습니다.'
        },
        {
          name:'A:',
          speech:'그녀는 직장에 어떻게 갑니까?'
        },
        {
          name:'B:',
          speech:'항상 버스를 타고 직장에 갑니다.'
        },
        {
          name:'A:',
          speech:'Susan의 직업은 무엇입니까?'
        },
        {
          name:'B:',
          speech:'그녀는 선생님입니다. Denver에 있는 학교에서 미술 수업을 가르칩니다.'
        },
        {
          name:'A:',
          speech:'Brian은 어떻습니까? 그는 어디에서 일합니까?'
        },
        {
          name:'B:',
          speech:'San Francisco에 있는 큰 컴퓨터 회사에서 일합니다.'
        },
        {
          name:'A:',
          speech:'그의 직업은 정확히 무엇입니까?'
        },
        {
          name:'B:',
          speech:'그는 웹사이트 디자이너입니다. 그는 환상적인 웹사이트를 디자인합니다.'
        },
        {
          name:'A:',
          speech:'그는 정말 유능합니까?'
        },
        {
          name:'B:',
          speech:'네, 그는 대단한 재능을 가졌습니다.'
        },
        {
          name:'A:',
          speech:'그들은 좋은 커플이 될 것 같습니다.'
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
