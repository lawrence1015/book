<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwOByWL4/5/screen_2x/canva-girl-lying-on-white-surface-petting-gray-rabbit-MADGwOByWL4.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
      >
        <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Pets</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>Pets are companion animals. Humans keep them for friendship rather than for economic reasons. Most people's consideration for choosing pets are attractiveness and playfulness. For instance, many people like to keep cute and cuddly animals as friends. Some people like to keep active pets. The two most common domestic companions are of course the cat and the dog. However, some people like to keep exotic pets like snakes or spiders.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Companion(n)</u> -  something or someone who stays close <span style="font-size:16px">동반자, 동행, 친구[벗]</span>
</li>

<li style="list-style-type: none;"><u>Economic(adj)</u> -  refers to money and economy <span style="font-size:16px">경제의, 경제성이 있는</span>
</li>

<li style="list-style-type: none;"><u>Cuddly(adj)</u> -   nice to hug <span style="font-size:16px">꼭 껴안고 싶은, 껴안을 수 있게 만든</span>
</li>

<li style="list-style-type: none;"><u>Domestic(adj)</u> -  near or about human homes <span style="font-size:16px">국내의, 가정의, 집안의</span>
</li>

<li style="list-style-type: none;"><u>Exotic(adj)</u> - unusual and interesting, usually because it comes from or is related to a distant country <span style="font-size:16px">외국의; 이국적인</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Who will be your __________ in your winter trip to Europe?
  </li>

  <li>Fried bats and ant soup are _________ food.
  </li>

  <li>My _____________ work includes cooking and washing the dishes.
  </li>

  <li>This teddy bear looks very, very ___________.
  </li>

  <li>The _____________ status of our country is good. There are a lot of businesses and jobs.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<li style="list-style-type: none;">What are pets?
</li>

<li style="list-style-type: none;">Why do humans keep them?
</li>

<li style="list-style-type: none;">What are people’s considerations in choosing pets?
</li>

<li style="list-style-type: none;">What are the two most common pets?
</li>

<li style="list-style-type: none;">What are examples of exotic pets?
</li>


</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;">

<p>
  애완동물은 반려동물이다. 인간들은 경제적인 이유보다는 우정을 위해 그것들을 키운다. 
  대부분의 사람들이 애완동물을 고를 때 고려하는 것은 매력과 장난기다. 
  예를 들어, 많은 사람들은 귀엽고 껴안고 싶은 동물들을 친구로 키우는 것을 좋아한다. 
  어떤 사람들은 활동적인 애완동물을 기르는 것을 좋아한다. 가장 흔한 두 가족 동반자는 물론 고양이와 개다. 
  하지만 어떤 사람들은 뱀이나 거미와 같은 이국적인 애완동물을 기르는 것을 좋아한다.
</p>

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

      dialogs:[
        {
          name:'F :',
          speech:"It may be hard to believe this but there was once a pet pig who saved her master's life."
        },
        {
          name:'M :',
          speech:"What? A pig? I have heard about loyal dogs but pigs?"
        },
        {
          name:'F :',
          speech:"That is true! There was a pig named Lulu whose master had a heart attack. To get help, she went out in the streets to stop the traffic and to catch the attention of the people."
        },
        {
          name:'M :',
          speech:"What happened next?"
        },
        {
          name:'F :',
          speech:"Finally someone followed her back to her house and found his master in pain. Her master was saved, thanks to Lulu the pig."
        },
      ],
      dialogs2:[
        {
          name:'M :',
          speech:"Do you prefer dogs or cats?"
        },
        {
          name:'F :',
          speech:"I think I prefer cats. They are quiet and mysterious but they are also friendly at times. How about you?"
        },
        {
          name:'M :',
          speech:"I'm absolutely a dog-lover! They are faithful and full of energy. Dogs are great playmates, too."
        },
        {
          name:'F :',
          speech:"Oh well, I just prefer to sit and lie down so I like cats."
        },
        {
          name:'M :',
          speech:"Really, dogs are better! You can walk them in the park when you jog or exercise."
        },
        {
          name:'F :',
          speech:"Cats are better! They are not needy or naughty!"
        },
        {
          name:'M :',
          speech:"Dogs are better! Hmmm.. but I guess that depends on one's personality."
        },
      ],
       translations:[
        {
          name:'F :',
          speech:"믿기 힘들겠지만, 한때 주인의 목숨을 구한 반려 돼지가 있었어."
        },
        {
          name:'M :',
          speech:"뭐? 돼지? 나는 충견에 대해 들어봤지만 돼지는 들어보지 못했는데?"
        },
        {
          name:'F :',
          speech:"그건 사실이야! 주인이 심장마비를 일으킨 루루라는 돼지가 있었어. 그녀는 도움을 얻기 위해 거리로 나가 교통을 막고 사람들의 주의를 끌었어."
        },
        {
          name:'M :',
          speech:"그 다음엔 어떻게 됐어?"
        },
        {
          name:'F :',
          speech:"마침내 누군가가 그녀를 따라 그녀의 집으로 돌아왔고, 그의 주인이 고통스러워하는 것을 발견했어. 그녀의 주인은 돼지 루루 덕분에 구조되었어."
        },
       ],
       translations1:[
        {
          name:'M :',
          speech:"넌 강아지를 좋아하니, 아니면 고양이를 좋아하니?"
        },
        {
          name:'F :',
          speech:"난 고양이가 더 좋은 것 같아. 그들은 조용하고 신비롭지만 때로는 친근하기도 해. 너는 어때?"
        },
        {
          name:'M :',
          speech:"난 정말 개를 사랑하는 사람이야! 그들은 충실하고 에너지가 넘쳐. 개들은 또한 훌륭한 놀이 친구들이야."
        },
        {
          name:'F :',
          speech:"글쎄, 난 그냥 앉아서 누워 있는 게 더 좋아서 고양이를 좋아해."
        },
        {
          name:'M :',
          speech:"정말, 개들이 더 나아! 당신은 조깅이나 운동을 할 때 그들을 공원에서 산책시킬 수 있어."
        },
        {
          name:'F :',
          speech:"고양이가 더 좋아! 그들은 궁핍하지도 않고 장난도 안쳐!"
        },
        {
          name:'M :',
          speech:"개들이 더 나아! 음.. 하지만 그건 사람의 성격에 따라 다르겠지."
        },
       ],


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
