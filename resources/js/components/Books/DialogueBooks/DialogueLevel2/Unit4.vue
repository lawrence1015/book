<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://www.telegraph.co.uk/content/dam/films/2017/01/03/jackie2-xlarge_trans_NvBQzQNjv4BqutubNGxeqbD0m2XylzINLiOoem_3qpp9C-iKHR23jxY.jpg">

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
        padding-bottom: 10px;">Scene from a movie
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Are you French?</li><br />

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
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)<br />
        </p>

        <ol style="margin: 12px;">
          <li>
            I'm really hungry. I <u> &emsp; &emsp; &emsp; </u> a double cheeseburger, please <br />
              저는 정말 배가 고픕니다. 저는 더블 치즈버거를 원합니다.<br />
          </li>
          <li>
            I <u> &emsp; &emsp; &emsp; </u> my parents very much. <br />
              저는 저의 부모님을 매우 사랑합니다.<br />
          </li>
          <li>
            I don't know many words in English, so I think I <u> &emsp; &emsp; &emsp; </u> a dictionary.<br />
              저는 많은 영단어를 모릅니다, 그래서 저는 사전이 필요하다고 생각합니다.<br />
          </li>
        </ol>

        <p>
          Free response:<br />
          What’s your favorite movie?<br />
          What’s your favorite scene?<br />

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
                      want, need, love뒤에는 목적어가 옵니다. 그래서 인칭대명사도 목적격으로 써야 합니다.<br />
                        I want him, she needs you, we love her. <br />
                    </li>
                    <li>
                      this의 복수는 these, that의 복수는 those인데 뒤에 복수 명사가 오면 this나 that도 복수형을 써줘야 합니다.<br />
                        ex) those things, these cats <br />
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
          name:'A:',
          speech:'Please marry me, Jacqueline. I want you. I need you. I love you.'
        },
        {
          name:'B:',
          speech:'I’m sorry, Lawrence, but I can’t.'
        },
        {
          name:'A:',
          speech:'Oh, Jackie, why not?'
        },
        {
          name:'B:',
          speech:'Well, Larry. I like you… I like you a lot… But I don’t love you.'
        },
        {
          name:'A:',
          speech:'But Jackie, love isn’t everything.'
        },
        {
          name:'B:',
          speech:'Oh, Larry, you don’t understand… For me, love is everything.'
        },
        {
          name:'A:',
          speech:'Do you… love another man, Jackie?'
        },
        {
          name:'B:',
          speech:'Yes, Larry, I do.'
        },
        {
          name:'A:',
          speech:'Not… Michael Kennedy?'
        },
        {
          name:'B:',
          speech:'Yes, Michael Kennedy.'
        },
        {
          name:'A:',
          speech:'But he doesn’t want you. He’s engaged!'
        },
        {
          name:'B:',
          speech:'I know.'
        },
        {
          name:'A:',
          speech:'Jackie, but I can’t live without you.'
        },
        {
          name:'B:',
          speech:'Oh, don’t be pathetic, Larry.'
        },
        {
          name:'A:',
          speech:'But Jackie, Mike isn’t a rich man. I can give you everything. What do you want? Clothes? Money? Travel? A house in Palm Beach?'
        },
        {
          name:'B:',
          speech:'No, Larry. I don’t want those things. I only want Mike.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'Jacqueline 나와 결혼해줘요. 난 당신을 원해요. 난 당신이 필요해요. 난 당신을 사랑해요'
        },
        {
          name:'B:',
          speech:'미안해요 Lawrence, 그럴 수 없어요'
        },
        {
          name:'A:',
          speech:'오, Jackie, 왜 안되나요?'
        },
        {
          name:'B:',
          speech:'글쎄요, Larry. 난 당신을 좋아해요... 당신을 많이 좋아해요...하지만 난 당신을 사랑하지 않아요'
        },
        {
          name:'A:',
          speech:'하지만 Jackie, 사랑이 전부는 아니잖아요.'
        },
        {
          name:'B:',
          speech:'오, Larry, 당신은 이해 못해요... 나에게 있어 사랑은 전부에요.'
        },
        {
          name:'A:',
          speech:'Jackie, 당신은… 다른 남자를 사랑하나요?'
        },
        {
          name:'B:',
          speech:'네, Larry, 맞아요.'
        },
        {
          name:'A:',
          speech:'Michael Kennedy 아니죠?'
        },
        {
          name:'B:',
          speech:'맞아요, Michael Kennedy예요.'
        },
        {
          name:'A:',
          speech:'하지만 그는 당신을 원하지 않아요. 그는 약혼했어요!'
        },
        {
          name:'B:',
          speech:'나도 알아요'
        },
        {
          name:'A:',
          speech:'Jackie, 하지만 난 당신 없이 살 순 없어요.'
        },
        {
          name:'B:',
          speech:'비참하게 굴지 마요, Larry.'
        },
        {
          name:'A:',
          speech:'하지만 Jackie, Mike는 부자가 아니에요. 난 당신에게 뭐든지 줄 수 있어요. 뭘 원해요? 옷? 돈? 여행? Palm Beach에 있는 집?'
        },
        {
          name:'B:',
          speech:'아니요, Larry. 난 그런 것들을 원하지 않아요. 난 Mike를 원할 뿐이에요.'
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
