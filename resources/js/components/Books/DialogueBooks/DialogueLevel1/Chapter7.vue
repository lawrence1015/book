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
        padding-bottom: 10px;">How much is this?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">How much is this?</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>
      
      <p>
        Big numbers: Twenty-one, twenty five, twenty nine, thirty, forty, fifty, sixty, seventy seven
        Eighty, ninety, one hundred, two hundred ten, three hundred forty, four hundred sixty-two
        Thousand, two thousand two hundred twenty-two, ten thousand, twelve thousand fifty
      </p>

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
              How <u> &emsp; &emsp; &emsp; </u> <u> &emsp; &emsp; &emsp; </u> these shoes? <u> &emsp; &emsp; &emsp; </u> are twenty-five dollars.<br />
                (이 신발은 얼마입니까? 25달입니다.)<br />
          </li>
          <li>
              Read the following numbers:<br />
                (숫자들을 읽으세요)<br />
                  43<br />
                  34<br />
                  12<br />
                  21<br />
                  790<br />
                  38,165<br />

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

        <p>
          큰 숫자들: 21. 25. 29. 30. 40. 50. 60. 77
          80. 90. 100. 210. 340. 462
          1000. 2222. 10,000. 12,050

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
                      1) How much 동사 주어? - 가격이 얼마입니까?<br />
                    </li>
                    <li>
                      2) What(How) about 명사/v-ing...? ~은 어때? ~하는 것은 어때? 로 권유의 의미입니다.<br />
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
          speech:'Excuse me. How much is this sweater?'
        },
        {
          name:'B:',
          speech:'It’s seventy-five dollars.'
        },
        {
          name:'A:',
          speech:'That’s a little expensive…'
        },
        {
          name:'B:',
          speech:'Then, what about this one? It’s on sale, only thirty-nine dollars.'
        },
        {
          name:'A:',
          speech:'How much are these pants?'
        },
        {
          name:'B:',
          speech:'They are ninety-nine dollars and ninety-nine cents.'
        },
        {
          name:'A:',
          speech:'That’s a beautiful lamp.'
        },
        {
          name:'B:',
          speech:'These are almost sold out. Good quality for a good price!'
        },
        {
          name:'A:',
          speech:'How much is it?'
        },
        {
          name:'B:',
          speech:'It`s only thirty-five dollars!'
        },
        {
          name:'A:',
          speech:'That is a good price. Here you are.'
        },
        {
          name:'B:',
          speech:'Thank you and have a nice day!'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'실례합니다. 이 스웨터가 얼마입니까?'
        },
        {
          name:'B:',
          speech:'75달러입니다.'
        },
        {
          name:'A:',
          speech:'조금 비싸군요....'
        },
        {
          name:'B:',
          speech:'그러면 이것은 어떠세요? 할인하고 있는데요. 39달러입니다.'
        },
        {
          name:'A:',
          speech:'이 바지는 얼마입니까?'
        },
        {
          name:'B:',
          speech:'99달러 99센트입니다'
        },
        {
          name:'A:',
          speech:'그 전등 예쁘군요.'
        },
        {
          name:'B:',
          speech:'이것들은 거의 매진되었습니다. 가격에 비해 질이 좋아요!'
        },
        {
          name:'A:',
          speech:'얼마인가요?'
        },
        {
          name:'B:',
          speech:'35달러입니다!'
        },
        {
          name:'A:',
          speech:'가격이 좋군요. 여기 있습니다.'
        },
        {
          name:'B:',
          speech:'감사합니다. 좋은 하루 되세요!'
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
