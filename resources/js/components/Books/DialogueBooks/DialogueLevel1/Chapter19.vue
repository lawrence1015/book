<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://static.livebooks.com/d17c79496c264db7a0a2d61cdba878bf/i/be75c978548940d49be6edc90d5abecf/1/4SoifmQp45JMgBnHp7ed2/Mannequin%20in%20Window%2C%20NYC%2C%20NY%201975%20B.jpg">

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
        padding-bottom: 10px;">There are some people
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">There are some people</li><br />

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
            What’s in the street? - <u> &emsp; &emsp; &emsp; </u> a red van next <u> &emsp; &emsp; &emsp; </u> bookstore.
              거리에 무엇이 있습니까? - 서점 옆에 붉은색 벤이 있습니다.
          </li>
          <li>
            Who's in the van? - <u> &emsp; &emsp; &emsp; </u> two strange-looking guys.
              벤 안에 누가 있습니까? - 이상하게 생긴 두 명의 남자들이 있습니다.
          </li>
          <li>
            What are they doing? - <u> &emsp; &emsp; &emsp; </u> watching our house!
              그들은 무엇을 하고 있습니까? - 그들은 우리 집을 보고 있습니다.
          </li>
        </ol>

        <p>
          Free response:<br />
            What's in your room?


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
                      There are ... : <br />
                        생각하거나 보고 있는 무언가를 묘사할 때 명사가 복수일 때 사용하고 뒤에는 a 를 쓰지 않습니다. <br />
                        There are some.... / There are two cups..../ There are many books.... <br />                 
                    </li>
                    <li>
                      There is(are)의 의문문 : <br />
                        Is there...? Yes, there is ..... , No, there isn't.....<br />
                        Are there....? Yes, there are...., No, there aren't....
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
          name:'Jack:',
          speech:'Hey, Joe! What’s going on?'
        },
        {
          name:'Joe:',
          speech:'Nothing much. I’m just watching the street.'
        },
        {
          name:'Jack:',
          speech:'What do you see?'
        },
        {
          name:'Joe:',
          speech:'There are some people standing at the bus stop. There are some black birds on the sidewalk. A small girl is feeding them. There are some high school kids in front of the theater. There’s probably a good show tonight.'
        },
        {
          name:'Jack:',
          speech:'Do you want to go?'
        },
        {
          name:'Joe:',
          speech:'Sure. I have a season ticket, anyway.'
        },
        {
          name:'Jack:',
          speech:'So what else is there in the street?'
        },
        {
          name:'Joe:',
          speech:'Well, there are also some tables and chairs on the sidewalk in front of the cafe.'
        },
        {
          name:'Jack:',
          speech:'Are there any people at the cafe?'
        },
        {
          name:'Joe:',
          speech:'No, there aren’t. It’s empty.'
        },
        {
          name:'Jack:',
          speech:'Are there any cars in the street?'
        },
        {
          name:'Joe:',
          speech:'Yes, there are.'
        },
        ],

        translations:[
        {
          name:'Jack:',
          speech:'이봐, Joe! 무슨 일이야?'
        },
        {
          name:'Joe:',
          speech:'별일 아니야. 난 그냥 거리를 보고 있어.'
        },
        {
          name:'Jack:',
          speech:'뭐가 보여?'
        },
        {
          name:'Joe:',
          speech:'버스 정류장에 서 있는 사람들이 있어. 인도 위에 검은 새들이 있어. 작은 소녀가 그들에게 먹이를 주고 있어. 극장 앞에 고등학생들이 있어. 아마도 오늘 밤에 좋은 쇼가 있나봐.'
        },
        {
          name:'Jack:',
          speech:'너 가고 싶니?'
        },
        {
          name:'Joe:',
          speech:'물론이야. 어짜피 나는 정기입장권이 있어.'
        },
        {
          name:'Jack:',
          speech:'거리에는 그 밖에 또 무엇이 있니?'
        },
        {
          name:'Joe:',
          speech:'글쎄, 까페 앞 인도 위에 탁자와 의자 또한 몇 개 있어.'
        },
        {
          name:'Jack:',
          speech:'카페에 사람들이 있니?'
        },
        {
          name:'Joe:',
          speech:'아니, 없어. 텅 비었어.'
        },
        {
          name:'Jack:',
          speech:'거리에는 차들이 있니?'
        },
        {
          name:'Joe:',
          speech:'응, 있어.'
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
