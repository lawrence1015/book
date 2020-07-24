<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/black-friday-inscription-white-cubes_23-2147973764.jpg">

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
    border-radius: 30px;" class="black--text">~를 믿을 수가 없어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 72 |  </h2>
                  <br />
                  <h3>I can’t believe…</h3>
                    <br />
                    <p>
                    믿기지 않는 상황에 대해 이야기할 때 이 패턴을 사용한다 그 상황은 믿어지지 않을 만큼 좋을 수도 있지만 믿기 싫을 만큼 나쁠 수도 있다.
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
            A : What day is it today?<br />
            B : It’s Friday.<br />
            A : What? <b>오늘이 벌써 금요일이라니 믿기지가 않네.</b><br />
            B : Tell me about it.
          </p>
          <p style="line-height: 2;">
            A : 오늘 무슨 요일이야?<br />
            B : 금요일.<br />.
            A : 뭐? <mark style="background-color: #a7d7c5; color: #d9e7cd;">I can’t believe today is already Friday.</mark><br />
            B : 그러게 말이야.<br />
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
          <b>569</b> 네가 저걸 먹었다니 믿을 수 없어. ( believe, ate ) <br />
        </p>
        <p>
          <b>570</b> 오늘이 벌써 금요일이라니 믿기지 않아. ( today, Friday ) <br />
        </p>
        <p>
          <b>571</b> 이런 일이 일어나다니 말도 안 돼. ( happening ) <br />
        </p>
        <p>
          <b>572</b> 우리 사이가 끝났다는 게 믿어지지 않아. ( over, between )  <br />
        </p>
        <p>
          <b>573</b> 그 사람이 너에게 그런 말을 했다니 믿기지가 않아. ( say that ) <br />
        </p>
        <p>
          <b>574</b>  <br />
        </p>
        <p>
          <b>575</b>  <br />
        </p>
        <p>
          <b>576</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              569 I can’t believe you ate that.<br />
              570 I can’t believe today is already Friday.<br />
              571 I can’t believe this is happening.<br />
              572 I can’t believe it’s over between us.<br />
              573 I can’t believe he said that.<br />
              574 <br />
              575 <br />
              576 <br />
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
