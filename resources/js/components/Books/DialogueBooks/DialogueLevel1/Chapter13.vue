<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/two-businesswoman-arguing-with-each-other-office_23-2147857244.jpg">

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
        padding-bottom: 10px;">Do you have time now?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Do you have time now?</li><br />
      
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
          <u>A little bit of drill can be sometimes good, too. Repeat once</u><br />
          (다소 어려운 연습도 때로는 좋습니다. 다시 한번 반복해 보세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            I have / you have / we have / they have<br />
            He has / she has / it has<br />

          </li>
          <li>
            I don’t have / you don’t have / we don’t have / they don’t have<br />
            He doesn’t have / she doesn’t have / it doesn’t have <br />
          </li>
          <li>
            Do I have? / do you have? / do we have? / do they have?<br />
            Does he have? / does she have? / does it have?<br />
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
                      일반동사의 부정문 : 주어 do(does) not 동사원형 (축약형: don't, doesn't)<br />
                    </li>
                    <li>
                      have는 가지다라는 소유의 뜻이 아니라 먹다라는 뜻입니다. <br />
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
          name:'Liz:',
          speech:'Barbara, give me your pen, please.'
        },
        {
          name:'Barbara:',
          speech:'I don’t have a pen. Here’s a pencil.'
        },
        {
          name:'Liz:',
          speech:'Thank you. Do you have a piece of paper?'
        },
        {
          name:'Barbara:',
          speech:'Here you are. Is it for a letter?'
        },
        {
          name:'Liz:',
          speech:'That’s right. Do you have an envelope?'
        },
        {
          name:'Barbara:',
          speech:'Yes, but I don’t have stamps.'
        },
        {
          name:'Liz:',
          speech:'That’s OK, I have stamps.'
        },
        {
          name:'Barbara:',
          speech:'All right.'
        },
        {
          name:'Liz:',
          speech:'Do you have time now?'
        },
        {
          name:'Barbara:',
          speech:'Sure. Why?'
        },
        {
          name:'Liz:',
          speech:'Let’s have lunch together'
        },
        {
          name:'Barbara:',
          speech:'Why not? Let’s go. I’ll have a sandwich.'
        },
        ],

        translations:[
        {
          name:'Liz:',
          speech:'Barbara, 당신의 펜좀 주세요.'
        },
        {
          name:'Barbara:',
          speech:'펜은 없습니다.. 여기 연필이 있어요'
        },
        {
          name:'Liz:',
          speech:'고맙습니다. 종이 한 장 있으세요?'
        },
        {
          name:'Barbara:',
          speech:'여기 있습니다. 편지 쓰실려구요?'
        },
        {
          name:'Liz:',
          speech:'그렇습니다. 봉투는 있습니까?'
        },
        {
          name:'Barbara:',
          speech:'네, 하지만 우표는 없습니다.'
        },
        {
          name:'Liz:',
          speech:'괜찮습니다. 우표는 있습니다.'
        },
        {
          name:'Barbara:',
          speech:'좋습니다.'
        },
        {
          name:'Liz:',
          speech:'지금 시간 있습니까?'
        },
        {
          name:'Barbara:',
          speech:'네. 왜요?'
        },
        {
          name:'Liz:',
          speech:'같이 점심 먹으러 갑시다.'
        },
        {
          name:'Barbara:',
          speech:'그래요. 같이 갑시다. 저는 샌드위치를 먹을 것입니다.'
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
