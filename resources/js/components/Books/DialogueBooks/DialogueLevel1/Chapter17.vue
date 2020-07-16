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
        padding-bottom: 10px;">Whose House is That?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br>( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Whose house is that?</li><br />

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
              <u> &emsp; &emsp; &emsp; </u> motorbike <u> &emsp; &emsp; &emsp; </u> this? - It's Zed's. <br />
                (이것은 누구의 오토바이입니까? - Zed의 것입니다.)
          </li>
          <li>
              <u> &emsp; &emsp; &emsp; </u> is Zed? - Zed is a friend. <br />
                (Zed는 누구입니까? - Zed는 친구입니다.)
          </li>
          <li>
              Whose books <u> &emsp; &emsp; &emsp; </u> those? -  <u> &emsp; &emsp; &emsp; </u> are my <u> &emsp; &emsp; &emsp; </u>. <br />
                (저것들은 누구의 책입니까? - 그것들은 저의 책들입니다.)
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
                      1) the Parks = the Park family (Park씨 가족)
                    </li>
                    <li>
                      2) 고유명사의 소유격과 소유대명사: 이름이나 명사 뒤에 's를 붙여서 사용합니다. 그러나 이름이 
                      복수일 때에는 's를 쓰지 않습니다 <br />
                       ex) Paul's car, Kate's lipstick <br />
                        The Parks' house (o)  the Parks's (x)
                  
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
          name:'Mr. Senil:',
          speech:'Whose glasses are these?'
        },
        {
          name:'Mrs. Senil:',
          speech:'They’re your reading glasses, my dear.'
        },
        {
          name:'Mr. Senil:',
          speech:'Are these really my glasses?'
        },
        {
          name:'Mrs. Senil:',
          speech:'Yes, they are.'
        },
        {
          name:'Mr. Senil:',
          speech:'Whose bicycles are those?'
        },
        {
          name:'Mrs. Senil:',
          speech:'They’re our boys’ bicycles.'
        },
        {
          name:'Mr. Senil:',
          speech:'Whose house is that?'
        },
        {
          name:'Mrs. Senil:',
          speech:'What’s wrong with you? It’s the Park’s house.'
        },
        {
          name:'Mr. Senil:',
          speech:'Really? I thought it was the Kim’s house.'
        },
        {
          name:'Mrs. Senil:',
          speech:'Hmm, I’m not sure, actually…'
        },
        {
          name:'Mr. Senil:',
          speech:'Darling, you’re getting older.'
        },
        {
          name:'Mrs. Senil:',
          speech:'What?! Don’t be ridiculous!'
        },
        ],

        translations:[
        {
          name:'Mr. Senil:',
          speech:'이것은 누구의 안경입니까?'
        },
        {
          name:'Mrs. Senil:',
          speech:'그것은 당신의 독서용 안경입니다.'
        },
        {
          name:'Mr. Senil:',
          speech:'정말 이것이 내 안경인가요?'
        },
        {
          name:'Mrs. Senil:',
          speech:'예, 당신 것입니다.'
        },
        {
          name:'Mr. Senil:',
          speech:'저것은 누구의 자전거입니까?'
        },
        {
          name:'Mrs. Senil:',
          speech:'우리 아이들 자전거입니다'
        },
        {
          name:'Mr. Senil:',
          speech:'저 것은 누구의 집입니까?'
        },
        {
          name:'Mrs. Senil:',
          speech:'여보 왜 그래요? 그것은 Park씨네 집이잖아요.'
        },
        {
          name:'Mr. Senil:',
          speech:'정말요? 나는 그 집이 Kim씨네 집이라고 생각했어요.'
        },
        {
          name:'Mrs. Senil:',
          speech:'흠, 저도 사실 확실하지 않아요.'
        },
        {
          name:'Mr. Senil:',
          speech:'여보, 당신 점점 늙고 있군요.'
        },
        {
          name:'Mrs. Senil:',
          speech:'뭐라구요? 엉뚱한 소리 하지 마세요!'
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
