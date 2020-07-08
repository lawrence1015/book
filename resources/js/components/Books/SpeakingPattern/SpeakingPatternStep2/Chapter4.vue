<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://media-public.canva.com/MADQ4w39aME/1/screen.jpg">

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
    border-radius: 30px;" class="black--text">~가 있을 거야
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 24 |  </h2>
                  <br />
                  <h3>There will be…</h3>
                    <br />
                    <p>
                      There is/ are… 패턴은 잘 사용하면서 ‘~가 있을 거야’라는 말은 금방 생각해내지 못하는 사람들이 많다. 미래에 일어날 일을 뭔가를 말할 때 쓰는 표현으로 통째로 외워두자. 특히 행사나 회의 등 공식적인 일에 대해 자주 사용한다.
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
            A : I’m really sorry.<br />
            B : Sorry won’t cut it. Why did you do it?<br />
            A : I’m sorry. It won’t happen again.<br />
            B : Okay, but <b>이번만 봐주는 거야.</b>
          </p>
          <p style="line-height: 2;">
            A : 정말 미안해.<br />
            B : 미안하면 다야? 왜 그랬어?<br />
            A : 미안해. 다시는 그런 일 없을 거야.<br />
            B : 알겠어. 하지만 <mark style="background-color: #a7d7c5; color: #d9e7cd;">there will be no next time.</mark>
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
          <b>185</b> 이번 주 금요일에 시험이 있을 거예요. ( test ) <br />
        </p>
        <p>
          <b>186</b> 파티에 사람들이 많이 올 거야. ( party ) <br />
        </p>
        <p>
          <b>187</b> 행사에 경품이 많을 거야. ( prize, event ) <br />
        </p>
        <p>
          <b>188</b> 이번만 봐주는 거야. ( no, next time ) <br />
        </p>
        <p>
          <b>189</b> 4시에 회의를 할 거예요. ( meeting, four o’clock ) <br />
        </p>
        <p>
          <b>190</b>  <br />
        </p>
        <p>
          <b>191</b>  <br />
        </p>
        <p>
          <b>192</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              185 There will be a test this Friday.<br />
              186 There will be many people at the party.<br />
              187 There will be many prizes at the event.<br />
              188 There will be no next time.<br />
              189 There will be a meeting at four o’clock.<br />
              190 <br />
              191 <br />
              192 <br />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
        
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

<style lang="css">

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

</style>
