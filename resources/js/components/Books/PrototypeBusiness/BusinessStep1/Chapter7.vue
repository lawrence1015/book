<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/female-financial-adviser-explaining-business-plan_1163-5352.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(72, 87, 125, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Talking about your job (Present simple: positive and questions)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #43464C; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <div style=" border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3  class = "border white--text" >Today's topic</h3>
    <div style = "padding : 16px;">
  
      <table style = "border-collapse: collapse;">
  
        <tr v-for="dialog in dialogs">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>
  
    </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Translation</h3>
      <div style="padding : 16px;">
  
        <table style = "border-collapse: collapse;">
  
          <tr v-for="translation in translations">
            <td class = "uppertable" >{{translation.name}}</td>
            <td class = "lowertable" >{{translation.speech}}</td>
          </tr>
  
        </table>
  
      </div>
      
      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
      <div style="padding : 16px;">

        <h3>Make questions for these answer.</h3>

        <ol style="margin: 12px;">
          <li>
             ( &emsp; &emsp; &emsp; &emsp; )? Seoul.
          </li>
          <li>
             ( &emsp; &emsp; &emsp; &emsp; )? ICR Chemicals.
          </li>
          <li>
             ( &emsp; &emsp; &emsp; &emsp; )? In the head office, in Seoul.
          </li>
          <li>
             ( &emsp; &emsp; &emsp; &emsp; )? I’m a sales manager.
          </li>
        </ol>

        <p>
          Free response:<br />
          What do you do?<br />
          What company do you work for?<br />
          Where do you work?<br />
          Where do you live?
        </p>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Self Study</h3>
      <div style="padding : 16px;">


        <p>
          Notes
        </p>

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#9197A6">
                  <v-card-text class="px-10">
                    <p>
                      현재형<br />
                      긍정문 I live in London. I work for BDA.<br />
                      의문문 Where do you work? Do you live in Paris?
                    </p>
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
          speech:'So, you’re here on business?'
        },
        {
          name:'B:',
          speech:'Yeah. I work for a consulting company. Santia Partners.'
        },
        {
          name:'A:',
          speech:'And what do you do?'
        },
        {
          name:'B:',
          speech:'I’m an accountant.'
        },
        {
          name:'A:',
          speech:'Right.'
        },
        {
          name:'B:',
          speech:'I work at the office in Mexico City.'
        },
        {
          name:'A:',
          speech:'OK. So is it an international company, Santia?'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'B:',
          speech:'So. What company do you work for?'
        },
        {
          name:'A:',
          speech:'Irex Chemicals. I’m an engineer.'
        },
        {
          name:'B:',
          speech:'OK. And where do you work?'
        },
        {
          name:'A:',
          speech:'In a factory in Boston.'
        },
        {
          name:'B:',
          speech:'Right. And do you live in Boston?'
        },
        {
          name:'A:',
          speech:'Yes. I live near the coast, not far from…'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'그럼, 사업차 온 건가요?'
        },
        {
          name:'B:',
          speech:'네. 저는 컨설팅 회사에서 일해요. 산티아 파트너스.'
        },
        {
          name:'A:',
          speech:'무슨일하세요?'
        },
        {
          name:'B:',
          speech:'회계사입니다.'
        },
        {
          name:'A:',
          speech:'그렇군요.'
        },
        {
          name:'B:',
          speech:'멕시코시티에 있는 사무실에서 일해요.'
        },
        {
          name:'A:',
          speech:'그래요. 그럼 산티아는 국제회사인가요?'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'B:',
          speech:'그래서. 무슨 회사에서 일해요?'
        },
        {
          name:'A:',
          speech:'이렉스 화학. 전 기술자에요'
        },
        {
          name:'B:',
          speech:'그렇군요. 어디서 일해요?'
        },
        {
          name:'A:',
          speech:'보스턴에 있는 공장에서요.'
        },
        {
          name:'B:',
          speech:'그렇군요. 그러면 보스턴에 사나요?'
        },
        {
          name:'A:',
          speech:'네. 전 해안 근처에 살아요. 멀지 않아요.'
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
  border-color: transparent #43464C transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #43464C;
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
