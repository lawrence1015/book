<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/smiling-couple-spending-time-together-kitchen_171337-17813.jpg">

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
        padding-bottom: 10px;">Lucky husband
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br />( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Lucky husband</li><br />
     
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
          <u>Use the following words to make questions:</u><br />
          (단어를 사용해서 문장을 만들어보세요)<br />
          Ex) speak/French -> Can you speak French?<br />
        </p>

        <ol style="margin: 12px;">
          <li>
            play/violin <br />
          </li>
          <li>
            make/pizza <br />
          </li>
          <li>
            ride/bike <br />
          </li>
          <li>
            play/tennis <br />
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
            What’s your favorite food?<br />
            How much of it can you eat in one sitting?<br />
            Can you understand Japanese?<br />
          
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
                      Can 의 쓰임 :<br />
                          a) 능력을 나타내고자 할 때 <br />
                          b) 무언가를 할 능력이나 권리를 가졌을 때 <br />
                          c) 무언가가 일어날 법하거나 일어날 가능성이 있을 때<br />
                          d) 무언가를 요청하거나 허가할 때<br />

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
          speech:'Can Mrs. Brown cook well?'
        },
        {
          name:'B:',
          speech:'Yes, she can. Mrs. Brown is a good cook. She can make spaghetti, chocolate cake, banana bread and fried chicken.'
        },
        {
          name:'A:',
          speech:'Her husband is a lucky guy.'
        },
        {
          name:'B:',
          speech:'Yes. Actually, Mr. Brown has a big appetite. He can eat a whole chicken, a chocolate cake, three hamburgers and five hot dogs.'
        },
        {
          name:'A:',
          speech:'All in one sitting?'
        },
        {
          name:'B:',
          speech:'Yes, all in one sitting.'
        },
        {
          name:'A:',
          speech:'Wow! He can eat a lot!'
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
          name:'E:',
          speech:'What kind of movies do you like, Barbara?'
        },
        {
          name:'F:',
          speech:'I like French movies.'
        },
        {
          name:'E:',
          speech:'Can you speak French?'
        },
        {
          name:'F:',
          speech:'No, but I can understand it.'
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
          name:'C:',
          speech:'Darling, *can you make a banana cake today?'
        },
        {
          name:'D:',
          speech:'No, I can’t.'
        },
        {
          name:'C:',
          speech:'Why not?'
        },
        {
          name:'D:',
          speech:'I don’t have any bananas. Can you go and buy some?'
        },
        {
          name:'C:',
          speech:'Sure, I can.'
        },
        ],

        translations:[
        {
          name:'1',
          speech:' '
        },
        {
          name:'A:',
          speech:'Brown여사는 요리를 잘 할 줄 압니까?'
        },
        {
          name:'B:',
          speech:'네, 잘 할 줄 압니다. Brown여사는 훌륭한 요리사입니다. 그녀는 스파게티, 초코케이크, 바나나빵과 프라이드치킨을 만들 줄 압니다.'
        },
        {
          name:'A:',
          speech:'그녀의 남편은 행운아입니다.'
        },
        {
          name:'B:',
          speech:'네. 사실, Brown씨는 식욕이 왕성합니다. 그는 치킨 한 마리 전체, 초코케이크, 햄버거 세 개와 핫도그 다섯 개를 먹을 수 있습니다.'
        },
        {
          name:'A:',
          speech:'한 자리에서 전부를요?'
        },
        {
          name:'B:',
          speech:'네, 한 자리에서 전부를 먹을 수 있습니다.'
        },
        {
          name:'A:',
          speech:'와우! 그는 많이 먹을 수 있군요.'
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
          name:'E:',
          speech:'Barbara, 당신은 무슨 종류의 영화를 좋아하세요?'
        },
        {
          name:'F:',
          speech:'저는 프랑스 영화를 좋아해요.'
        },
        {
          name:'E:',
          speech:'프랑스어를 할 줄 아세요?'
        },
        {
          name:'F:',
          speech:'아니요, 하지만 이해할 수는 있어요.'
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
          name:'C:',
          speech:'여보, 오늘 바나나 케이크 만들 수 있어요?'
        },
        {
          name:'D:',
          speech:'아니요, 할 수 없어요.'
        },
        {
          name:'C:',
          speech:'왜 안 돼요?'
        },
        {
          name:'D:',
          speech:'바나나가 전혀 없어요. 바나나 좀 사러 가줄래요?'
        },
        {
          name:'C:',
          speech:'네, 갈게요.'
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
