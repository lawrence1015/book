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
           background-color: #a7d7c5;">Enhance!</h3>

<div style="padding : 16px;">


<p>
 The following pictures show the comparison between Eastern and Western culture. What do you think the pictures mean?
</p>

<li style="list-style-type: none;">Red= Asians/Easterners
</li>
<li style="list-style-type: none;">Blue= Westerners
</li>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>


                          <v-img src="images/family.jpg" />

                               <v-card-text>
                                 Friends/Family
                               </v-card-text>

                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-img src="images/opinions.jpg" />

                               <v-card-text>
                                 Expressing Opinions
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-img src="images/boss.jpg" />

                               <v-card-text>
                                 The Boss
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-img src="images/conversation.jpg" />

                               <v-card-text>
                                 Conversation
                               </v-card-text>
                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-img src="images/time.jpg" />

                               <v-card-text>
                                 Time
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
          speech:"There are certain places where you would certainly not want to be a woman!"
        },
        {
          name:'F :',
          speech:"What makes you say that?"
        },
        {
          name:'M :',
          speech:"Have you heard about the foot binding tradition in China?"
        },
        {
          name:'F :',
          speech:"Aha! I certainly have. The foot of a female child is bound so it will remain small even when she grows up. They con­sider small feet beautiful."
        },
        {
          name:'M :',
          speech:"Very good! I also heard about a tribe in Indonesia where women have to cut their fingers when a family member dies."
        },
        {
          name:'F :',
          speech:"What a shock! Why do they do that?"
        },
        {
          name:'M :',
          speech:"Well they believe it appeases the souls of the dead."
        },    
        ],
        dialogs2:[
        {
          name:'F :',
          speech:"Culture certainly affects the type of wedding tradition a country has. Have you ever heard about Polterabend?"
        },
        {
          name:'M :',
          speech:"Hmmm ... Yes, I think I have. Is it a German tradition?"
        },
        {
          name:'F :',
          speech:"Yes, it is! During the wedding reception, the family has to break pots, vases, dishes and toilets. The husband and wife are required to clean up the mess afterwards."
        },
        {
          name:'M :',
          speech:"Haha! I remember. It signifies that they will work together in their marriage. Are you aware about Blackening the Bride in Scotland?"
        },
        {
          name:'F :',
          speech:"Well ... do they paint the bride black?"
        },
        {
          name:'M :',
          speech:"Kind of. They actually pour dirty things on her like eggs, spoiled milk and parade her around the town. After such embarrassment, all the difficulties of marriage will be easy for the wife."
        },
        ],
        translations:[
        {
          name:'M :',
          speech:"확실히 여자가 되고 싶지 않은 곳이 있어!"
        },
        {
          name:'F :',
          speech:"왜 그런 말을 해?"
        },
        {
          name:'M :',
          speech:"중국의 발을 묶는 전통에 대해 들어본 적 있니?"
        },
        {
          name:'F :',
          speech:"아하! 확실히 그랬어. 여자아이의 발은 묶여서 자랄 때도 작을 거야. 그들은 작은 발을 아름답게 여겨."
        },
        {
          name:'M :',
          speech:"아주 좋아! 인도네시아의 한 부족에서 가족이 죽으면 여자들이 손가락을 잘라야 한다는 이야기도 들었어."
        },
        {
          name:'F :',
          speech:"정말 충격이야! 그들은 왜 그런 것을 했지?"
        },
        {
          name:'M :',
          speech:"음, 그들은 그것이 죽은 사람들의 영혼을 달래준다고 믿고 있어."
        },
        ],
        translations1:[
        {
          name:'F :',
          speech:"문화는 한 나라가 가지고 있는 결혼 전통의 유형에 확실히 영향을 줘. 폴터 라벤더에 대해 들어본 적 있니?"
        },
        {
          name:'M :',
          speech:"음... 응, 그런 것 같아. 독일의 전통인가?"
        },
        {
          name:'F :',
          speech:"그래, 그렇지! 결혼식 피로연 동안, 가족들은 냄비, 꽃병, 접시, 화장실을 부숴야만 해. 남편과 아내는 그 뒤 난장판을 치워야 해."
        },
        {
          name:'M :',
          speech:"하하! 기억 나. 두 사람이 결혼 생활에서 함께 일하겠다는 의미지. 스코틀랜드에서 신부 블랙닝에 대해 알고 있니?"
        },
        {
          name:'F :',
          speech:"음... 그들은 신부를 검은색으로 칠하니?"
        },
        {
          name:'M :',
          speech:"비슷해. 그들은 실제로 신부에게 달걀처럼 더러운 것들을 붓고, 상한 우유를 붓고, 시내를 돌아다니며 퍼레이드를 해. 그렇게 곤란한 후에야 결혼의 모든 어려움은 아내에게 쉽게 풀릴 거야."
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

body{

 font-size: 16px;
}

</style>
