<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
   <div style="padding : 16px;">

<h3 style="padding-top: 7px;
                           margin-left: -18px;
                           margin-right: -18px;
                           padding-left: 10px;
                           padding-bottom: 10px;
                           padding-top: 15px;
                           margin-top: 40px;
                           background-color: #a7d7c5;">Tips</h3>
<div style="padding : 16px;">


<p>Gemstones are thought to bring good luck. Which do you want to have? To whom do you want to give these to?
</p>

<p>
Would is the past tense of will.  However, it can also be used to express a desire or a wish.
</p>

<li style="list-style-type: none;">Ex. I would like to give you a present.
</li>

<li style="list-style-type: none;">It means the same with 'I want to give you a present.
</li>

</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
  Gemstones are thought to bring good luck. Which do you want to have? To whom do you want to give these to?
</p>


<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="https://marketplace.canva.com/MADGx1lOlcI/4/screen/canva-ring-on-white-surface-MADGx1lOlcI.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Amethyst
                                    <li style="list-style-type: none;">Relieves stress and depression; Promotes peace
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="//live.staticflickr.com/6025/5960175226_79e7c0ee68_k.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Turquoise
                                    <li style="list-style-type: none;">Attracts friendships, luck, and happiness; releases shame and guilt
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="//live.staticflickr.com/3280/2933084852_fa1cae829b.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Aventurine
                                    <li style="list-style-type: none;">Good luck in financial matters
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="//live.staticflickr.com/2266/2505030324_7bbc80053b_h.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Jade
                                    <li style="list-style-type: none;">Peace, harmony, and wisdom
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="//live.staticflickr.com/3844/14881258173_9d379be701_k.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Aquamarine
                                    <li style="list-style-type: none;">Courage, decreases anxiety, and fear
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="//live.staticflickr.com/6120/6418402303_195501cbd2_k.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Citrine
                                    <li style="list-style-type: none;">Promotes patience and optimism; good for business
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="//live.staticflickr.com/65535/47605213602_18f42753a9_k.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Ruby
                                    <li style="list-style-type: none;">Protection from misfortune and bad health; promotes love
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>

<v-container>
  <v-layout wrap align-content-center>

                        <v-flex xs12 md12 >
                            <v-card hover>

                                <v-card-media src="//live.staticflickr.com/5561/14740491878_9d05eb21eb_k.jpg">
                                </v-card-media>

                                <v-card-text>
                                    Topaz
                                    <li style="list-style-type: none;">Calms bad temper; gives strength, focus, and confidence
                                    </li>
                                </v-card-text>
                            </v-card>
                        </v-flex>

  </v-layout>
</v-container>





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
          name:'M :',
          speech:"Wait! Stop! Don't go in there!"
        },
        {
          name:'F :',
          speech:"Why? What's wrong?"
        },
        {
          name:'M :',
          speech:"Look! A black cat is crossing. It will surely be bad luck to cross its path!"
        },
        {
          name:'F :',
          speech:"Hahaha! You're funny! How can you actually believe such things?"
        },
        {
          name:'M :',
          speech:"Well, if superstitious beliefs are not real, it's okay. But if they are real, I will have a very bad day! It's safer to just follow them."
        },
        {
          name:'F :',
          speech:"So this means we have to use the other street right? The black cat already crossed this one."
        },
        {
          name:'M :',
          speech:"That's right!"
        },
        {
          name:'F :',
          speech:"Well, it will be bad luck enough if we are late for work. There's only 5 minutes left and our office is still on the other side!"
        },
        {
          name:'M :',
          speech:"Oh! Let's cross our fingers!"
        },
      ],
       dialogs2:[
        {
          name:'F :',
          speech:"I do not like superstitions. They just make me worry. I am afraid of not doing them for the fear of bad luck!"
        },
        {
          name:'M :',
          speech:"Maybe superstitions aren't really true, you know. People just made up these things to make sense of what they cannot explain. My sister even keeps a black cat as a pet and she's just fine!"
        },
        {
          name:'F :',
          speech:"Right! Maybe I really shouldn't follow every superstition I know."
        },
        {
          name:'M :',
          speech:"However, it's interesting to just take note of these beliefs. They reflect our people and culture."
        },
       ],
       translations:[
        {
          name:'M :',
          speech:"잠깐! 거기 가지 마!"
        },
        {
          name:'F :',
          speech:"왜? 왜 그래?"
        },
        {
          name:'M :',
          speech:"봐! 검은 고양이가 건너고 있어. 그 길을 건너는 것은 분명 불운일 거야!"
        },
        {
          name:'F :',
          speech:"하하하! 너 웃겨! 어떻게 그런 것들을 실제로 믿을 수 있어?"
        },
        {
          name:'M :',
          speech:"음, 미신적인 믿음이 진짜가 아니라면, 괜찮아. 하지만 만약 그것들이 진짜라면, 나는 매우 나쁜 하루를 보낼 거야! 그 말을 따라가는 게 더 안전해."
        },
        {
          name:'F :',
          speech:"그럼 다른 길을 이용해야 한다는 뜻이지? 검은 고양이는 이미 이 길을 건넜어."
        },
        {
          name:'M :',
          speech:"맞아!"
        },
        {
          name:'F :',
          speech:"글쎄, 우리가 직장에 늦는다면 충분히 운이 나쁠 거야. 5분밖에 안 남았는데 우리 사무실은 아직 반대편에 있어!"
        },
        {
          name:'M :',
          speech:"오! 행운을 빌자!"
        },
       ],
       translations1:[
        {
          name:'F :',
          speech:"난 미신을 좋아하지 않아. 그들은 나를 걱정하게 만들 뿐이야. 나는 불운을 두려워해서 그것들을 하지 않는 것이 두려워!"
        },
        {
          name:'M :',
          speech:"미신은 정말 사실이 아닐 수도 있어. 사람들은 단지 설명할 수 없는 것을 이해하기 위해 이런 것들을 만들어. 내 여동생은 심지어 검은 고양이를 반려동물로 기르기도 하고, 그녀는 아주 건강해!"
        },
        {
          name:'F :',
          speech:"맞아! 어쩌면 내가 알고 있는 모든 미신을 따라 해서는 안 될지도 몰라."
        },
        {
          name:'M :',
          speech:"하지만, 이런 믿음들을 그냥 참고하는 것은 흥미로워. 그것들은 우리 민족과 문화를 반영해."
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


body{

  font-size: 16px;
}

</style>
