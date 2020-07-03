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
    border-radius: 30px;" class="black--text">~는 아닌 것 같아.
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 2 | </h2>
                  <br />
                  <h3>I don't think..</h3>
                    <br />
                    <p>
                    “못 갈 것 같아.”, “필요 없을 것 같아.” 처럼 부정적인 내용으로 생각을 밝힐 때는 &lt;I don’t think+ 긍정문&gt; 패턴을 쓴다. &lt;I think+부정문&gt; 패턴은 다소 강한 어조로 불쾌감을 줄 수 있으니 주의하자.
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
            A : I met the new boss this morning<br />
            B : Oh, yeah? What’s he like?<br />
            A : <b>썩 친절한 편은 아닌 것 같아</b><br />
            B : Uh oh.
          </p>
          <p style="line-height: 2;">
            A : 오늘 아침에 새로 온 상사 만났어.<br />
            B : 어 그래? 어때?<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I don't think he's very kind.</mark><br />
            B : 이런.
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
          <b>009</b> 그 사람 썩 친절하지는 않은 것 같아. ( kind ) <br />
        </p>
        <p>
          <b>010</b> 우린 그렇게 오래 못 기다릴 것 같은데. ( wait, long ) <br />
        </p>
        <p>
          <b>011</b> 나 그 회의에 참석 못할 것 같아. ( can, attend ) <br />
        </p>
        <p>
          <b>012</b> 그건 필요 없을 것 같아. ( necessary ) <br />
        </p>
        <p>
          <b>013</b> 비싼 것 같지는 않아. ( expensive ) <br />
        </p>
        <p>
          <b>014</b> 그걸 잊을 수 없을 것 같아요. ( forget ) <br />
        </p>
        <p>
          <b>015</b> 그를 믿을 수 없을 것 같아요. ( trust ) <br />
        </p><p>
          <b>016</b> 저는 그가 정직하다고 생각하지 않아요.( honest ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              009 I don’t think he’s very kind.<br />
              010 I don’t think we can wait that long.<br />
              011 I don’t think I can attend the meeting.<br />
              012 I don’t think that’s necessary.<br />
              013 I don’t think that’s expensive.<br />
              014 I don't think I can forget that.<br />
              015 I don't think I can trust him.<br />
              016 I don't think he is honest.<br />
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
