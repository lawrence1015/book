<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/young-woman-whispering-secret-her-hand-white-background_155003-7736.jpg">

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
    border-radius: 30px;" class="black--text">~하자
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 53 |  </h2>
                  <br />
                  <h3>Let’s…</h3>
                    <br />
                    <p>
                    “같이 영화 보러 가자.”, “같이 밥 먹자.” 처럼 무언가를 함께 하자고 제안할 때 Let’s… 를 써서 말해보자.
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
            A : <b>어젯밤 일은 잊자.</b><br />
            B : Why? Are you embarrassed?<br />
            A : Yes. <b>그건 우리 둘만 알고 있자.</b><br />
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Let’s forget about last night.</mark><br />
            B : 왜? 창피해?<br />
            A : 응. <b>Let’s keep it to ourselves.</b><br />
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
          <b>417</b> 영화 보자 ( see , movie ) <br />
        </p>
        <p>
          <b>418</b> 저녁 먹으러 나가자. ( go out , dinner ) <br />
        </p>
        <p>
          <b>419</b> 그건 우리 둘만 알고 있자. ( keep , to ourselves ) <br />
        </p>
        <p>
          <b>420</b> 어젯밤 일은 잊읍시다. ( forget, last night. ) <br />
        </p>
        <p>
          <b>421</b> 우리 만나서 놀자. ( hang out ) <br />
        </p>
        <p>
          <b>422</b>  <br />
        </p>
        <p>
          <b>423</b>  <br />
        </p>
        <p>
          <b>424</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              417 Let’s see a movie.<br />
              418 Let’s go out for dinner.<br />
              419 Let’s keep it to ourselves.<br />
              420 Let’s forget about last night.<br />
              421 Let’s hang out.<br />
              422 <br />
              423 <br />
              424 <br />
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
