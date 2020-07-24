<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/young-curly-handsome-man-suffering-pain-due-sedentary-lifestyle-isolated-white-wall_231208-1119.jpg">

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
        padding-bottom: 10px;">Does He Have a Good Job?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Does He Have a Good Job?</li><br />

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
          <u>Fill the blanks. Always answer with a whole sentence</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            <u> &emsp; &emsp; &emsp; </u> Jack <u> &emsp; &emsp; &emsp; </u> a car? - No, he <u> &emsp; &emsp; &emsp; </u> not. <br />
            (Jack은 차가 있습니까? - 아니요, 그는 없습니다.)
          </li>
          <li>
            <u> &emsp; &emsp; &emsp; </u> you have <u> &emsp; &emsp; &emsp; </u> own apartment? <br />
            (당신은 당신 자신의 아파트가 있습니까?)
          </li>
          <li>
            Jack and Jim <u> &emsp; &emsp; &emsp; </u> have an apartment. They're homeless. <br />
            (Jack과 Jim은 아파트가 없습니다. 그들은 거지입니다.)
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
                      Do you have...? Yes, I do / No, I don't <br />
                        Does he have...? Yes, he does / No, he doesn't <br />
                        Do they have...? Yes, they do / No, they don't                  
                    </li>
                    <li>
                      I have... / We have.../ You have.../ He has.../ She has.../ It has.../ They have...
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
          name:'Anne:',
          speech:'Do you have a boyfriend, Liz?'
        },
        {
          name:'Liz:',
          speech:'Yes, I do. His name’s Jack.'
        },
        {
          name:'Anne:',
          speech:'Tell me about him.'
        },
        {
          name:'Liz:',
          speech:'He’s tall and handsome, and his family comes from Italy.'
        },
        {
          name:'Anne:',
          speech:'Does he speak Italian?'
        },
        {
          name:'Liz:',
          speech:'Not with me. I don’t understand a word of it.'
        },
        {
          name:'Anne:',
          speech:'Does he have a good job?'
        },
        {
          name:'Liz:',
          speech:'Yes. He works for his father.'
        },
        {
          name:'Anne:',
          speech:'What kind of business does his father have?'
        },
        {
          name:'Liz:',
          speech:'He has an Italian restaurant.'
        },
        {
          name:'Anne:',
          speech:'How’s the food in their restaurant?'
        },
        {
          name:'Liz:',
          speech:'Oh, I love it. They have really delicious spaghetti.'
        },
        {
          name:'Anne:',
          speech:'Do they have a house or an apartment?'
        },
        {
          name:'Liz:',
          speech:'They have a house. Actually, the first floor is the restaurant and they live on the second.'
        },
        {
          name:'Anne:',
          speech:'What’s it like?'
        },
        {
          name:'Liz:',
          speech:'It’s really nice. Their furniture is all in European style!'
        },
        ],

        translations:[
        {
          name:'Anne:',
          speech:'Liz, 너 남자친구있니?'
        },
        {
          name:'Liz:',
          speech:'응, 있어. 그의 이름은 Jack이야.'
        },
        {
          name:'Anne:',
          speech:'그에 대해서 얘기 좀 해줘.'
        },
        {
          name:'Liz:',
          speech:'그는 키가 크고 잘 생겼어. 그리고 그의 가족은 Italy에서 왔어.'
        },
        {
          name:'Anne:',
          speech:'그는 이탈리어를 하니?'
        },
        {
          name:'Liz:',
          speech:'나와는 안해. 나는 이탈리어 말을 이해 못해.'
        },
        {
          name:'Anne:',
          speech:'그는 좋은 직업을 가졌니?'
        },
        {
          name:'Liz:',
          speech:'응. 그는 그의 아버지를 위해 일해.'
        },
        {
          name:'Anne:',
          speech:'그의 아버지는 무슨 종류의 사업을 하시니?'
        },
        {
          name:'Liz:',
          speech:'그는 이탈리아 레스토랑을 하셔.'
        },
        {
          name:'Anne:',
          speech:'그 식당의 음식은 어떻니?'
        },
        {
          name:'Liz:',
          speech:'오, 나는 그것을 정말 좋아해. 거기 스파게티는 정말 맛있어.'
        },
        {
          name:'Anne:',
          speech:'그들은 주택이 있니 아파트가 있니?'
        },
        {
          name:'Liz:',
          speech:'그들은 주택이 있어. 실은, 1층이 레스토랑이고 그들은 2층에 살아. '
        },
        {
          name:'Anne:',
          speech:'그 집은 어떻니?'
        },
        {
          name:'Liz:',
          speech:'정말 좋아. 가구가 모두 유럽스타일이야!'
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
