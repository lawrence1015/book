<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/group-friends-eating-restaurant_23-2148006691.jpg">

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
    border-radius: 30px;" class="black--text">~를 좋아하니?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 81 |  </h2>
                  <br />
                  <h3>Do you like…? </h3>
                    <br />
                    <p>
                      상대방의 취향이나 선호를 물을 때, 무언가를 권할 때 등 다양한 상황에서 쓸 수 있는 유용한 패턴이다. ‘~하는 것을 좋아하세요?’ 처럼 행동에 대해 물을 때는 동명사(~ing) 형태를 쓰면 된다.
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
            A : <b>너 외식하는 거 좋아해?</b><br />
            B : Yeah, I do.<br />
            A : Oh, yeah? Where do you usually eat?
            B : I usually eat at Qdoba.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Do you like eating out?</mark><br />
            B : 응.<br />
            A : 아, 그래? 주로 어디서 먹어?
            B : 주로 큐도바에서 먹어.
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
          <b>641</b> 아이 쇼핑 좋아해? ( window shopping ) <br />
                *window shopping  (사지 않고 구경만 하는) 아이 쇼핑 <br />
        </p>
        <p>
          <b>642</b> 클래식 음악 좋아하니? ( classical music ) <br />
        </p>
        <p>
          <b>643</b> 외식 좋아해? ( eat out ) <br />
        </p>
        <p>
          <b>644</b> 다른 사람들을 돕는 걸 좋아하니? ( help, others ) <br />
        </p>
        <p>
          <b>645</b> 샤워하면서 노래하는 걸 좋아하니? ( sing, shower ) <br />
        </p>
        <p>
          <b>646</b>  <br />
        </p>
        <p>
          <b>647</b>  <br />
        </p>
        <p>
          <b>648</b>  <br />
        </p>
        

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              641 Do you like window shopping?<br />
              642 Do you like classical music?<br />
              643 Do you like eating out?<br />
              644 Do you like helping others?<br />
              645 Do you like singing in the shower?<br />
              646 <br />
              647 <br />
              648 <br />
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
