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
        padding-bottom: 10px;">Hi, I’m your new neighbor!
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Hi, I’m your new neighbor!</li><br />

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
          <u>Look at the map and fill the blanks. Always answer with a whole sentence.</u><br />
          (지도 내용에 맞게 밑줄 친 부분을 채우세요. 답은 항상 전체 문장으로 말해주세요.) <br />
        </p>

        <v-container grid-list-md text-xs-center>
          <v-layout wrap align-content-center>

            <v-flex xs12 md4 >
              <v-card hover>

                <v-img src="images/kfcmap.gif" />

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

        <ol style="margin: 12px;">
          <li>
            1. KFC는 어디에 있습니까? 음반사옆에 있습니다. <br />
                Where is KFC? It's <u> &emsp; &emsp; &emsp; </u> <u> &emsp; &emsp; &emsp; </u> the record shop. <br />
          </li>
          <li>
            2. 식당은 어디에 있습니까? 서점 맞은 편에 있습니다.<br />
                Where is the restaurant? It's <u> &emsp; &emsp; &emsp; </u> <u> &emsp; &emsp; &emsp; </u> the bookstore.<br />
          </li>
          <li>
            3. 서점은 어디에 있습니까? 신발가게와 우체국 사이에 있습니다. <br />
                Where is the bookstore? It's <u> &emsp; &emsp; &emsp; </u> the shoe store <u> &emsp; &emsp; &emsp; </u> the post office.<br />
          </li>
        </ol>

        <p>
          Free response:<br />
            Why do you think the old lady mentioned the barber shop? – Because, the boy’s hair is …<br />
            당신은 왜 그 노인이 이발소를 언급했다고 생각합니까? - 왜냐하면 그 소년의 머리가....<br />


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
                      1) 전치사구들: next to:~옆에, ~곁에/ across from:~맞은편에(=opposite)/<br />
                          between A and B:A와 B사이에/ <br />
                    </li>
                    <li>
                      2) look for(~을 찾다) 처럼 동사와 전치사가 하나의 동사처럼 쓰이는 경우가 있습니다.<br />
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
          name:'Orlando:',
          speech:'Excuse me. I’m your new neighbor, Orlando.'
        },
        {
          name:'Old lady:',
          speech:'Oh. Yes?'
        },
        {
          name:'Orlando:',
          speech:'I’m looking for the grocery store.'
        },
        {
          name:'Old lady:',
          speech:'It’s between the church and the post office.'
        },
        {
          name:'Orlando:',
          speech:'And where’s the State Bank?'
        },
        {
          name:'Old lady:',
          speech:'It’s across the street from City Park.'
        },
        {
          name:'Orlando:',
          speech:'Oh good. And is there a laundromat near here?'
        },
        {
          name:'Old lady:',
          speech:'Well, I think there’s one across from the shopping center.'
        },
        {
          name:'Orlando:',
          speech:'Is there a department store, too?'
        },
        {
          name:'Old lady:',
          speech:'Yes, there’s the Olson’s Department Store next to the Grand Hotel.'
        },
        {
          name:'Orlando:',
          speech:'And where’s the hotel?'
        },
        {
          name:'Old lady:',
          speech:'It’s on Pine Street.'
        },
        {
          name:'Orlando:',
          speech:'Thank you.'
        },
        {
          name:'Old lady:',
          speech:'By the way, there’s a barber shop in the shopping center, too.'
        },
        {
          name:'Orlando:',
          speech:'A barber shop?'
        },
        ],

        translations:[
        {
          name:'Orlando:',
          speech:'실례합니다. 저는 당신의 새로운 이웃인 Orlando라고 합니다. '
        },
        {
          name:'Old lady:',
          speech:'아. 그래요?'
        },
        {
          name:'Orlando:',
          speech:'저는 식품점을 찾고 있습니다.'
        },
        {
          name:'Old lady:',
          speech:'그것은 교회와 우체국 사이에 있습니다.'
        },
        {
          name:'Orlando:',
          speech:'그리고 State 은행은 어디에 있습니까?'
        },
        {
          name:'Old lady:',
          speech:'그것은 City Park로부터 거리 맞은 편에 있습니다.'
        },
        {
          name:'Orlando:',
          speech:'오 좋네요. 그런데  이 근처에 세탁소가 있습니까?'
        },
        {
          name:'Old lady:',
          speech:'글쎄요, 쇼핑센터 맞은 편에 있다고 생각합니다.'
        },
        {
          name:'Orlando:',
          speech:'백화점도 있습니까?'
        },
        {
          name:'Old lady:',
          speech:'네, Grand 호텔 옆에 Olson 백화점이 있습니다.'
        },
        {
          name:'Orlando:',
          speech:'그리고 호텔은 어디에 있습니까?'
        },
        {
          name:'Old lady:',
          speech:'Pine가에 있습니다.'
        },
        {
          name:'Orlando:',
          speech:'감사합니다.'
        },
        {
          name:'Old lady:',
          speech:'그런데, 쇼핑센터 안에 이발소도 있습니다.'
        },
        {
          name:'Orlando:',
          speech:'이발소요?'
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
