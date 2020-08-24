<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://static.dezeen.com/uploads/2019/12/station-of-being-arctic-bus-stop-rombout-frieling-lab_dezeen_2364_col_6.jpg">

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
        padding-bottom: 10px;">What kind of bus is it?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">What kind of bus is it?</li><br />

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
          <u>Fill the blanks. Always answer with a whole sentence.</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            There <u> &emsp; &emsp; &emsp; </u> a computer on the desk.<br />
              (책상 위에 컴퓨터가 있습니다.)
          </li>
          <li>
            What <u> &emsp; &emsp; &emsp; </u> computer is it? - <u> &emsp; &emsp; &emsp; </u> a laptop.<br />
              (그것은 무슨 종류의 컴퓨터입니까?  -  노트북입니다.)
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
                      what kind of ...? ~ 은 무슨 종류의 ~이니?
                    </li>
                    <li>
                      the front yard 는 앞뜰입니다 (the back yard는 뒤뜰) in front of (~의앞에)와 혼돈하지 맙시다.
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
          speech:'What’s in the street?'
        },
        {
          name:'B:',
          speech:'There’s a bus in the street.'
        },
        {
          name:'A:',
          speech:'What kind of bus is it?'
        },
        {
          name:'B:',
          speech:'It’s a school bus.'
        },
        {
          name:'A:',
          speech:'What’s on the sidewalk?'
        },
        {
          name:'B:',
          speech:'There are some cans on the sidewalk.'
        },
        {
          name:'A:',
          speech:'What kind of cans are they?'
        },
        {
          name:'B:',
          speech:'They’re trash cans.'
        },
        {
          name:'A:',
          speech:'What’s in the front yard?'
        },
        {
          name:'B:',
          speech:'There’s a garden.'
        },
        {
          name:'A:',
          speech:'What kind of garden is it?'
        },
        {
          name:'B:',
          speech:'It’s a vegetable garden.'
        },
        {
          name:'A:',
          speech:'What kind of vegetables are there?'
        },
        {
          name:'B:',
          speech:'There are carrots, tomatoes and cabbage.'
        },
        {
          name:'A:',
          speech:'Is there a table in the garden?'
        },
        {
          name:'B:',
          speech:'Yes, there is. There’s a picnic table.'
        },
        {
          name:'A:',
          speech:'What is on the table?'
        },
        {
          name:'B:',
          speech:'There are some cartons.'
        },
        {
          name:'A:',
          speech:'What kind of cartons are there on the table?'
        },
        {
          name:'B:',
          speech:'There are milk cartons.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'거리에 무엇이 있니?'
        },
        {
          name:'B:',
          speech:'거리에 버스가 있어.'
        },
        {
          name:'A:',
          speech:'그것은 어떤 종류의 버스이니?'
        },
        {
          name:'B:',
          speech:'학교버스야.'
        },
        {
          name:'A:',
          speech:'인도 위에는 무엇이 있니?'
        },
        {
          name:'B:',
          speech:'인도 위에는 캔 몇 개가 있어.'
        },
        {
          name:'A:',
          speech:'무슨 종류의 캔들이니?'
        },
        {
          name:'B:',
          speech:' 그것들은 쓰레기통들이야.'
        },
        {
          name:'A:',
          speech:'앞 뜰에는 무엇이 있니?'
        },
        {
          name:'B:',
          speech:'정원이 있어'
        },
        {
          name:'A:',
          speech:'그것은 무슨 종류의 정원이니?'
        },
        {
          name:'B:',
          speech:'야채밭이야'
        },
        {
          name:'A:',
          speech:'무슨 종류의 야채들이 있니?'
        },
        {
          name:'B:',
          speech:'당근, 토마토, 배추가 있어.'
        },
        {
          name:'A:',
          speech:'정원에는 탁자가 있니?'
        },
        {
          name:'B:',
          speech:'응, 있어. 피크닉 탁자가 있어.'
        },
        {
          name:'A:',
          speech:'탁자 위에는 무엇이 있니?'
        },
        {
          name:'B:',
          speech:'상자(판지로만든) 몇 개가 있어.'
        },
        {
          name:'A:',
          speech:'탁자 위에 무슨 종류의 상자가 있니?'
        },
        {
          name:'B:',
          speech:'우유상자들이 있어.'
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
