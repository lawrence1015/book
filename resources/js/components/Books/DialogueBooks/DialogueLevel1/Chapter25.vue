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
        padding-bottom: 10px;">Preferences
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br>( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Preferences</li><br />

      <table style = "border-collapse: collapse;">

        <tr v-for="dialog in dialogs" :key="dialog">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>

      </table>

      <li style="list-style-type: none;">At the restaurant</li><br />

      <table style = "border-collapse: collapse;">

        <tr v-for="seconddialog in seconddialogs" :key="seconddialog">
          <td class = "uppertable" >{{seconddialog.name}}</td>
          <td class = "lowertable" >{{seconddialog.speech}}</td>
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
          <u>Look at the picture and complete the sentence</u><br />
          (그림을 보고 문장을 완성하세요 ) <br />
          Ex) Peter doesn’t like mayonnaise.
        </p>

        <ol style="margin: 12px;">
          <li>
          Anne (                       ) <br />
            <v-container grid-list-md text-xs-center>
              <v-layout wrap align-content-center>

                <v-flex xs12 md4 >
                  <v-card hover>

                    <v-img src="images/dialogue-books-anne.png" />

                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </li>
          <li>
          Mrs. Smith (                       ) <br />
            <v-container grid-list-md text-xs-center>
              <v-layout wrap align-content-center>

                <v-flex xs12 md4 >
                  <v-card hover>

                    <v-img src="images/dialogue-books-mrs-smith.png" />

                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </li>
          <li>
            The students (                       ) <br />
            <v-container grid-list-md text-xs-center>
              <v-layout wrap align-content-center>

                <v-flex xs12 md4 >
                  <v-card hover>

                    <v-img src="images/dialogue-books-thestudents.png" />

                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
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
                    <li>
                      1) 좋아하는 것에 말할 때에는 the 를 사용하지 않습니다.
                    </li>
                    <li>
                      2) 먹고 있는 음식에 대해서 말할 때에는 the 를 사용합니다.
                    </li>
                    <li>
                      3) He, she doesn’t like / they don’t like
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
          speech:'Hey, Mike. What do you like?'
        },
        {
          name:'B:',
          speech:'I like roast beef very much. I’m a meat lover. I like beef, pork and chicken.'
        },
        {
          name:'A:',
          speech:'Do you like fish?'
        },
        {
          name:'B:',
          speech:'Yes, I do. I like tuna and salmon very much.'
        },
        {
          name:'A:',
          speech:'You know, my wife’s a vegetarian. She doesn’t like meat.'
        },
        {
          name:'B:',
          speech:'A vegetarian? You mean she eats vegetables only?'
        },
        {
          name:'A:',
          speech:'Yes, but she has fish sometimes. Vegetables are very healthy.'
        },
        {
          name:'B:',
          speech:'Whatever. I’d die without meat.'
        },
        {
          name:'A:',
          speech:'Yeah, me too. I basically like everything, though.'
        },
        ],

        seconddialogs:[
        {
          name:'A:',
          speech:'So Mike. How do you like your beef?'
        },
        {
          name:'B:',
          speech:'It`s delicious. The chef is a genius!'
        },
        {
          name:'A:',
          speech:'Yeah. It’s my favorite place.'
        },
        {
          name:'B:',
          speech:'Does your wife like this restaurant?'
        },
        {
          name:'A:',
          speech:'No, she doesn’t. She and her sister don’t like meat very much.'
        },
        {
          name:'B:',
          speech:'How is your dish?'
        },
        {
          name:'A:',
          speech:'I like the pork chops, but the potatoes are too salty for me.'
        },
        {
          name:'B:',
          speech:'By the way, I like the salad, too. It’s fresh, crispy and the sauce is really tasty.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'이봐, Mike. 넌 무엇을 좋아하니?'
        },
        {
          name:'B:',
          speech:'나는 쇠고기구이를 아주 좋아해. 나는 고기를 아주 좋아해. 나는 쇠고기, 돼지고기, 닭고기를 좋아해'
        },
        {
          name:'A:',
          speech:'생선은 좋아하니?'
        },
        {
          name:'B:',
          speech:'응 좋아해. 나는 참치와 연어를 아주 좋아해'
        },
        {
          name:'A:',
          speech:'너 알지, 내 부인은 채식주의자야. 그녀는 고기를 안 좋아해.'
        },
        {
          name:'B:',
          speech:'채식주의자? 그녀는 채소만 먹는다는 거지?'
        },
        {
          name:'A:',
          speech:'응. 하지만 가끔 생선은 먹어. 채소는 건강에 아주 좋아.'
        },
        {
          name:'B:',
          speech:'어쨌든. 나는 고기가 없으면 죽을 거야.'
        },
        {
          name:'A:',
          speech:'예, 나도 그래. 그러나 나는 원래 다 좋아해'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'Mike, 쇠고기 맛이 어때?'
        },
        {
          name:'B:',
          speech:'정말 맛있어. 주방장이 천재야!'
        },
        {
          name:'A:',
          speech:'예에. 내가 가장 좋아하는 식당이야.'
        },
        {
          name:'B:',
          speech:'너의 부인은 이 식당을 좋아하니?'
        },
        {
          name:'A:',
          speech:'아니, 그녀는 안 좋아해. 그녀와 그녀의 언니는 고기를 그렇게 좋아하지 않아.'
        },
        {
          name:'B:',
          speech:'너 음식은 어때?'
        },
        {
          name:'A:',
          speech:'다진 돼지고기는 좋아. 하지만  감자는 내게 너무 짜.'
        },
        {
          name:'B:',
          speech:'그런데 나는 샐러드도 좋아. 신선해. 아삭하고 소스도 정말 맛있어.'
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
