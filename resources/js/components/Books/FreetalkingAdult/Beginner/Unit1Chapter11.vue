<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyKshH4k/4/screen_2x/canva-group-of-people-sitting-on-white-mat-on-grass-field-MADGyKshH4k.jpg">

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
        padding-bottom: 10px;">Right Now</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>We are having a picnic right now. It is very fun and exciting.  Let me explain what is happening as I look around the campsite. Danny and Jesse are putting up a tent. Tory is cooking pumpkin soup and some rice balls for lunch. As Jay is trying to cut the tall grasses and clearing the area, Tommy is gathering some wood for the bonfire tonight.
I can hear the waterfalls nearby. It is not very big but it looks so beautiful.  The sun shines brightly but the trees give us a cool shade. Some of the girls are sitting at the corner and just talking. Some of the girls neaten up the supplies and our things. I think I should stop chatting and just help them now?
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Gather(v)</u> - to collect <span style="font-size:16px">모으다[수집하다]</span>
</li>

<li style="list-style-type: none;"><u>Bonfire(n)</u> - campfire, outdoor fire <span style="font-size:16px">모닥불</span>
</li>

<li style="list-style-type: none;"><u>Nearby(adj)</u> - a place only a short distance away <span style="font-size:16px">인근에, 가까운 곳에</span>
</li>

<li style="list-style-type: none;"><u>Shade(n)</u> - area out of direct sunlight <span style="font-size:16px">그늘</span>
</li>

<li style="list-style-type: none;"><u>Neaten(v)</u> - to make something neat <span style="font-size:16px">정리[정돈]하다</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>The people should _____________ in the park at 7:00 am so we can start the rally early.
  </li>

  <li>Please ____________ the shelves.
  </li>

  <li>We will roast the marshmallows by the __________ tonight and watch the stars!
  </li>

  <li>We should wait by the __________ because the sun is too hot today.
  </li>

  <li>The school is just ____________ so I just walk to it every day.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What are they doing now?
</li>

<li>What is Tommy doing?
</li>

<li>How about Jay and Tory?
</li>

<li>What are Danny and Jesse doing?
</li>

<li>How about the girls?
</li>

<li>Are there under direct sunlight? Why or why not?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
<div style="padding : 16px;">
  <p>
    우리는 지금 소풍을 가고 있다. 그것은 매우 재미있고 흥미진진하다. 야영지를 둘러보면서 무슨 일이 일어나고 있는지 설명하겠다.
    대니와 제시는 텐트를 치고 있다. 토리는 점심으로 호박국과 주먹밥을 만들고 있다.
    제이가 키 큰 잔디를 깎고 주변을 치우려 할 때, 토미는 오늘 밤 모닥불을 피울 나무를 모으고 있다.
    근처에 폭포 소리가 들린다. 그것은 매우 크지는 않지만 매우 아름다워 보인다. 태양은 밝게 빛나지만 나무는 우리에게 시원한 그늘을 준다. 여자애들 몇 명이 구석에 앉아서 이야기만 하고 있다. 몇몇 여자아이들은 물품과 우리의 물건들을 정리한다. 이제 잡담은 그만하고 그냥 도와야 할 것 같다.
  </p>
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
