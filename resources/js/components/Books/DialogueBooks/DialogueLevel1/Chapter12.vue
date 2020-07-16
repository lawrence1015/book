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
        padding-bottom: 10px;">She has a beautiful smile
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br>( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">She has a beautiful smile</li><br />
      
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
          <u>Answer questions.</u><br />
          (질문에 답하세요.)<br />
        </p>

        <ol style="margin: 12px;">
          <li>
              Who has a girlfriend? <br />
          </li>
          <li>
              What does she look like? <br />
          </li>
          <li>
              Does Tino have a picture of her?<br />
          </li>
          <li>
              Is she young or old?<br />
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
                    <li>
                      1) 영어에서는 외모를 표현할 때 have 동사를 씁니다. 하지만 가지고 있다라고 해석하기 보다는 <br />
                          ~이다 혹은 있다로 해석을 하면 됩니다. <br />
                    </li>
                    <li>
                      2) have동사는 ~있습니까?로 해석이 되었습니다 .<br />
                    </li>
                    <li>
                      3) twenty(20의) : She is in her early twenties (그녀는 20초반입니다) <br />
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
          name:'Tino:',
          speech:'Hi, Nick!'
        },
        {
          name:'Nick:',
          speech:'Tino! Good to see you! Where’s your girlfriend?'
        },
        {
          name:'Tino:',
          speech:'She’s at home.'
        },
        {
          name:'Louie:',
          speech:'Tino has a cute girlfriend. She is tall, and she has long blond hair and blue eyes.'
        },
        {
          name:'Nick:',
          speech:'Do you have a picture of her?'
        },
        {
          name:'Tino:',
          speech:'Yeah, I have her picture in my wallet.'
        },
        {
          name:'Nick:',
          speech:'Wow! She has a beautiful smile!'
        },
        {
          name:'Tino:',
          speech:'Thanks. She is really pretty in this photo.'
        },
        {
          name:'Nick:',
          speech:'How old is she?'
        },
        {
          name:'Tino:',
          speech:'She’s young. She’s only in her twenties.'
        },
        {
          name:'Nick:',
          speech:'Do you have a girlfriend, Louie?'
        },
        {
          name:'Louie:',
          speech:'No, I don’t. I’m too busy.'
        },
        ],

        translations:[
        {
          name:'Tino:',
          speech:'안녕, Nick!'
        },
        {
          name:'Nick:',
          speech:'Tino! 만나서 기뻐! 너의 여자 친구는 어디에 있니?'
        },
        {
          name:'Tino:',
          speech:'집에 있어.'
        },
        {
          name:'Louie:',
          speech:'Tino는 귀여운 여자 친구가 있다. 키가 크고 머리는 금발이며 눈은 파랐다.'
        },
        {
          name:'Nick:',
          speech:'그녀의 사진이 있니?'
        },
        {
          name:'Tino:',
          speech:'응. 내 지갑에 사진이 있어.'
        },
        {
          name:'Nick:',
          speech:'와우! 미소가 아름답구나! '
        },
        {
          name:'Tino:',
          speech:'고마워. 그녀는 이 사진에서 정말 예쁘다.'
        },
        {
          name:'Nick:',
          speech:'몇 살이니?'
        },
        {
          name:'Tino:',
          speech:'어려. 20대야.'
        },
        {
          name:'Nick:',
          speech:' 너는 여자 친구가 있니, Louie?'
        },
        {
          name:'Louie:',
          speech:'아니, 없어. 난 너무 바빠.'
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
