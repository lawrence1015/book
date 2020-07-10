<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
   <div style="padding : 16px;">


<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://live.staticflickr.com/4020/4279449039_56a8a095e7_b.jpg"></v-img>
</div>


<h3  style="padding-top: 7px; 
            margin-left: -18px; 
            margin-right: -18px; 
            padding-left: 10px; 
            margin-top: 10px; 
            padding-bottom: 10px; 
            margin-bottom: 12px;  
            padding-top: 10px; background-color: #a7d7c5;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span>
</h3>

<div style="padding : 16px;">

<p>What if you can travel through time but cannot control when to use it? This is Henry DeTamble's dilemma in the internationally acclaimed novel “The Time Traveler’s Wife.” He has a genetic disease that causes him to travel in time without his control. His wife has to endure his frequent absences which when happens mean he is thrust into the past or the future. Through all these, they have to strive to make their relationship work and prove their love to each other.  This novel was written   by Audrey Niffenegger in 2003 and was made into a film in 2009.
</p>


</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Dilemma(n)</u> - problem <span style="font-size:16px">딜레마</span>
</li>

<li style="list-style-type: none;"><u>Acclaimed(adj)</u> -  received with praises <span style="font-size:16px">칭찬을 받고 있는</span>
</li>

<li style="list-style-type: none;"><u>Genetic(adj)</u> -  passed on through families <span style="font-size:16px">유전의; 유전학의</span>
</li>

<li style="list-style-type: none;"><u>Endure(v)</u> -  to experience hardships without giving up <span style="font-size:16px">견디다, 참다, 인내하다</span>
</li>

<li style="list-style-type: none;"><u>Strive(v)</u> - to try hard <span style="font-size:16px">분투하다</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Like my mother, I also have blue eyes. It is __________.
  </li>

  <li>I cannot __________ this hear anymore! It is too hot!
  </li>

  <li>You must __________ to get good grades.
  </li>

  <li>The __________ athlete was applauded by many people.
  </li>

  <li>My biggest __________ right now is how to find a high-paying job.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What was Henry De Tamble’s dilemma?
</li>

<li>Who is he?
</li>

<li>What does his wife have to endure?
</li>

<li>What do they have to strive to do?
</li>

<li>What was the title of the novel and who wrote it?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;">
  <p>만약 당신이 시간을 여행할 수는 있지만 언제 그것을 사용할지 조절할 수 없다면? 국제적으로 호평을 받은 소설 '시간 여행자의 아내'의 헨리 드탬블의 딜레마다. 그는 통제할 수 없이 시간 여행을 하게 하는 유전병이 있다. 그의 아내는 그가 자주 없는 것을 견뎌야 하는데, 그것은 그가 과거나 미래를 향해 돌진하는 것을 의미한다. 이 모든 것을 통해, 그들은 그들의 관계가 잘 풀리고 서로에 대한 사랑을 증명하기 위해 노력해야 한다. 이 소설은 2003년 오드리 니프제네거에 의해 쓰여졌고 2009년에 영화로 만들어졌다.</p>
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
          speech:"I am greatly inspired by Mother Teresa. Too bad I cannot meet her anymore."
        },
        {
          name:'F :',
          speech:"Yes you can... if you can travel through time!"
        },
        {
          name:'M :',
          speech:"Oh that's impossible! That's only in the movies and books."
        },
        {
          name:'F :',
          speech:"Who knows? People way back thought that flying was impossible. Now we know we can ride airplanes to other countries in a matter of hours!"
        },
        {
          name:'M :',
          speech:"Oh well. It is still far from reality though."
        },
        {
          name:'F :',
          speech:"Anyway, why do you want to meet Mother Teresa?"
        },
        {
          name:'M :',
          speech:"I want to hear her wise words. I want to be inspired to help others."
        },
        {
          name:'F :',
          speech:"Then you can also read her books. That will also be like talking to her and time travelling."
        },
      ],
      dialogs2:[
        {
          name:'M :',
          speech:"Would you rather go into the past or the future?"
        },
        {
          name:'F :',
          speech:"I would say… the past! I want to change something about my past!"
        },
        {
          name:'M :',
          speech:"Really? What is it?"
        },
        {
          name:'F :',
          speech:"I wish I gave more attention to my family and grades. How about you?"
        },
        {
          name:'M :',
          speech:"I want to travel to the future!"
        },
        {
          name:'F :',
          speech:"Why?"
        },
        {
          name:'M :',
          speech:"So I will know what will be on our test tomorrow then I can go back and study about it!"
        },
        {
          name:'F :',
          speech:"Hey that's bad!"
        },
      ],
      translations:[
        {
          name:'M :',
          speech:"테레사 수녀에게 큰 영감을 받았어. 그녀를 더 이상 만날 수 없어서 아쉬워."
        },
        {
          name:'F :',
          speech:"그래, 할 수 있어... 만약 당신이 시간을 여행할 수 있다면!"
        },
        {
          name:'M :',
          speech:"그건 불가능해! 그건 영화와 책에나 나오는 얘기야."
        },
        {
          name:'F :',
          speech:"누가 알겠어? 옛날 사람들은 비행이 불가능하다고 생각했어. 이제 우리는 비행기를 타고 몇 시간 안에 다른 나라로 갈 수 있다는 것을 알고 있어!"
        },
        {
          name:'M :',
          speech:"오, 그래. 하지만 아직 현실과는 거리가 멀어."
        },
        {
          name:'F :',
          speech:"어쨌든, 왜 테레사 수녀를 만나고 싶어?"
        },
        {
          name:'M :',
          speech:"나는 그녀의 현명한 말을 듣고 싶어. 나는 다른 사람들을 돕기 위해 영감을 받고 싶어."
        },
        {
          name:'F :',
          speech:"그러면  너는 그녀의 책을 읽을 수 있을 거야. 그것은 또한 그녀와 대화하고 시간을 여행하는 것과 같을 거야."
        },
      ],
      translations1:[
        {
          name:'M :',
          speech:"과거로 가는 게 좋을까, 미래로 가는 게 좋을까?"
        },
        {
          name:'F :',
          speech:"과거라고 말할 수 있어! 내 과거에 대해 뭔가 바꾸고 싶어!"
        },
        {
          name:'M :',
          speech:"그래? 뭔데?"
        },
        {
          name:'F :',
          speech:"가족과 성적에 더 많은 관심을 가졌으면 좋겠어. 너는 어때?"
        },
        {
          name:'M :',
          speech:"난 미래를 여행하고 싶어!"
        },
        {
          name:'F :',
          speech:"왜?"
        },
        {
          name:'M :',
          speech:"그래서 나는 내일 우리 시험에서 무엇이 나올지 알 거야. 그러면 난 돌아가서 그것에 대해 공부할 수 있을 거야!"
        },
        {
          name:'F :',
          speech:"야, 그건 나빠!"
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
