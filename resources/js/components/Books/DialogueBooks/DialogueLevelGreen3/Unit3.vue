<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/focused-african-american-man-reading-shopping-list-smartphone_74855-3412.jpg">

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
        padding-bottom: 10px;">Did you get everything?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Did you get everything?</li><br />
      <p>
        Ron Carter goes downtown every Saturday. He went downtown last Saturday.<br />
        He usually plays pool with his friends. He played pool last Saturday afternoon.<br />
        After he leaves the pool hall, he usually goes to the supermarket and gets the food for the week. He got the food last Saturday.<br />
        He usually comes home by bus. But last Saturday he came home by taxi. <br />
      </p>
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
          <u>Answer the questions</u><br />
          (질문에 답하시오)
        </p>

        <ol style="margin: 12px;">
          <li>
            How does Ron come home usually?<br />
              Ron은 보통 집에 어떻게 옵니까?<br />
          </li>
          <li>
            How did he come home this time?<br />
              그는 이번에 집에 어떻게 왔습니까?<br />
          </li>
          <li>
            Did he buy any bread?<br />
              그는 빵을 샀습니까?<br />
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
            Did you go to a store last week? What did you get?<br />

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

        <p>
          Ron Carter는 매주 토요일 시내에 갑니다. 그는 지난 토요일에 시내에 갔었습니다.<br />
          그는 주로 그의 친구들과 함께 당구를 칩니다. 그는 지난 토요일 오후에 당구를 쳤습니다.<br />
          당구장을 나온 후 그는 주로 슈퍼마켓으로 가서 일주일 음식을 삽니다. 그는 지난 토요일에 음식을 샀습니다.<br />
          그는 주로 버스를 타고 집에 옵니다. 하지만 지난 토요일에는 택시를 타고 집에 왔습니다.<br />
        </p>

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
                      일반동사 과거형의 부정문 : 주어 + did not(didn't) + 동사원형<br />
                    </li>
                    <li>
                      일반동사 과거형의 의문문 : Did + 주어 + 동사원형....?<br />
                    </li>
                    <li>
                      반복되는 일을 나타내는 현재시제는 빈도부사(always, usually, often, sometimes, rarely, never) 와 함께 자주 쓰입니다.<br />
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
          name:'Sue:',
          speech:'Ron, is that you?'
        },
        {
          name:'Ron:',
          speech:'Yes, Sue. I’m back.'
        },
        {
          name:'Sue:',
          speech:'Did you come home by taxi?'
        },
        {
          name:'Ron:',
          speech:'Yes, I did. I came by taxi. The bags were very heavy.'
        },
        {
          name:'Sue:',
          speech:'Did you get everything?'
        },
        {
          name:'Ron:',
          speech:'Yes. I got… well, almost everything.'
        },
        {
          name:'Sue:',
          speech:'Almost everything? What did you get?'
        },
        {
          name:'Ron:',
          speech:'Well, I went to the butcher, but they didn’t have any steak.'
        },
        {
          name:'Sue:',
          speech:'They didn’t have any steak?'
        },
        {
          name:'Ron:',
          speech:'No, so I got some hamburgers.'
        },
        {
          name:'Sue:',
          speech:'Did you go to the bakery?'
        },
        {
          name:'Ron:',
          speech:'Yes, but I didn’t get any bread.'
        },
        {
          name:'Sue:',
          speech:'You didn’t get any bread?'
        },
        {
          name:'Ron:',
          speech:'Well, no, they didn’t have any bread. But they had some rolls, so I got some rolls.'
        },
        {
          name:'Sue:',
          speech:'How many rolls did you get?'
        },
        {
          name:'Ron:',
          speech:'Uh, I can’t remember.'
        },
        {
          name:'Sue:',
          speech:'Ron?'
        },
        {
          name:'Ron:',
          speech:'Yes?'
        },
        {
          name:'Sue:',
          speech:'What time did you go to the store?'
        },
        {
          name:'Ron:',
          speech:'Uh… I went at five o’clock. The shelves were empty!'
        },
        ],

        translations:[
        {
          name:'Sue:',
          speech:'Ron, 너니?'
        },
        {
          name:'Ron:',
          speech:'응, Sue. 나 돌아왔어.'
        },
        {
          name:'Sue:',
          speech:'택시 타고 왔니?'
        },
        {
          name:'Ron:',
          speech:'응, 택시 타고 왔어. 가방이 너무 무거웠어.'
        },
        {
          name:'Sue:',
          speech:'전부 다 샀니?'
        },
        {
          name:'Ron:',
          speech:'응. 샀어...글쎄, 거의 전부.'
        },
        {
          name:'Sue:',
          speech:'거의 전부? 뭘 샀는데?'
        },
        {
          name:'Ron:',
          speech:'음, 정육점에 갔는데 스테이크가 없었어.'
        },
        {
          name:'Sue:',
          speech:'스테이크가 전혀 없었어?'
        },
        {
          name:'Ron:',
          speech:'응 없었어, 그래서 햄버거를 조금 샀어.'
        },
        {
          name:'Sue:',
          speech:'빵집은 갔니?'
        },
        {
          name:'Ron:',
          speech:'응, 그런데 빵을 안샀어.'
        },
        {
          name:'Sue:',
          speech:'빵을 안 샀다고?'
        },
        {
          name:'Ron:',
          speech:'그러니까, 응 안샀어, 그들은 빵이 없었어. 하지만 롤빵은 조금 있었어. 그래서 롤빵을 조금 샀어.'
        },
        {
          name:'Sue:',
          speech:'롤빵을 얼마나 샀는데?'
        },
        {
          name:'Ron:',
          speech:'음, 기억안나.'
        },
        {
          name:'Sue:',
          speech:'Ron?'
        },
        {
          name:'Ron:',
          speech:'응?'
        },
        {
          name:'Sue:',
          speech:'너 가게에 몇 시에 갔는데?'
        },
        {
          name:'Ron:',
          speech:'음...5시 정각에 갔어. 선반은 비어 있었어!'
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
