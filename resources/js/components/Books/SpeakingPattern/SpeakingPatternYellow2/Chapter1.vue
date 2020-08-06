<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/serious-young-businessman-looking-financial-report-seem-like_1150-821.jpg">

        <v-layout
        align-end
        fill-height
        pa-2
        white--text
      >
     <h1 style="margin:0 -30px 10px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 25px;
    background-color: rgba(255, 231, 255, 0.64);
    border:0px solid #9B4F95;
    -webkit-border-radius: 30px;
    border-radius: 30px;" class="black--text">~가 있어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;" class = "korean">

                 <h2>Pattern 21 |   </h2>
                  <br />
                  <h3>There’s …</h3>
                    <br />
                    <p>
                      There is… 를 ‘~가 있어’라는 뜻으로만 생각한다면 제대로 활용하기 어렵다. 문제가 생기거나 차가 막히는 등 어떤 현상이나 상태를 말할 때도 다양하게 사용된다. 과거에 ‘~가 있었다’라고 하려면 there was…를 쓰면 된다.
                    </p>
                    <br />

<h2 style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #CB6ECB;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Dialogue
</h2>

<div style="padding-top : 10px; padding-bottom : 2px;">

          <br />
          <p style="line-height: 2;">
            A : What’s wrong? Are you okay?<br />
            B : No, I’m not. <b>문제가 생겼어.</b><br />
            A : What kind of problem is that?<br />
            B : I’ve just lost my wallet.
          </p>
          <p style="line-height: 2;">
            A : 왜 그래? 괜찮아?<br />
            B : 아니. <mark style="background-color: #a7d7c5; color: #d9e7cd;">There’s a problem.</mark><br />
            A : 무슨 문제인데?<br />
            B : 방금 지갑을 잃어버렸어
          </p>
          <br />


</div>

<h2  style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #CB6ECB;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Pattern Practice
</h2>

<div style="padding-top : 10px; padding-bottom : 0px;">

        <br />

        <p>
          &rarr; 우리말을 보고 순식간에 영어로 말할 수 있을 때까지 반복하세요!
        </p>
        <br />

        <p>
          <b>161</b> 가능성이 있어. ( possibility ) <br />
        </p>
        <p>
          <b>162</b> 문제가 생겼어. ( problem ) <br />
        </p>
        <p>
          <b>163</b> 차가 막혀. ( traffic jam ) <br />
        </p>
        <p>
          <b>164</b> 바람이 세게 불어.  ( strong, wind ) <br />
        </p>
        <p>
          <b>165</b> 방법은 한 가지뿐이야. ( only, way ) <br />
        </p>
        <p>
          <b>167</b> 태풍이 불었어요. <br />
        </p>
        <p>
          <b>168</b> 로비에 낯선 사람이 있어요. <br />
        </p>
    

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              161 There’s a possibility.<br />
              162 There’s a problem.<br />
              163 There’s a traffic jam.<br />
              164 There’s a strong wind.<br />
              165 There’s a only one way.<br />
              166 There’s a typhoon.<br />
              167 There’s a stranger in the lobby.<br />
              168 There's always more fish in the sea.<br />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
      
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

<style lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

body{

  font-size: 16px;
}

</style>
