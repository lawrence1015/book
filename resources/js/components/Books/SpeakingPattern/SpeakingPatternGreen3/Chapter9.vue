<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64796.jpg">

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
    border-radius: 30px;" class="black--text">왜 ~하고 싶니
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 49 |  </h2>
                  <br />
                  <h3>There’s no time to…</h3>
                    <br />
                    <p>
                    상대방이 ‘왜 ~하기를 원하는지’ 궁금할 때는 why를 써서 이렇게 물어보면 된다. Why do you want to…? 라고 통째로 외워두자.
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
            A : We’re going to get a dog.<br />
            B : Really? <b>개를 왜 키우고 싶은데?</b><br />
            A : They’re great companions.<br />
            B : But, they’re a lot of work at the same time.
          </p>
          <p style="line-height: 2;">
            A : 우린 개를 한 마리 살 거야.<br />
            B : 정말? <mark style="background-color: #a7d7c5; color: #d9e7cd;"></mark><br />
            A : 개는 좋은 친구잖아.<br />
            B : 하지만 동시에 손이 많이 가기도 하지.
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
          <b>385</b> 개를 왜 키우고 싶은데? ( have , dog ) <br />
        </p>
        <p>
          <b>386</b> 왜 부산으로 이사 가고 싶은 거야? ( move  to ) <br />
        </p>
        <p>
          <b>387</b> 왜 여기에서 파티를 하고 싶은데? ( have , party ) <br />
        </p>
        <p>
          <b>388</b> 넌 왜 문제를 일으키려고 하는 거야? ( stir up trouble ) <br />
              *Stir up trouble 분란을 일으키다. 문제를 일으키다. <br />
        </p>
        <p>
          <b>389</b> 왜 그걸 알고 싶은 거니? ( know about ) <br />
        </p>
        <p>
          <b>390</b>  <br />
        </p>
        <p>
          <b>391</b>  <br />
        </p>
        <p>
          <b>392</b>  <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              385 Why do you want to have a dog?<br />
              386 Why do you want to move to Busan?<br />
              387 Why do you want to have the party here?<br />
              388 Why do you want to stir up trouble?<br />
              389 Why do you want to know about it?<br />
              390 <br />
              391 <br />
              392 <br />
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
