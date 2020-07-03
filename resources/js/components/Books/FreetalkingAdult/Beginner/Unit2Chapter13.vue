<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>

      <div style="padding : 16px;">
    

<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://marketplace.canva.com/MADGyfjt8bc/4/screen_2x/canva-grayscale-photo-of-man-sitting-near-closed-window-MADGyfjt8bc.jpg"></v-img>
</div>


<h3  style="padding-top: 7px; margin-left: -18px; margin-right: -18px; padding-left: 10px; margin-top: 10px; padding-bottom: 10px; margin-bottom: 12px;  padding-top: 10px; background-color: #a7d7c5;">Reading Practice <span style="font-size:18px"> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</span>
</h3>

<div style="padding : 16px;">

<p>Ten years from now, I will be living in my own townhouse with a swimming pool and a pretty little garden of daisies and vegetables. I will be able to afford to treat my family and friends in fancy restaurants. By that time, I will have a child, maybe a daughter whom I will name Sunny. I can stay home all day, lounging at the couch and reading wonderful books. I will be a phenomenal writer at that time and my quota of five books per year will be effortless. As for now, I should endure my dreary job as a newspaper writer.
</p>




</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Afford(v)</u> - be able to buy something <span style="font-size:16px">여유[형편]가 되다, 제공하다</span>
</li>

<li style="list-style-type: none;"><u>Fancy(adj)</u> - expensive <span style="font-size:16px">(생활 방식 등이) 값비싼[고급의]</span>
</li>

<li style="list-style-type: none;"><u>Lounge(v)</u> - lie or sit lazily <span style="font-size:16px">느긋하게 서[앉아/누워] 있다</span>
</li>

<li style="list-style-type: none;"><u>Phenomenal(adj)</u> -  remarkable and impressive <span style="font-size:16px">경이적인, 경탄스러운</span>
</li>

<li style="list-style-type: none;"><u>Quota(n)</u> - a share of something that a person should give or receive <span style="font-size:16px">한도[할당], 몫[할당량]</span>
</li>

<li style="list-style-type: none;"><u>Dreary(adj)</u> - gloomy; unexciting <span style="font-size:16px">음울한; 따분한</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>This dining set is very ____________! I don’t think I have enough money to buy it!
  </li>

  <li>I usually spend my weekends just __________ at the sofa or bed.
  </li>

  <li>Psy received ____________ success with his international hit song.
  </li>

  <li>Today was such a _________ day. Nothing special really happened.
  </li>

  <li>Although many people can ___________ this product,  it has surprisingly  very good quality'
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What will she own ten years from now?
</li>

<li>What will she be able to afford?
</li>

<li>What will she name her daughter?
</li>

<li>What will she do all day?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;">
  <p>
    지금부터 10년 후, 나는 수영장과 데이지와 야채가 있는 예쁜 작은 정원이 있는 나만의 타운하우스에서 살게 될 것이다. 나는 고급 레스토랑에서 가족과 친구들을 대접할 여유가 있을 것이다. 그때쯤이면, 나는 아이를 가질 것이고, 아마도 내가 써니라고 이름지을 딸도 생길 것이다. 나는 하루 종일 집에서 소파에 느긋하게 앉아 멋진 책들을 읽을 수 있다. 나는 그때 경이로운 작가가 될 것이고 연간 5권의 책을 쓰는 것은 힘들이지 않을 것이다. 지금으로서는 신문기자라는 음울한 일을 견뎌야 한다.
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
          speech:"What do you think will happen 50 years from now?"
        },
        {
          name:'M :',
          speech:"We will be old of course!"
        },
        {
          name:'F :',
          speech:"Well, that is pretty obvious! How about your plans? Or the world in general?"
        },
        {
          name:'M :',
          speech:"I just want to retire at that time.  Probably, I will be living in Jeju Island in a nice house near the sea."
        },
        {
          name:'F :',
          speech:"That sounds nice!"
        },
        {
          name:'M :',
          speech:"I think at that time, technology will be very advanced."
        },
        {
          name:'F :',
          speech:"Hmm ... Good point! Like what, for example?"
        },
        {
          name:'M :',
          speech:"I think we will have flying cars, very thin phones and chips embedded in our skin so we don't have to carry money around."
        },
        {
          name:'F :',
          speech:"What an imagination you have!"
        },
      ],
      translations:[
        {
          name:'F :',
          speech:"앞으로 50년 후에는 어떻게 될 것 같아?"
        },
        {
          name:'M :',
          speech:"우리는 당연히 늙을 거야!"
        },
        {
          name:'F :',
          speech:"음, 그건 아주 뻔해! 너의 계획은 어떠니? 아니면 세상은 어떨까?"
        },
        {
          name:'M :',
          speech:"난 그냥 그 시간에 은퇴하고 싶어. 아마 나는 제주도에 바다 근처에 있는 멋진 집에서 살고 있을 거야."
        },
        {
          name:'F :',
          speech:"그거 좋은 생각이야!"
        },
        {
          name:'M :',
          speech:"그 때는 기술이 매우 발달할 것 같아."
        },
        {
          name:'F :',
          speech:"음... 좋은 지적이야! 가령, 예를 들면?"
        },
        {
          name:'M :',
          speech:"나는 하늘을 나는 자동차, 우리가 돈을 가지고 다닐 필요 없이 아주 얇은 전화기, 칩을 피부에 박아 둘 것이라고 생각해."
        },
        {
          name:'F :',
          speech:"정말 상상력이 대단하구나!"
        },
      ]


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
