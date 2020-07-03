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
    border-radius: 30px;" class="black--text">~하고 싶어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 41 |  </h2>
                  <br />
                  <h3>I want to…</h3>
                    <br />
                    <p>
                      내가 하고 싶은 것을 말할 때 가장 많이 사용되는 패턴이다. 원어민들은 want to를 줄여서 wanna라고 자주 말한다. 원하는 바를 조심스럽게 말하고 싶다면 I think I want to…라고 말하면 된다
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
            A : What do you want to do in Fiji?<br />
            B : <b>서핑을 해보고 싶어.</b><br />
            A : Fiji is supposed to be the best place to surf in the world.
          </p>
          <p style="line-height: 2;">
            A : 너 피지에서 뭐 하고 싶어?<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I want to try surfing..</mark><br />
            A : 피지가 아마 세상에서 서핑하기 가장 좋은 곳일 거야.
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
          <b>225</b> 늦잠 자고 싶어 ( sleep in ) <br />
        </p>
        <p>
          <b>226</b> 이사 가고 싶어. ( move out ) <br />
        </p>
        <p>
          <b>227</b> 다른 의견을 듣고 싶어. ( second opinion ) <br />
        </p>
        <p>
          <b>228</b> 서핑을 해보고 싶어. ( try, surfing ) <br />
        </p>
        <p>
          <b>229</b> 여기에 메리도 껴주고 싶어. ( include, in this ) <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              225 I want to sleep in.<br />
              226 I want to move out.<br />
              227 I want to get a second opinion.<br />
              228 I want to try surfing.<br />
              229 I want to include Marry in this.<br />
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
