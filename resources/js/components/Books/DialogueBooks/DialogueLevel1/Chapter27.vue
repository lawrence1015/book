<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/fresh-tasty-sandwich_144627-15298.jpgg">

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
        padding-bottom: 10px;">What do you want?
      </h1>
    </v-layout>

  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">What do you want?</li><br />

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
            I'm really hungry. I <u> &emsp; &emsp; &emsp; </u> a big steak. <br />
              저는 정말 배가 고픕니다. 저는 큰 스테이크를 원합니다.
          </li>
          <li>
            What <u> &emsp; &emsp; &emsp; </u> want? <br />
              무엇을 원하십니까?
          </li>
          <li>
            Do <u> &emsp; &emsp; &emsp; </u> coke or juice? <br />
              콜라를 원하세요 쥬스를 원하세요?
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
                     셀 수 없는 명사 : <br/>
                      복수형이 없고 a 도 쓰지 않습니다. 하지만 셀 수 없는 명사를 셀 수 있게 해 주는 어구들이 있습니다.<br />
                      a loaf of bread(빵 한 덩어리) / a piece of cake(케이크 한 조각) / a glass of water(물 한잔) / a bottle of beer(맥주 한병)<br />   
                    </li>
                    <li>
                      I want.../ you want... / What do you want..? / Do you want..?
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
          name:'Waiter:',
          speech:'What do you want for lunch, ma’am?'
        },
        {
          name:'Customer:',
          speech:'I want some coffee and a ham sandwich.'
        },
        {
          name:'Waiter:',
          speech:'Do you want mayonnaise on your sandwich?'
        },
        {
          name:'Customer:',
          speech:'No, thanks. I don’t like mayonnaise.'
        },
        {
          name:'Waiter:',
          speech:'Do you like mustard?'
        },
        {
          name:'Customer:',
          speech:'Yes, I do. And give me some ketchup, please.'
        },
        {
          name:'Waiter:',
          speech:'Here’s a bottle of ketchup. Do you want anything else?'
        },
        {
          name:'Customer:',
          speech:'Yes, give me some chips, too.'
        },
        {
          name:'Waiter:',
          speech:'Anything to drink?'
        },
        {
          name:'Customer:',
          speech:'I want a large glass of orange juice.'
        },
        {
          name:'Waiter:',
          speech:'What dessert do you want?'
        },
        {
          name:'Customer:',
          speech:'I want two crepes with strawberry and cream cheese.'
        },
        {
          name:'Waiter:',
          speech:'Is that all?'
        },
        {
          name:'Customer:',
          speech:'Yes, that’s all. Thanks.'
        },
        ],

        translations:[
        {
          name:'Waiter:',
          speech:'점심으로 무엇을 드시고 싶으세요 선생님?'
        },
        {
          name:'Customer:',
          speech:'커피와 햄샌드위치를 먹고 싶어요.'
        },
        {
          name:'Waiter:',
          speech:'샌드위치 위에 마요네즈도 드릴까요?'
        },
        {
          name:'Customer:',
          speech:'아니요, 됐어요. 저는 마요네즈를 좋아하지 않아요'
        },
        {
          name:'Waiter:',
          speech:'겨자는 좋아하세요?'
        },
        {
          name:'Customer:',
          speech:'네, 좋아해요. 그리고 케첩도 조금 주세요.'
        },
        {
          name:'Waiter:',
          speech:'여기 케첩 한 병 있습니다. 그 밖의 다른 것은요?'
        },
        {
          name:'Customer:',
          speech:'네, 칩도 조금 주세요.'
        },
        {
          name:'Waiter:',
          speech:'마실 것은요?'
        },
        {
          name:'Customer:',
          speech:'오렌지주스 큰 컵으로 한 잔 주세요.'
        },
        {
          name:'Waiter:',
          speech:'후식은 무엇을 드시겠어요?'
        },
        {
          name:'Customer:',
          speech:'딸기와 크림 치즈가 있는 크레페 두 개 주세요.'
        },
        {
          name:'Waiter:',
          speech:'그것이 전부인가요?'
        },
        {
          name:'Customer:',
          speech:'네, 전부예요. 감사합니다.'
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
