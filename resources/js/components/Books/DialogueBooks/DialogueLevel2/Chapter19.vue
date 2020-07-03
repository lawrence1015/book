<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg">

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
        padding-bottom: 10px;">Exhibition 2 - Art is life
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #204051; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">“Art is life,” says Pablo. “My paintings are me.”</li>
      <li style="list-style-type: none;">“That’s certainly true,” says Dr. Stein. “You and your paintings are very original.”</li>
      <li style="list-style-type: none;">“This is a fine painting here, Pablo. The colors are beautiful.”</li>
      <li style="list-style-type: none;">“You’re looking at one of my favorite compositions. It’s called ‘Two Musicians.’”</li>
      <li style="list-style-type: none;">“Is it for sale, Pablo?”</li>
      <li style="list-style-type: none;">“Yes, it is, sir.”</li>
      <li style="list-style-type: none;">“How much do you want for it?” – “I’m asking two hundred dollars.”</li>
      <li style="list-style-type: none;">“Let’s see. I think I have two hundred dollars in my wallet. Here you are, Pablo.”</li>
      <li style="list-style-type: none;">“Thanks. You have a good painting there. Enjoy it!”</li>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #204051;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Fill the blanks. Always answer with a whole sentece
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            Pablo's painting is called <u> &emsp; &emsp; &emsp; </u>.<br />
            (Pablo의 그림은 _________ 라고 불리웁니다.)
          </li>
          <li>
            Pablo and his paintings <u> &emsp; &emsp; &emsp; </u> original.<br />
            (Pablo와 그의 그림들은 색다릅니다. )
          </li>
        </ol>

        <p>
          Free response<br />
          How much is Pablo's painting?<br />
          Do you like art?<br />
          Do you have any paintings at home?
        </p>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #204051;">Self Study</h3>
      <div style="padding : 16px;">


          <p>
            Translation
          </p>

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#cae8d5">
                  <v-card-text class="px-10">
                    <p>
                      "예술은 생활입니다"라고 Pablo는 말한다. "제 그림들은 저 자신입니다"<br />
                      "그것은 분명한 사실이군요" 라고 Dr Stein 는 말한다."당신과 당신의 그림들은 매우 색다르군요"<br />
                      "이 그림은 여기에서 뛰어나군요, Pablo. 색깔들이 아름다워요"<br />
                      "당신은 제가 가장 좋아하는 작품들 중의 하나를 보고 있습니다. 그것은 '두 명의 음악가'라고 불리웁니다."<br />
                      "그것 파시나요, Pablo?"<br />
                      "네, 팝니다"<br />
                      "얼마에 파시기 원하세요? - "200달러 어떨까요"<br />
                      "봅시다. 제 지갑에 200달러가 있을 겁니다. 여기있습니다, Pablo."<br />
                      "고맙습니다. 당신은 좋은 그림을 가지신 겁니다. 마음껏 즐기세요!"
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </p>

        <p>
          Notes
        </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#cae8d5">
                <v-card-text class="px-10">
                  <ol type="a" style="margin: 12px;">
                    <li>
                       one of 복수명사 : ~중의 하나로 해석이 되며 뒤에는 여러개중의 하나이므로 복수명사가 와야합니다.
                    </li>
                    <li>
                       be called : ~라고 불리우다. ex) she is called a genius / he is called Tom
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
</v-layout>
</v-container>
</div>



</template>



<script>
export default {

  props: ['fontSize'],

  data(){

    return{


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


</style>
