5<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/nervous-stressed-female-student-feeling-headache-studying-cafe_1163-5168.jpg">

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
    border-radius: 30px;" class="black--text">~한 건 아무것도 없어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;" class = "korean">

                 <h2>Pattern 27 |  </h2>
                  <br />
                  <h3>There’s nothing…</h3>
                    <br />
                    <p>
                    ‘~하는/ 할 게 아무것도 없어’라는 표현으로, nothing 뒤에는 nothing을 수식하는 형용사 과거분사/to부정사 등의 형태가 온다.
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
            A : Are you all right?<br />
            B : <b>아무렇지도 않은데.</b><br />
            A : You just seem a little nervous.<br />
            B : I have a lot on my mind.
          </p>
          <p style="line-height: 2;">
            A : 너 괜찮아?<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">There’s nothing wrong with me.</mark><br />
            A : 그냥 네가 좀 긴장한 것 같아서.<br />
            B : 마음이 복잡해서 그래
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
          <b>209</b> 난 아무 문제 없어. ( wrong ) <br />
        </p>
        <p>
          <b>210</b> 할 일이 하나도 안 남았어. ( left ) <br />
        </p>
        <p>
          <b>211</b> 무서워할 거 하나도 없어. ( be afraid of ) <br />
        </p>
        <p>
          <b>212</b> 걱정할 거 하나도 없어. ( worry, about ) <br />
        </p>
        <p>
          <b>213</b> 그 녀석은 마음에 드는 구석이 하나도 없어. ( like, about ) <br />
        </p>
        <p>
          <b>214</b> 제가 당신을 위해 할 수 있는 일은 아무것도 없어요. ( do, for you ) <br />
        </p>
        <p>
          <b>215</b> 제게 남은 건 아무것도 없어요. ( nothing, left ) <br />
        </p>
        <p>
          <b>216</b> 제가 할 수 있는 말은 없어요. ( can, say ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              209 There’s nothing wrong with me.<br />
              210 There’s nothing left to do.<br />
              211 There’s nothing to be afraid of.<br />
              212 There’s nothing to worry about.<br />
              213 There’s nothing to like about him.<br />
              214 There’s nothing I can do for you.<br />
              215 There’s nothing left for me.<br />
              216 There’s nothing I can say.<br />
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
