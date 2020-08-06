<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/business-young-woman-looking-camera-office_1301-6547.jpg">

        <v-layout
        align-end
        fill-height
        pa-2
        white--text
      >
     <h1 style="margin:0 -30px 10px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 25px;
    background-color: rgba(255, 231, 255, 0.64);
    border:0px solid #9B4F95;
    -webkit-border-radius: 30px;
    border-radius: 30px;" class="black--text">전부터 ~를 알고 있었어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;" class = "korean">

                 <h2>Pattern 12 |  </h2>
                  <br />
                  <h3>I’ve known…</h3>
                    <br />
                    <p>
                    ~를 알았어. 처럼 과거에 알았던 것을 말할 때는 I knew…를 쓰면 되지만, 예전부터 어떤 사람이나 사실을 계속 알아왔다고 말할 때는 현재완료 형태인  I’ve known…을 사용한다.
                    </p>
                    <br />

<h2 style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #CB6ECB;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Dialogue
</h2>

<div style="padding-top : 10px; padding-bottom : 2px;">

          <br />
          <p style="line-height: 2;">
            A : Do you know Pam well?<br />
            B : Yeah, I do. <b>난 10년 전부터 그 여자를 알고 있었어.</b><br />
            A : Is she dependable?<br />
            B : She’s very dependable.
          </p>
          <p style="line-height: 2;">
            A : 너 Pam을 잘 알고 있어<br />
            B : 응. <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’ve known her for 10 years</mark><br />
            A : 그 여자 믿을 만한 사람이야?<br />
            B : 아주 믿을 만하지.
          </p>
          <br />


</div>

<h2  style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #CB6ECB;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Pattern Practice
</h2>

<div style="padding-top : 10px; padding-bottom : 0px;">

        <br />

        <p>
          &rarr; 우리말을 보고 순식간에 영어로 말할 수 있을 때까지 반복하세요!
        </p>
        <br />

        <p>
          <b>089</b> 난 10년 전부터 그 여자를 알고 있었어. ( her, for 10 years ) <br />
        </p>
        <p>
          <b>090</b> 나는 오랫동안 Phil을 알고 지냈어. ( for a long time ) <br />
        </p>
        <p>
          <b>091</b> 난 그 사람이 어렸을 때부터 알아왔어. ( since, kid ) <br />
        </p>
        <p>
          <b>092</b> 난 일주일 전부터 이걸 알고 있었지. ( about, for a week ) <br />
        </p>
        <p>
          <b>093</b> 난 전부터 괜찮은 남자들을 많이 알아왔어. ( many, nice ) <br />
        </p>
        <p>
          <b>094</b> 저는 그녀를 아주 오랫동안 알고 지냈어요.( great ) <br />
        </p>
        <p>
          <b>095</b> 저는 당신보다 그녀를 더 오래 알고 있었어요. ( longer ) <br />
        </p>
        <p>
          <b>096</b> 저는 그를 5살 때부터 쭉 알고 지냈어요. ( ever since ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              089 I’ve known her for 10 years.<br />
              090 I’ve known Phil for a long time.<br />
              091 I’ve known him since he was a kid.<br />
              092 I’ve known about this for a week.<br />
              093 I’ve known many nice men before.<br />
              094 I've known her for a great many years.<br />
              095 I've known her longer than you have.<br />
              096 I've known him ever since he was in 5.<br />
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
