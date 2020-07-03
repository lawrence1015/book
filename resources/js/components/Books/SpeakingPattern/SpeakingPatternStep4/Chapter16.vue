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
    border-radius: 30px;" class="black--text">난 ~가 무서워
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 76 |  </h2>
                  <br />
                  <h3>I’m afraid of</h3>
                    <br />
                    <p>
                    어떤 상황이나 사물이 무섭거나 두려울 때 이 패턴을 사용해서 말하면 된다. 반대로 두렵지 않다고 큰소리치려면 I’m afraid of….로 말하면 된다.
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
            A : Let’s explore the attic.<br />
            B : No thanks.<br />
            A : Why not?<br />
            B : <b>난 거미라면 질색하거든</b>
          </p>
          <p style="line-height: 2;">
            A : 우리 다락방에 한번 올라가보자<br />
            B : 사양할래.<br />
            A : 왜?<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’m afraid of spiders.</mark>
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
          <b>400</b> 난 거미라면 질색이야. ( spiders )  <br />
        </p>
        <p>
          <b>401</b> 난 높은 곳이 무서워. ( heights ) <br />
        </p>
        <p>
          <b>402</b> 밤에 혼자 밖에 나가는 게 무서워. ( go out, night ) <br />
        </p>
        <p>
          <b>403</b> 난 내 감정을 보여주는 게 무서워요. ( show, feelings )<br />
        </p>
        <p>
          <b>404</b> 난 유령이 무서워요. ( ghost ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              400 I’m afraid of spiders.<br />
              401 I’m afraid of heights.<br />
              402 I’m afraid of going out alone at night.<br />
              403 I’m afraid of showing my feelings.<br />
              404 I’m afraid of ghosts.<br />
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
