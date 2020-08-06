<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="//live.staticflickr.com/8284/7559815244_5b8890cf4a_k.jpg">

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
        padding-bottom: 10px;">Inspiring People</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>Walt Disney will remain as one of the most popular and inspiring people to ever live in this world. He is best known as an American director, producer and animator. Before he became highly successful, he was first a boy in a poor family of four brothers and one sister. Throughout his life, he continued to keep and develop his interest in drawing and performing.  He met many failures in his life. He had been rejected several times when he was still starting out.  In the end, because of his persistence, he had given the world the gift of animation, optimism and imagination. Disney's life will always serve as a story of inspiration.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Reject(v)</u> -  to turn down; to not accept <span class = "korean">거부[거절]하다, 거부하다[불합격시키다]</span>
</li>

<li style="list-style-type: none;"><u>Persistence(n)</u> -   to continue despite hardships <span class = "korean">고집, 지속됨</span>
</li>

<li style="list-style-type: none;"><u>Optimism(n)</u> -  positive thinking <span class = "korean">낙관론, 낙관[낙천]주의</span>
</li>

<li style="list-style-type: none;"><u>Inspiration(n)</u> -   something that provides motivation <span class = "korean">영감, 영감[자극]을 주는 사람[것]</span>
</li>

<li style="list-style-type: none;"><u>Inspiring(adj)</u> - giving inspiration <span class = "korean">고무[격려/자극]하는</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Stories of failures which turned into success are always _____________.
  </li>

  <li>The teacher will _____________ the presentation if it is not good enough.
  </li>

  <li>Do not give up on your dreams. Have some ______________.
  </li>

  <li>With ______________ you   will learn to see the good side of everything.
  </li>

  <li>My family is my _____________ to succeed.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>Who is Walt Disney?
</li>

<li>Who was he before he became successful?
</li>

<li>What did he do throughout his life?
</li>

<li>What did he do when he was rejected?
</li>

<li>What is Disney’s gift to the world?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;" class = "korean">

  <p>월트 디즈니는 세상에서 가장 인기 있고 영감을 주는 사람들 중 하나로 남을 것이다. 그는 미국의 감독, 프로듀서, 애니메이터로 가장 잘 알려져 있다. 그가 크게 성공하기 전에, 그는 처음에는 4남 1녀의 가난한 집안의 소년이었다. 그는 일생 동안 계속해서 그림 그리기와 공연에 대한 관심을 유지하고 발전시켰다. 그는 인생에서 많은 실패를 만났다. 그는막 시작했을 때 몇 번이나 거절당한 적이 있었다. 결국 그의 끈기 때문에 그는 세상에 애니메이션, 낙관, 상상력의 선물을 주었다. 디즈니의 삶은 언제나 영감의 이야기로 작용할 것이다.
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
