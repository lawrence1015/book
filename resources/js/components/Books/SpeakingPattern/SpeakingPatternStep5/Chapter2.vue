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
    border-radius: 30px;" class="black--text">난 ~를 좋아해
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 82 |  </h2>
                  <br />
                  <h3>I like…</h3>
                    <br />
                    <p>
                    Like는 ‘~를 좋아하다’라는 뜻으로 뒤에 사물을 붙여 쓸 수도 있고 동명사나 to 부정사와 함께 쓸 수도 있는 활용도 높은 패턴이다. 무척 많이 좋아한다고 강조하고 싶을 때는 like대신 love를 써서 표현하면 된다.
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
            A : <b>난 새로 온 상사가 마음에 들어.</b><br />
            B : Really? I’m undecided.<br />
            A : Well, he’s giving us Friday off.<br />
            B : Really? I didn’t know that.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I like the new boss.</mark><br />
            B : 정말? 난 잘 모르겠어.<br />
            A : 음, 금요일에 휴가를 주잖아.<br />
            B : 그래? 난 그건 몰랐어. <br />
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
          <b>649</b> 난 재즈를 좋아해. ( jazz ) <br />
        </p>
        <p>
          <b>650</b> 난 새로 온 상사가 마음에 들어. ( new boss ) <br />
        </p>
        <p>
          <b>651</b> 난 게임하는 걸 좋아해 ( palt, game ) <br />
        </p>
        <p>
          <b>652</b> 난 친구들 만나서 노는 걸 좋아해. ( hang out with ) <br />
                *hang out with ~와 어울리다.<br />
        </p>
        <p>
          <b>653</b> 난 바닐라보다 초콜릿이 더 좋아. ( better than, vanilla ) <br />
        </p>
        <p>
          <b>654</b>  <br />
        </p>
        <p>
          <b>655</b>  <br />
        </p>
        <p>
          <b>656</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              649 I like jazz.<br />
              650 I like the new boss.<br />
              651 I like to play games.<br />
              652 I like hanging out with my friends.<br />
              653 I like vanilla better than chocolate.<br />
              654 <br />
              655 <br />
              656 <br />
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
