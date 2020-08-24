<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/climbing-leisure_1098-14967.jpg">

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
    border-radius: 30px;" class="black--text">~할 용의가 있어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 70 |  </h2>
                  <br />
                  <h3>I’m willing to…</h3>
                    <br />
                    <p>
                    우리는 많이 쓰지 않지만 미드나 할리우드 영화에서 자주 나오는 패턴이다. ‘~할 의향이 있다’, ‘기꺼이 ~하겠다’등의 의미이다.
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
            A : Can I try it?<br />
            B : Are you sure? It’s hard.<br />
            A : I know, but <b>한번 시도해볼게.</b><br />
            B : Sure. Go ahead, then.
          </p>
          <p style="line-height: 2;">
            A : 그거 해봐도 돼?<br />
            B : 정말? 어려운데.<br />
            A : 알아, 하지만 <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’m willing to give it a try.</mark><br />
            B : 알았어. 그럼 해봐.
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
          <b>553</b> 기꺼이 모든 것을 포기하겠어. ( give up ) <br />
        </p>
        <p>
          <b>554</b> 널 위해서라면 뭐든지 할 거야. ( anything ) <br />
        </p>
        <p>
          <b>555</b> 그 위험을 무릅쓸 용의가 있어. ( take, risk ) <br />
              *take a risk  위험을 무릅쓰다.<br />
        </p>
        <p>
          <b>556</b> 한번 시도해볼게. ( give, try ) <br />
              * Give it a try  시도하다, 한번 해보다.
        </p>
        <p>
          <b>557</b> 너를 위해서라면 뭐든지 할 거야. ( anything, you ) <br />
        </p>
        <p>
          <b>558</b>  <br />
        </p>
        <p>
          <b>559</b>  <br />
        </p>
        <p>
          <b>560</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              553 I’m willing to give up everything.<br />
              554 I’m willing to do anything for you.<br />
              555 I’m willing to take that risk.<br />
              556 I’m willing to give it a try.<br />
              557 I’m willing to do anything for you.<br />
              558 I’m willing to give you a chance.<br />
              559 I’m willing to admit my mistakes.<br />
              560 I’m willing to discuss our problems.<br />
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
