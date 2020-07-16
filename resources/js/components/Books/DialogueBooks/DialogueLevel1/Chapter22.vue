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
        padding-bottom: 10px;">Do we have any food?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br>( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Do we have any food?</li><br />

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
          <u>Look at the picture and answer the questions</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <v-container grid-list-md text-xs-center>
          <v-layout wrap align-content-center>

            <v-flex xs12 md4 >
              <v-card hover>

                <v-img src="images/dialogue-books-table.png" />

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

        <ol style="margin: 12px;">
          <li>
            What’s on the table?<br />
          </li>
          <li>
            There's a ...<br />
          </li>
          <li>
            There's some ...<br />
          </li>
          <li>
            There are some ...<br />
          </li>
        </ol>

        <p>
          Vocabulary<br />
          coffeepot, orange juice, dish, cherries, cookies, bread, knives, sandwiches, cheese<br />
          커피주전자, 오렌지쥬스, 접시, 체리, 쿠키, 빵, 칼, 샌드위치, 치즈


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
                      1) some, any : 다소,얼마간 이라고 해석하며 대명사 또는 형용사로 쓰입니다.<br />
                      some : 긍정의 평소문, 권유의 뜻을 나타내는 의문문에서 사용 <br />
                      any : 부정문, 의문문, 조건문에서 사용
                    </li>
                    <li>
                      2) 명사의 복수형 : 대부분의 명사 뒤에는 s, es가 붙고, 끝이 f, fe로 끝나면 f 를 v로 고치고 s 를 붙입니다. <br />
                      ex) knife ? knives; wife ? wives; life ? lives <br />
                      셀 수 없는 명사에는 s를 붙이지 않습니다.
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
          speech:'Mom, I’m hungry. Do we have any food?'
        },
        {
          name:'B:',
          speech:'There’s some bread on the table. Eat it.'
        },
        {
          name:'A:',
          speech:'Only plain bread? Do we have any butter?'
        },
        {
          name:'B:',
          speech:'There’s some cheese and some butter in the fridge.'
        },
        {
          name:'A:',
          speech:'Moooom, I can’t find any knives.'
        },
        {
          name:'B:',
          speech:'There is a knife in the sink. But wash them first.'
        },
        {
          name:'A:',
          speech:'Is there any ham?'
        },
        {
          name:'B:',
          speech:'No, there isn’t. Dad ate it.'
        },
        {
          name:'A:',
          speech:'Gosh. I’m starving here!'
        },
        {
          name:'B:',
          speech:'There are some cereals in the cupboard.'
        },
        {
          name:'A:',
          speech:'Where? I can’t see anything.'
        },
        {
          name:'B:',
          speech:'Never mind. Dad ate it too, probably.'
        },
        {
          name:'A:',
          speech:'What’s in the pitcher?'
        },
        {
          name:'B:',
          speech:'That’s milk.'
        },
        {
          name:'B:',
          speech:'… but don’t drink it. It went bad already.'
        },
        {
          name:'A:',
          speech:'Yuck! Thanks, mom. Too late!'
        },
        {
          name:'A:',
          speech:'What’s in that big bag?'
        },
        {
          name:'B:',
          speech:'It’s a bag of rice. There’s some rice in it.'
        },
        {
          name:'A:',
          speech:'But you’re too busy to cook something, right?'
        },
        {
          name:'B:',
          speech:'Sorry son, I’m watching my favorite TV series right now.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'엄마, 저 배고파요. 먹을 것 좀 있나요?'
        },
        {
          name:'B:',
          speech:'탁자 위에 빵이 조금 있어. 그것 먹어.'
        },
        {
          name:'A:',
          speech:'밋밋한 빵만요? 버터는 있어요?'
        },
        {
          name:'B:',
          speech:'냉장고에 치즈와 버터가 조금 있어.'
        },
        {
          name:'A:',
          speech:'엄마, 칼을 찾을 수가 없어요.'
        },
        {
          name:'B:',
          speech:'씽크대 안에 칼이 있어. 그런데 먼저 칼을 씻어야 해.'
        },
        {
          name:'A:',
          speech:'햄은 있어요?'
        },
        {
          name:'B:',
          speech:'아니 없어. 아빠가 드셨어.'
        },
        {
          name:'A:',
          speech:'아이고. 저 여기서 굶어 죽어요!'
        },
        {
          name:'B:',
          speech:'찬장 안에 씨리얼이 조금 있어.'
        },
        {
          name:'A:',
          speech:'어디요? 아무 것도 안 보여요.'
        },
        {
          name:'B:',
          speech:'말할 것도 없이, 아마 그것도 아빠가 드셨나봐'
        },
        {
          name:'A:',
          speech:' 주전자 안에 뭐가 있어요?'
        },
        {
          name:'B:',
          speech:'그거 우유야'
        },
        {
          name:'B:',
          speech:' ...하지만 마시지는 말어. 그것은 상했어'
        },
        {
          name:'A:',
          speech:'우웩! 엄마 고맙군요, 너무 늦었어요! (빨리도 말씀하시네요)'
        },
        {
          name:'A:',
          speech:'그 큰 가방에는 뭐가 있어요?'
        },
        {
          name:'B:',
          speech:'그것은 쌀가방이야. 그 안에 쌀이 조금 있어.'
        },
        {
          name:'A:',
          speech:'하지만  뭔가를 요리하기에는 너무 바쁘죠, 그렇죠?'
        },
        {
          name:'B:',
          speech:'미안해 아들, 나는 지금 내가 가장 좋아하는 TV시리즈를 보고 있어.'
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
