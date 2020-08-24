<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    
<div style="padding : 16px;">

<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://marketplace.canva.com/MADGv0bHQAY/6/screen/canva-beige-dreamcatcher-near-green-plants-MADGv0bHQAY.jpg"></v-img>
</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
     <div style="padding : 16px;">

<p>Dreams are thought to have meanings. Everything in our dreams represents our desires, fears and emotions hidden deeply in our subconscious. For example, when you dream about a baby, it signifies that your inner nature is innocent and uncorrupted. If you dream of a crying baby, it means you feel weak and deprived of attention. If a mad dog appears in your dreams, it means you are being attacked by those you thought are your friends. If you are able to kill the mad dog, it means you will overcome the bad opinions of others. Water symbolizes your emotions and spirituality. Boiling water means you're angry and negative emotions are going out of control. To dream of muddy water means you are keeping negative thoughts. Calm water means you have peace of mind.
</p>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



       <li style="list-style-type: none;"><u>Subconscious</u> - part of our mind we are bit aware of <span class = "korean">잠재의식적인, 잠재의식</span>
       </li>

       <li style="list-style-type: none;"><u>Uncorrupted</u> - pure; not polished <span class = "korean">부패하지 않은, 타락하지 않은, 청렴결백한</span>
       </li>

       <li style="list-style-type: none;"><u>Deprived</u> - not allowed to have <span class = "korean">궁핍한, 불우한</span>
       </li>

       <li style="list-style-type: none;"><u>Mad</u> - crazy or very angry <span class = "korean">미친, 정신 이상인, 말도 안 되는, 정신 나간, 터무니없는</span>
       </li>

       <li style="list-style-type: none;"><u>Overcome</u> - to conquer or succeed over something <span class = "korean">극복하다, 이기다, 꼼짝 못하게 되다, 압도당하다</span>
       </li>

       <li style="list-style-type: none;"><u>Moody</u> - dirtied with mud <span class = "korean">기분 변화가 심한, 기분이 안 좋은[침울한], 서글픈 기분을 주는, 쓸쓸한</span>
       </li>



<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>My feet are dirty because I slipped into the _____ waters.
  </li>

  <li>I feel so ________ of sleep and food. I feel so tired and hungry!
  </li>

  <li>A ______ person ran wildly across the streets.
  </li>

  <li>You will _________ your shyness if you go out more often.
  </li>

  <li>The waters here are ______. They are very fresh, clean and pure!
  </li>

  <li>I feel upset sometimes for no reason. I maybe having a lot of anger in my _____________.
  </li>


</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What does it mean when you dream about a baby?
</li>

<li>What does a dog in ones’ dream mean?
</li>

<li>What does water symbolize?
</li>

<li>What does a boiling water in ones’ dream mean?
</li>
</ol>

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
