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
    border-radius: 30px;" class="black--text">~하는 건 당연해
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 75 |  </h2>
                  <br />
                  <h3>No wonder….</h3>
                    <br />
                    <p>
                    어떤 상황이 충분히 예상할 만하다는 뜻으로 It’s no wonder…(~하는 건 이상하지 않아)를 사용하는데, 실제 회화에서는 대부분 it’s를 생략하고 그냥 No wonder you don’t like it.
                    (네가 그걸 싫어할 만도 하네.)처럼 말한다
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
            A : What’s wrong with Phil?<br />
            B : Why? What did he do?<br />
            A : He called me “fat.”<br />
            B : What? <b>네가 화낼 만도 하네.</b>
          </p>
          <p style="line-height: 2;">
            A : 필은 왜 그런데?<br />
            B : 왜? 그 애가 뭘 했는데?<br />
            A : 나한테 뚱뚱하다고 하잖아.<br />
            B : 뭐? <mark style="background-color: #a7d7c5; color: #d9e7cd;">No wonder you’re mad.</mark>
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
          <b>395</b> 네가 화낼 만도 하네 ( mad ) <br />
        </p>
        <p>
          <b>396</b> 그 애가 그 남자를 싫어하는 건 당연해. ( hate ) <br />
        </p>
        <p>
          <b>397</b> 제니가 시험에 낙제한 건 당연한 일이야. ( flunk, test ) <br />
                *flunk 실패하다, 낙제하다. <br />
        </p>
        <p>
          <b>398</b> 네가 안 갔을 만도 하네. ( go ) <br />
        </p>
        <p>
          <b>399</b> 경찰이 그 남자를 체포한 건 놀랄 일도 아니야. ( police, arrest ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              395 No wonder you’re mad.<br />
              396 No wonder she hates him.<br />
              397 No wonder Jenny flunked the test.<br />
              398 No wonder you didn’t go.<br />
              399 No wonder the police arrested him.<br />
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
