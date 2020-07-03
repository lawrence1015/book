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
        padding-bottom: 10px;"> Are you enjoying yourself?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;"> Are you enjoying yourself?</li><br />

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
            1. Hurry up! The taxi driver is <u> &emsp; &emsp; &emsp; </u> <u> &emsp; &emsp; &emsp; </u> us.<br />
                (wait for)<br />
          </li>
          <li>
            2. They <u> &emsp; &emsp; &emsp; </u> <u> &emsp; &emsp; &emsp; </u> on the Internet.<br />
                (chat)<br />
          </li>
          <li>
            3. The restaurant is expensive. He <u> &emsp; &emsp; &emsp; </u> spending <u> &emsp; &emsp; &emsp; </u> money.<br />
                (a lot of)<br />
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
                      1) a lot of : '많은' 의 뜻으로 셀 수 있는 명사와 셀 수 없는 명사에 모두 쓰입니다.
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
          speech:'Marci, how are you and Justin enjoying your shopping trip?'
        },
        {
          name:'B:',
          speech:'We’re having a lot of fun.'
        },
        {
          name:'A:',
          speech:'Is your brother spending a lot of money?'
        },
        {
          name:'B:',
          speech:'No, mom. Don’t worry. He’s buying only one or two things. That’s all.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'Is anyone in your family traveling right now?'
        },
        {
          name:'B:',
          speech:'Yes, my dad is. He’s in Japan.'
        },
        {
          name:'A:',
          speech:'What’s he doing there?'
        },
        {
          name:'B:',
          speech:'He’s on a business trip.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'Hi Peter, where are you?'
        },
        {
          name:'B:',
          speech:'I’m at home.'
        },
        {
          name:'A:',
          speech:'Are you alone?'
        },
        {
          name:'B:',
          speech:'No, I’m not. My brother and sister are staying with me right now.'
        },
        {
          name:'A:',
          speech:'What are you guys doing?'
        },
        {
          name:'B:',
          speech:'Nothing much. We’re watching TV and eating chips.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'Marci, 너와 Justin의 쇼핑 여행이 어떠니?'
        },
        {
          name:'B:',
          speech:'우리는 아주 재밌게 보내고 있어요.'
        },
        {
          name:'A:',
          speech:'형은 돈 많이 쓰고 있니'
        },
        {
          name:'B:',
          speech:'아니요 엄마. 걱정하지 마세요. 그는 단지 한두 가지 정도 사고 있어요. 그게 전부에요. '
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'당신의 가족 중에서 지금 여행하고 있는 사람이 있습니까? '
        },
        {
          name:'B:',
          speech:'네, 저희 아빠요. 그는 지금 일본에 계세요.'
        },
        {
          name:'A:',
          speech:'그곳에서 무엇을 하십니까?'
        },
        {
          name:'B:',
          speech:'그는 해외 출장중이세요.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'안녕, Peter, 어디야?'
        },
        {
          name:'B:',
          speech:'집이야.'
        },
        {
          name:'A:',
          speech:'혼자야?'
        },
        {
          name:'B:',
          speech:'아니, 혼자 있지 않아. 지금 형과 누나와 같이 있어.'
        },
        {
          name:'A:',
          speech:'뭐하고 있는데?'
        },
        {
          name:'B:',
          speech:'특별히 없어. TV보면서 과자 먹고 있어.'
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
