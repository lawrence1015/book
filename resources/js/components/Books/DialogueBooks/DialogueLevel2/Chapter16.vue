<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGx5RA0gE/4/screen_2x/canva-working-in-office-situation-MADGx5RA0gE.jpg">

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
        padding-bottom: 10px;">Do you have time now?
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #204051; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Liz:           Barbara, give me your pen, please.</li>
      <li style="list-style-type: none;">Barbara:   I don’t have a pen. Here’s a pencil.</li>
      <li style="list-style-type: none;">Liz:          Thank you. Do you have a piece of paper?</li>
      <li style="list-style-type: none;">Barbara:  Here you are. Is it for a letter?</li>
      <li style="list-style-type: none;">Liz:          That’s right. Do you have an envelope?</li>
      <li style="list-style-type: none;">Barbara:  Yes, but I don’t have stamps.</li>
      <li style="list-style-type: none;">Liz:          That’s OK, I have stamps.</li>
      <li style="list-style-type: none;">Barbara:  All right.</li>
      <li style="list-style-type: none;">Liz:          Do you have time now?</li>
      <li style="list-style-type: none;">Barbara:  Sure. Why?</li>
      <li style="list-style-type: none;">Liz:          Let’s have a lunch together  </li>
      <li style="list-style-type: none;">Barbara:  Why not? Let’s go. I’ll have a sandwich.</li>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #204051;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          I little bit of drill can be sometimes good, too. Repeat once<br />
          (다소 어려운 연습도 때로는 좋습니다. 다시 한번 반복해 보세요)
        </p>

        <p>
          I have / you have / we have / they have<br />
          He has / she has / it has<br />
          I don’t have / you don’t have / we don’t have / they don’t have<br />
          He doesn’t have / she doesn’t have / it doesn’t have<br />
          Do I have? / do you have? / do we have? / do they have?<br />
          Does he have? / does she have? / does it have?
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
                      Liz: Barbara, 당신의 펜좀 주세요.  <br />
                      Barbara: 펜은 없습니다.. 여기 연필이 있어요. <br />
                      Liz: 고맙습니다. 종이 한 장 있으세요? <br />
                      Barbara: 여기 있습니다. 편지 쓰실려구요?<br />
                      Liz: 그렇습니다. 봉투는 있습니까? <br />
                      Barbara: 네, 하지만 우표는 없습니다. <br />
                      Liz: 괜찮습니다. 우표는 있습니다. <br />
                      Barbara: 좋습니다. <br />
                      Liz: 지금 시간 있습니까? <br />
                      Barbara: 네. 왜요?<br />
                      Liz: 같이 점심 먹으러 갑시다. <br />
                      Barbara: 그래요. 같이 갑시다. 저는 샌드위치를 먹을 것입니다.
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
                       일반동사의 부정문 : 주어 do(does) not 동사원형 (축약형: don't, doesn't)<br />
                       (1) have는 가지다라는 소유의 뜻이 아니라 먹다라는 뜻입니다.
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
