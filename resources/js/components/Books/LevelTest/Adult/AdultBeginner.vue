<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/wooden-desk-with-books-apple_23-2147849980.jpg">
        
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
    background-color: rgba(6, 134, 142, 0.72);
    border:0px solid #afcde3;">Level Test | Adult Beginner
  </h1>
  
      </v-layout>
    </v-img>
           <hr style="border: 3px solid rgba(6, 134, 142, 0.72);" width="100%">

          <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Preview</h3>
          
  <hr width="60%">        
               <div style="padding : 15px;">

  
<p>

<v-container grid-list-md text-xs-left>
    <v-layout row wrap>      
        <v-flex xs12>
        <v-card light color="#c6f1e7">
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
    background-color: #fa4659;
    border:0px solid #afcde3;
    color: white;">I. Introduction</h3>
    <hr style="margin-left: -15px; margin-top: -6px;
    border: 3px solid #fa4659;" width="120%">
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
    background-color: #fa4659;
    border:0px solid #afcde3;
    color: white;">II. Repetition</h3>
    <hr style="margin-left: -15px; margin-top: -6px;
    border: 3px solid #fa4659;" width="120%">

<div style="padding-top : 10px; padding-bottom : 0px;">

<h3>Please repeat exactly how you heard the sentences. (Choose 2.)
</h3>

<p>
<ol type="1">
<li>Anne cried yesterday.</li>
<li>Billy plays the guitar.</li>
<li>John teaches English.</li>
<li>Mina likes him.</li>
<li>Jill is very angry.</li>
<li>The camera is broken.</li>
</ol>
</p> 
</div>

<h3 style="margin-left: -35px;
    overflow: hidden;
    line-height:40px; display:inline-block;
    padding: 5px;
    padding-left: 35px;
    padding-right: 20px;
    background-color: #fa4659;
    border:0px solid #afcde3;
    color: white;">III. Sentence Construction</h3>
    <hr style="margin-left: -15px; margin-top: -6px;
    border: 3px solid #fa4659;" width="120%">

<div style="padding-top : 10px; padding-bottom : 0px;">

<h3>Make one sentence for each word given.
</h3>

<p>
<v-container grid-list-md text-xs-center>
    <v-layout row wrap>
    
                
        <v-flex xs6>
        <v-card light color="#d7eaea">
          <v-card-text class="px-0">music</v-card-text>
        </v-card>
      </v-flex>
      
      <v-flex xs6>
        <v-card light color="#d7eaea">
          <v-card-text class="px-0">school</v-card-text>
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
    background-color: #fa4659;
    border:0px solid #afcde3;
    color: white;">IV. Freetalking</h3>
    <hr style="margin-left: -15px; margin-top: -6px;
    border: 3px solid #fa4659;" width="120%">

<div style="padding-top : 10px; padding-bottom : 0px;">

<h3>Please answer the questions the best  way you can. (Choose 2.)
</h3>

<p>
<ol type="1">
<li>What is your favorite restaurant?</li>
<li>What do you usually do as soon as you wake up?</li>
<li>What is your favorite food?</li>
<li>What is your favorite season?</li>
</ol>
</p> 
</div>

<v-container grid-list-md text-xs-left>
    <v-layout row wrap>      
        <v-flex xs12>
        <v-card light color="#c6f1e7">
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
