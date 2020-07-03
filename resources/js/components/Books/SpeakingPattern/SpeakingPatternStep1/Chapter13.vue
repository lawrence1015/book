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
    border-radius: 30px;" class="black--text">~인지 아닌지 모르겠어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 13 |  </h2>
                  <br />
                  <h3>I don’t know if….</h3>
                    <br />
                    <p>
                      그 소문이 사실인지 아닌지 잘 모르겠는데. 처럼 그런지 어떤지 잘 모르겠다면 I don’t know 뒤에 if를 붙여서 말하면 된다.
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
            A : <b>내가 이걸 할 수 있을지 모르겠어.</b><br />
            B : Why not? It’s not that hard.<br />
            A : Are you sure?<br />
            B : Yes, I am.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I don’t know if I can do this.</mark><br />
            B : 왜 몰라? 그렇게 어렵지 않아.<br />
            A : 확실해?<br />
            B : 그렇다니까.
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
          <b>085</b> 내가 이걸 할 수 있을지 모르겠어 ( can, do ) <br />
        </p>
        <p>
          <b>086</b> 그 애가 너에게 이야기했는지 모르겠구나. ( told, you ) <br />
        </p>
        <p>
          <b>087</b> 우리가 갈 수 있을지 모르겠어. ( can, come ) <br />
        </p>
        <p>
          <b>088</b> 그 사람이 그걸 좋아할지 모르겠다. ( will, like ) <br />
        </p>
        <p>
          <b>089</b> 우리에게 와인이 충분히 있는지 모르겠네. ( enough wine ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              085 I don’t know if I can do this.<br />
              086 I don’t know if she told you.<br />
              087 I don’t know if we can come.<br />
              088 I don’t know if he’ll like it.<br />
              089 I don’t know if we have enough wine.<br />
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
