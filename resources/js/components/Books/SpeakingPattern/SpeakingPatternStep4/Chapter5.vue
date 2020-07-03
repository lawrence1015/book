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
    border-radius: 30px;" class="black--text">이건 완전히 ~야
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 65 |  </h2>
                  <br />
                  <h3>This is totally….</h3>
                    <br />
                    <p>
                    그냥 간단히 this is… 라고 말해도 되지만, totally를 쓰면 우리말의 ‘완전히’와 같이 극단적으로 강조하는 표현이 된다. 특히 젊은 층이 많이 사용하는 표현이다.
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
            A : What? Our lecture got canceled?<br />
            B : Yep.<br />
            A : <b>이거 완전 최곤데.</b><br />
            B : I know.
          </p>
          <p style="line-height: 2;">
            A : 뭐? 우리 강의가 휴강됐다고?<br />
            B : 응.<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">This is totally awesome.</mark><br />
            B : 그러게 말이야.
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
          <b>345</b> 이거 완전 최고야. ( awesome ) <br />
              *awesome  굉장한, 아주 멋진 <br />
        </p>
        <p>
          <b>346</b> 이건 완전히 생각지도 못한 거야. ( unexpected ) <br />
        </p>
        <p>
          <b>347</b> 이건 정말 내가 원하던 거예요. ( what, want ) <br />
        </p>
        <p>
          <b>348</b> 이거 완전 바보 같아. ( stupid ) <br />
        </p>
        <p>
          <b>349</b> 이건 완전히 말도 안 된다고. (ridiculous) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              345 This is totally awesome.<br />
              346 This is totally unexpected.<br />
              347 This is totally what I wanted.<br />
              348 This is totally stupid.<br />
              349 This is totally ridiculous.<br />
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
