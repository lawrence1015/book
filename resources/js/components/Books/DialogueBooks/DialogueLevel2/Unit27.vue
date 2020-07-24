<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/sea-shells-banknotes-passport-accessories-world-map_23-2147837185.jpg">

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
        padding-bottom: 10px;">Vacations
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Vacations</li><br />

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
          <u>Look at the post card from Joe’s vacation in Florida. What was there?</u><br />
          (Florida에 있는 Joe의 휴가로부터 온 엽서를 보세요. 그곳에는 무엇이 있었습니까?)<br />
          <br />
          Ex) There was a swimming pool. There were …<br />
        </p>

        <v-container grid-list-md text-xs-center>
          <v-layout wrap align-content-center>
          
          <v-flex xs12 md6 >
          <v-card hover>
          
          <v-img src="images/dialogue-beachhotel-unit27.png" />
          
          </v-card>
          </v-flex>
          
          </v-layout>
          </v-container>

      <br />
      <p>
        Free response:<br />
        Where were you on vacation last time? What was it like?<br />
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
                      Be동사의 과거형 : She(he/it) was / they(we) were<br />          
                    </li>
                    <li>
                      Be동사의 과거형의 의문문 : <br />
                        Was she(he/it)...?  Yes, she was / No, she wasn't<br />
                        Were you(they/we) ...? Yes, I was / No, I wasn't<br />
                        Yes, they were / No, they weren't<br />
                    </li>
                    <li>
                      there is / there are 의 과거형 : there was / there were<br />          
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
          name:'Diane:',
          speech:'Hi, Joe. Where were you last month?'
        },
        {
          name:'Joe:',
          speech:'Oh, hi, Diane. I was on vacation.'
        },
        {
          name:'Diane:',
          speech:'Really? But you were on vacation in January.'
        },
        {
          name:'Joe:',
          speech:'Yes, I was in Colorado in January.'
        },
        {
          name:'Diane:',
          speech:'You go on vacation quite often!'
        },
        {
          name:'Joe:',
          speech:'Uh, yes. I like traveling.'
        },
        {
          name:'Diane:',
          speech:'Where were you last month?'
        },
        {
          name:'Joe:',
          speech:'I was in Florida.'
        },
        {
          name:'Diane:',
          speech:'Florida? What was it like?'
        },
        {
          name:'Joe:',
          speech:'Fantastic! The weather was beautiful and the ocean was very warm.'
        },
        {
          name:'Diane:',
          speech:'What was the hotel like?'
        },
        {
          name:'Joe:',
          speech:'Excellent! There was a swimming pool and a beach. And there were three restaurants.'
        },
        {
          name:'Diane:',
          speech:'What were the people like?'
        },
        {
          name:'Joe:',
          speech:'They were very friendly.'
        },
        {
          name:'Diane:',
          speech:'Was Suzanne with you?'
        },
        {
          name:'Joe:',
          speech:'Yes. She loves the sun.'
        },
        {
          name:'Diane:',
          speech:'What about your children? Were they with you?'
        },
        {
          name:'Joe:',
          speech:'No, they weren’t. They were with their grandparents in Chicago.'
        },
        ],

        translations:[
        {
          name:'Diane:',
          speech:'안녕, Joe. 지난달에 너 어디에 있었니?'
        },
        {
          name:'Joe:',
          speech:'오, 안녕, Diane. 휴가중이었어.'
        },
        {
          name:'Diane:',
          speech:'정말? 그런데 넌 1월에 휴가였잖아.'
        },
        {
          name:'Joe:',
          speech:'응, 1월에 Colorado에 있었지.'
        },
        {
          name:'Diane:',
          speech:'너는 꽤 자주 휴가를 가는구나.'
        },
        {
          name:'Joe:',
          speech:'응 나는 여행을 좋아해.'
        },
        {
          name:'Diane:',
          speech:'지난달에 너는 어디에 있었니?'
        },
        {
          name:'Joe:',
          speech:'나는 Florida에 있었어.'
        },
        {
          name:'Diane:',
          speech:'Florida? 그곳은 어땠어?'
        },
        {
          name:'Joe:',
          speech:'환상적이었어! 날씨가 좋았고 바다는 매우 따뜻했어.'
        },
        {
          name:'Diane:',
          speech:'호텔은 어땠어?'
        },
        {
          name:'Joe:',
          speech:'좋았어! 수영장과 해변이 있었어. 그리고 세 개의 식당이 있었어.'
        },
        {
          name:'Diane:',
          speech:'사람들은 어땠어?'
        },
        {
          name:'Joe:',
          speech:'매우 친절했어.'
        },
        {
          name:'Diane:',
          speech:'Suzanne은 너와 함께 있었니?'
        },
        {
          name:'Joe:',
          speech:'응. 그녀는 해를 좋아해.'
        },
        {
          name:'Diane:',
          speech:'너의 아이들은? 그들은 너와 함께 있었니?'
        },
        {
          name:'Joe:',
          speech:'아니, 없었어. 그들은 Chicago에서 그들의 조부모님과 함께 있었어.'
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
