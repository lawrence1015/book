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
        padding-bottom: 10px;">Buying Groceries
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Buying Groceries</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs">
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
            1. Do you <u> &emsp; &emsp; &emsp; </u> apples? <br />
            사과있습니까?
          </li>
          <li>
            2. <u> &emsp; &emsp; &emsp; </u> they fresh? <br />
            그들은 신선합니까?
          </li>
          <li>
            3. <u> &emsp; &emsp; &emsp; </u> a kilo of apples, please. <br />
            사과 1kg 주세요.
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

        <tr v-for="translation in translations">
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
                      1) not ~ any ... : 조금도 ~이 아닌 <br />
                      there isn't any milk (우유가 전혀없다) : 우유는 셀 수 없기 때문에 there isn't 가 왔습니다. <br />
                      there aren't any bananas (바나나가 전혀없다)
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
          name:'Storekeeper:',
          speech:'Can I help you, ma’am?'
        },
        {
          name:'Mrs. Brown:',
          speech:'Yes. I’m looking for some grapes.'
        },
        {
          name:'Storekeeper:',
          speech:'I’m sorry. There aren’t any grapes left.'
        },
        {
          name:'Mrs. Brown:',
          speech:'Oh, that’s too bad!'
        },
        {
          name:'Storekeeper:',
          speech:'Do you like lemons? We have fresh lemons today.'
        },
        {
          name:'Mrs. Brown:',
          speech:'No. Lemons are sour. What about bananas? Do you have any bananas?'
        },
        {
          name:'Storekeeper:',
          speech:'You’re lucky. We have some nice bananas today.'
        },
        {
          name:'Mrs. Brown:',
          speech:'That’s wonderful. Give me a bunch of bananas, please.'
        },
        {
          name:'Storekeeper:',
          speech:'Anything else?'
        },
        {
          name:'Mrs. Brown:',
          speech:'Yes, I want a bag of potatoes, two jars of jam and a box of cookies.'
        },
        {
          name:'Storekeeper:',
          speech:'Here you are.'
        },
        {
          name:'Mrs. Brown:',
          speech:'Oh, and give me a bottle of milk, too.'
        },
        {
          name:'Storekeeper:',
          speech:'Oh, and give me a bottle of milk, too.'
        },
        ],

        translations:[
        {
          name:'Storekeeper:',
          speech:'도와드릴까요, 선생님?'
        },
        {
          name:'Mrs. Brown:',
          speech:'네. 저는 포도를 찾고 있습니다.'
        },
        {
          name:'Storekeeper:',
          speech:'죄송합니다. 포도는 다 떨어졌습니다(남아있는 포도가 없습니다).'
        },
        {
          name:'Mrs. Brown:',
          speech:'오, 안되요!'
        },
        {
          name:'Storekeeper:',
          speech:'레몬 좋아하세요? 오늘 신선한 레몬이 있습니다.'
        },
        {
          name:'Mrs. Brown:',
          speech:'아니요, 레몬은 시잖아요. 바나나는 어때요? 바나나는 있나요?'
        },
        {
          name:'Storekeeper:',
          speech:'운이 좋으십니다. 오늘 좋은 바나나가 조금 있어요.'
        },
        {
          name:'Mrs. Brown:',
          speech:'멋집니다. 바나나 한 송이 주세요.'
        },
        {
          name:'Storekeeper:',
          speech:'다른 것은요?'
        },
        {
          name:'Mrs. Brown:',
          speech:'네, 감자 한 봉지, 잼 두병과 쿠키 한 상자를 원해요.'
        },
        {
          name:'Storekeeper:',
          speech:'여기 있습니다.'
        },
        {
          name:'Mrs. Brown:',
          speech:'오, 우유 한 병도 주세요.'
        },
        {
          name:'Storekeeper:',
          speech:'여기 있습니다. 선생님.'
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
