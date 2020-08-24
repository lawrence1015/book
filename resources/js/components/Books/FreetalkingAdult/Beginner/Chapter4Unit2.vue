<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>


<div style="padding : 16px;">

<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://marketplace.canva.com/MADGyJx2cqU/4/screen_2x/canva-two-people-at-the-seashore-during-dawn-MADGyJx2cqU.jpg"></v-img>
</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
     <div style="padding : 16px;">

<p>The summer of 1998 brought pleasant memories to me. 
   It was the time when my favorite cousins spent a month to live with us for vacation. Because we lived near the beach, we swam in the sea and collected seashells. We spent too much time under the sun that we were as red as a crab after a month. One day while we were strolling at the beach it began to rain and the nearest shelter was an old abandoned house. It was very dark and dusty inside. The wind howled and the floor creaked. One of my cousins screamed that she saw a white ghost. When the rain stopped, we went home as fast as we could. After three days, we went back to that house in the morning. We found an old white cloth on the wall. We laughed aloud and never believed in ghosts anymore.
</p>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>Stroll</u> - to walk with no apparent aim <span class = "korean">거닐다, 산책하다 </span>
</li>

<li style="list-style-type: none;"><u>Shelter</u> - a protective <span class = "korean">(인간 생활의 세 가지 기본 요소 중) 주거지</span>
</li>

<li style="list-style-type: none;"><u>Abandoned</u> - not owned or taken care of <span class = "korean">버려진, 유기된, 방종한, 제멋대로인</span>
</li>

<li style="list-style-type: none;"><u>Howl</u> -  a loud noise like the cry of a dog <span class = "korean">울다[울부짖다], 울부짖다[법석을 떨다], 윙윙거리다</span>
</li>

<li style="list-style-type: none;"><u>Creak</u> - a high-pitched screeching sound <span class = "korean">삐걱거리다, 삐걱거리는 소리</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Big trees give good _________ from the rain and heat.
  </li>

  <li>My friend helps bring __________ cats and dogs to the animal center.
  </li>

  <li> The dog's ______________ surprised us.
  </li>

  <li> Our door always gives a ______ when opened. It's too noisy.
  </li>

  <li> We didn’t know where to go so we simply ___________ in the park.
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">



<ol style="margin: 12px;">
<li>Why was the summer of 1998 special?
</li>

<li>What did they do?
</li>

<li>Why were they as "red as a crab" after a month?
</li>

<li>Why did they go inside the old, abandoned house?
</li>

<li>Why did her cousin scream?
</li>

<li>What did they find inside the old house after three days?
</li>
</ol>
</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;" class = "korean">
       <p>
         1998년 여름은 나에게 즐거운 추억을 가져다 주었다. 내가 가장 좋아하는 사촌들이 한 달을 함께 휴가를 보내던 때였다. 우리는 바닷가 근처에 살았기 때문에 바다에서 수영을 하고 조개를 모았다. 우리는 햇볕 아래에서 너무 많은 시간을 보내서 한 달이 지나자 게처럼 빨개졌다. 어느 날 우리가 해변을 산책하고 있는 동안 비가 내리기 시작했고 가장 가까운 대피소는 오래된 버려진 집이었다. 안은 매우 어둡고 먼지가 자욱했다. 바람이 울부짖고 바닥이 삐걱거렸다. 내 사촌 중 한 명이 하얀 유령을 봤다고 소리를 질렀다. 비가 멈췄을때, 우리는 가능한 한 빨리 집에 갔다. 사흘 후, 우리는 아침에 그 집 안으로 들어갔다. 우리는 벽에서 낡은 하얀 천을 발견했다. 우리는 소리내어 웃었고 더 이상 유령을 믿지 않았다.
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
