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
        padding-bottom: 10px;">My father is an engineer
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">My father is an engineer</li><br />

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
            1. I <u> &emsp; &emsp; &emsp; </u> a big family. <u> &emsp; &emsp; &emsp; </u> family is big. <br />
            (저는 큰 가족을 갖고 있습니다. 저의 가족은 큽니다.)
          </li>
          <li>
            2. John <u> &emsp; &emsp; &emsp; </u> a wife and two children. <u> &emsp; &emsp; &emsp; </u> wife is very attractive. <br />
            (John은 부인과 두 명의 아이들이 있습니다. 그의 부인은 매우 매력적입니다.)
          </li>
          <li>
            3. Jim and Jack <u> &emsp; &emsp; &emsp; </u> a van <u> &emsp; &emsp; &emsp; </u> use it for &emsp; &emsp; &emsp; </u> business. <br />
            (Jim과 Jack은 벤이 있습니다. 그들은 그것을 그들의 일을 위해 사용합니다.)
          </li>
        </ol>

        <p>
          Free response:<br />
            Talk about your family.


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
                      1) be동사와 인칭대명사 : be동사(...이다/있다), 인칭대명사(사람, 사물을 지칭하는 말)<br />
                          I am (I'm-축약형)  / You are (you're)
                    </li>
                    <li>
                      2) please call me Ben : 사람들은 이름대신 애칭을 많이 사용합니다.
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
          name:'Matt:',
          speech:'So, Eva. Tell me about your family.'
        },
        {
          name:'Eva:',
          speech:'Well, I come from a big family.'
        },
        {
          name:'Matt:',
          speech:'Really? How many brothers and sisters do you have?'
        },
        {
          name:'Eva:',
          speech:'I have one brother and three sisters.'
        },
        {
          name:'Matt:',
          speech:'Are they all students like you?'
        },
        {
          name:'Eva:',
          speech:'No, my sisters work and my brother is still a baby.'
        },
        {
          name:'Eva:',
          speech:'What about you? Do you have any brothers or sisters?'
        },
        {
          name:'Matt:',
          speech:'I have a brother. He’s thirty-five.'
        },
        {
          name:'Eva:',
          speech:'Is your brother married?'
        },
        {
          name:'Matt:',
          speech:'Yes, he is. He has a wife and two children. Their children are sweet.'
        },
        {
          name:'Eva:',
          speech:'And what do your parents do?'
        },
        {
          name:'Matt:',
          speech:'My parents are retired already. How about yours?'
        },
        {
          name:'Eva:',
          speech:'My father is an engineer and my mom is a homemaker.'
        },
        {
          name:'Matt:',
          speech:'Where do you live?'
        },
        {
          name:'Eva:',
          speech:'Our house is in the downtown.'
        },
        ],

        translations:[
        {
          name:'Matt:',
          speech:'Eva. 네 가족에 대해서 말해줘'
        },
        {
          name:'Eva:',
          speech:'글쎄, 우리 가족은 대가족이야.'
        },
        {
          name:'Matt:',
          speech:'정말? 형제나 자매가 몇 명이니?'
        },
        {
          name:'Eva:',
          speech:'남동생 한 명과 세 명의 누나가 있어.'
        },
        {
          name:'Matt:',
          speech:'너처럼 모두 학생이니?'
        },
        {
          name:'Eva:',
          speech:'아니, 누나들은 직장 다니고 남동생은 아직 아기야.'
        },
        {
          name:'Eva:',
          speech:'넌 어때? 너는 형제나 자매가 있니?'
        },
        {
          name:'Matt:',
          speech:'형이 한 명 있어. 그는 35살이야.'
        },
        {
          name:'Eva:',
          speech:'네 형은 결혼했니?'
        },
        {
          name:'Matt:',
          speech:'응 결혼했어. 그는 부인과 두 명의 아이들이 있어. 그들의 아이들은 사랑스러워.'
        },
        {
          name:'Eva:',
          speech:'그리고 너의 부모님들은 무슨 일을 하시니? (너희 부모님의 직업은 뭐니)'
        },
        {
          name:'Matt:',
          speech:'부모님들은 벌써 은퇴하셨어. 너희 부모님들은 어떻니?'
        },
        {
          name:'Eva:',
          speech:'아버지는 기술자이시고 엄마는 가정 주부이셔.'
        },
        {
          name:'Matt:',
          speech:'너는 어디에 사니?'
        },
        {
          name:'Eva:',
          speech:'우리 집은 중심가에 있어.'
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
