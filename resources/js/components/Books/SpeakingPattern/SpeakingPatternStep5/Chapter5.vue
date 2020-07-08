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
    border-radius: 30px;" class="black--text">난 ~하는 방식이 마음에 안 들어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 85 | </h2>
                  <br />
                  <h3>I don’t like the way…</h3>
                    <br />
                    <p>
                    여기서 way 를 ‘길’로 보면 절대 오산이다. ‘방법, 방식’이라는 의미로 써야 한다.
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
            A : Leo is one of my best friends.<br />
            B : That surprises me.<br />
            A : Why?<br />
            B : <b>그 녀석이 자기 아내를 대하는 태도가 마음에 안 들거든.</b>
          </p>
          <p style="line-height: 2;">
            A : 리오는 내 제일 친한 친구 중 하나야.<br />
            B : 그거 놀라운데.<br />
            A : 왜?<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I don’t like the way he treats his wife.</mark>
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
          <b>673</b> 그 사람 말투가 마음에 안 들어. ( talk ) <br />
        </p>
        <p>
          <b>674</b> 그 애가 널 쳐다보는 시선이 마음에 안 들어. (look at ) <br />
        </p>
        <p>
          <b>675</b> 그 녀석이 자기 아내를 대하는 태도가 마음에 안들어. ( treat, wife ) <br />
        </p>
        <p>
          <b>676</b> 이 가구가 배치된 방식이 마음에 안 들어. ( furniture, arrange ) <br />
        </p>
        <p>
          <b>677</b> 난 그 사람들이 우리를 이용하는 방식이 마음에 안 들어. ( take advantage of ) <br />
        </p>
        <p>
          <b>678</b>  <br />
        </p>
        <p>
          <b>679</b>  <br />
        </p>
        <p>
          <b>680</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              673 I don’t like the way he talks.<br />
              674 I don’t like the way she’s looking at you.<br />
              675 I don’t like the way he treats his wife.<br />
              676 I don’t like the way this furniture is arranged.<br />
              677 I don’t like the way they take advantage of us.<br />
              678 <br />
              679 <br />
              680 <br />
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

li{


}

body{

  font-size: 16px;
}

</style>
