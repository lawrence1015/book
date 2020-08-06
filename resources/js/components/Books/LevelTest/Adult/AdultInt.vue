<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/graduation-cap-pile-books-with-copy-space_23-2148505299.jpg">

        <v-layout
        align-end
        fill-height
        pa-2
        white--text
      >
     <h1 style="margin:0 -30px -8px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 25px;
    background-color: #ADC818;
    border:0px solid #afcde3;">Level Test | Adult Intermediate
  </h1>

      </v-layout>
    </v-img>
           <hr style="border: 3px solid #ADC818;" width="100%">

          <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Preview</h3>

  <hr width="60%">
               <div style="padding : 15px;">


<p>

<v-container grid-list-md text-xs-left>
    <v-layout row wrap>
        <v-flex xs12>
        <v-card light color="#FFD761">
          <v-card-text class="px-10">
          <p>
          Please ask your student to answer the following questions. This is to help you in giving scores and  making comments for the Level Test. The first 5 minutes should be the getting to know or warming up part, and the next 5 minutes will be level testing.

          <br><br>
          <i>If you think this level is too easy, please choose another Level Test guide.</i>
             </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</v-container>

</p>


<h3 style="margin-left: -35px;
    overflow: hidden;
    line-height:40px; display:inline-block;
    padding: 5px;
    padding-left: 35px;
    padding-right: 20px;
    background-color: #00C9A5;
    border:0px solid #afcde3;
    color: white;">I. Introduction</h3>
    <hr style="margin-left: -15px; margin-top: -6px;
    border: 3px solid #00C9A5;" width="120%">
<p>
<ol type="1">
<li>What is your name?</li>
<li>How old are you?</li>
<li>Where do you live?</li>
<li>What  are your hobbies?</li>
</ol>
</p>

<h3 style="margin-left: -35px;
    overflow: hidden;
    line-height:40px; display:inline-block;
    padding: 5px;
    padding-left: 35px;
    padding-right: 20px;
    background-color: #00C9A5;
    border:0px solid #afcde3;
    color: white;">II. Repetition</h3>
    <hr style="margin-left: -15px; margin-top: -6px;
    border: 3px solid #00C9A5;" width="120%">

<div style="padding-top : 10px; padding-bottom : 0px;">

<h3>Please repeat exactly how you heard the sentences. (Choose 2.)
</h3>

<p>
<ol type="1">
<li>Sam baked the cake yesterday.</li>
<li>She was cooking a while ago.</li>
<li>Jane visited Dave in the hospital.</li>
<li>I will visit your school later.</li>
<li>Mom was sleeping when dad arrived.</li>
<li>Billy likes going to parties.</li>
</ol>
</p>
</div>

<h3 style="margin-left: -35px;
    overflow: hidden;
    line-height:40px; display:inline-block;
    padding: 5px;
    padding-left: 35px;
    padding-right: 20px;
    background-color: #00C9A5;
    border:0px solid #afcde3;
    color: white;">III. Sentence Construction</h3>
    <hr style="margin-left: -15px; margin-top: -6px;
    border: 3px solid #00C9A5;" width="120%">

<div style="padding-top : 10px; padding-bottom : 0px;">

<h3>Make one sentence for each word given.
</h3>

<p>
<v-container grid-list-md text-xs-center>
    <v-layout row wrap>


        <v-flex xs6>
        <v-card light color="#FFD761">
          <v-card-text class="px-0">cost</v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card light color="#FFD761">
          <v-card-text class="px-0">relax</v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
</v-container>
</p>
</div>

<h3 style="margin-left: -35px;
    overflow: hidden;
    line-height:40px; display:inline-block;
    padding: 5px;
    padding-left: 35px;
    padding-right: 20px;
    background-color: #00C9A5;
    border:0px solid #afcde3;
    color: white;">IV. Freetalking</h3>
    <hr style="margin-left: -15px; margin-top: -6px;
    border: 3px solid #00C9A5;" width="120%">

<div style="padding-top : 10px; padding-bottom : 0px;">

<h3>Please answer the questions the best  way you can. (Choose 2.)
</h3>

<p>
<ol type="1">
<li>When and where was your last vacation?</li>
<li>How do you celebrate the New Year?</li>
<li>Where do you want to spend your summer vacation?</li>
<li>What is the most famous place  for tourists in Korea? Why?</li>
</ol>
</p>
</div>

<v-container grid-list-md text-xs-left>
    <v-layout row wrap>
        <v-flex xs12>
        <v-card light color="#FFD761">
          <v-card-text class="px-10">
          <p align=center>
          <i>Tell the student that a service manager will call them to update them about their schedule. Say, thank you and tell them that they did a good job. Smile!
          <br>~The End~</i>
             </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</v-container>


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
