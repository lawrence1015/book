<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/close-up-portrait-young-blonde-girl-with-pure-skin-eyeglasses-smile-wearing-black-hat-coat-isolated-pretty-woman-enjoying-her-style_176420-13224.jpg">

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
    border-radius: 30px;" class="black--text">그건 좀 ~해
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 64 | </h2>
                  <br />
                  <h3>It’s a little…</h3>
                    <br />
                    <p>
                      뭔가의 상태가 ‘아주 ~해’라고 말할 때는 it’s very… 라고 하면 되지만, ‘그건 좀 ~해’ 하면서 야간 그렇다고 말할 때는 a little(약간, 좀)을 쓰면 된다. Kind of를 써서 it’s kind of… 라고 해도 같은 뜻이다.
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
            A : What do you think about my hat?<br />
            B : <b>좀 이상해.</b><br />
            A : Do you really think so?<br />
            B : Yeah, I do.
          </p>
          <p style="line-height: 2;">
            A : 내 모자 어떤 것 같아?<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">It’s a little weird.</mark><br />
            A : 정말 그렇게 생각해?<br />
            B : 응
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
          <b>505</b> 좀 이상해. ( weird )<br />
        </p>
        <p>
          <b>506</b> 좀 복잡해요. ( complicated ) <br />
        </p>
        <p>
          <b>507</b> 좀 어색해. ( awkward ) <br />
              *awkward  어색한, 거북한.<br />
        </p>
        <p>
          <b>508</b> 걷기에는 좀 멀어요.( far, walk ) <br />
        </p>
        <p>
          <b>509</b> 좀 으스스하다.  ( spooky ) <br />
        </p>
        <p>
          <b>510</b>  <br />
        </p>
        <p>
          <b>511</b>  <br />
        </p>
        <p>
          <b>512</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              505 It’s a little weird.<br />
              506 It’s a little complicated.<br />
              507 It’s a little awkward.<br />
              508 It’s a little far to walk.<br />
              509 It’s a little spooky.<br />
              510 It’s a little heavy to carry.<br />
              511 It’s a little late.<br />
              512 It’s a little bit funny.<br />
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
