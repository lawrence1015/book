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
    border-radius: 30px;" class="black--text">~하지 그래?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 56 |  </h2>
                  <br />
                  <h3>Why don’t you…?</h3>
                    <br />
                    <p>
                    Why don’t you…?는 ‘너는 왜!하지 않니? 라고 이유를 묻는 게 아니라 ‘하지 그러니?’ 라고 제안하는 말이다. 상대방에게 ‘~하는게 어떠냐’고 제안하거나 권유할 때 사용해보자.
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
            A : What do you think about this?<br />
            B : It looks nice.<br />
            A : Do you think so?<br />
            B : Yeah. <b>한번 입어보지 그래?</b>
          </p>
          <p style="line-height: 2;">
            A : 이거 어떤 것 같아?<br />
            B : 괜찮아 보이는데.<br />
            A : 그래?<br />
            B : 응. <mark style="background-color: #a7d7c5; color: #d9e7cd;">Why don’t you try it on?</mark>
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
          <b>300</b> 여기로 오는 게 어때? ( come over )  <br />
        </p>
        <p>
          <b>301</b> 한번 입어보지 그래? ( try on ) <br />
        </p>
        <p>
          <b>302</b> 그 여자한테 전화하지 그래? ( call ) <br />
        </p>
        <p>
          <b>303</b> 사진기를 새로 사는 게 어때? ( get, camera ) <br />
        </p>
        <p>
          <b>304</b> 오늘 여기에 들르지 그래? ( stop by ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              300 Why don’t you come over?<br />
              301 Why don’t you try it on?<br />
              302 Why don’t you call her?<br />
              303 Why don’t you get a new camera?<br />
              304 Why don't you stop by here today<br />
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
