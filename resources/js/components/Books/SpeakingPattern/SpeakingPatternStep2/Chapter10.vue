 <template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/group-friends-eating-restaurant_23-2148006646.jpg">

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
    border-radius: 30px;" class="black--text">~할 필요 없어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 30 |  </h2>
                  <br />
                  <h3>There’s no need to….</h3>
                    <br />
                    <p>
                    “고마워할 거 없어.” 처럼 ‘~할 거 없어’, ‘~할 필요 없어’라고 말할 때 쓰는 표현이다. There’s no need to.. (~할 이유 없어)도 자주 사용되니 함께 알아두자.
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
            A : I forgot my wallet!<br />
            B : Calm down. <b>허둥지둥할 거 없어.</b><br />
            A : But the waiter brought the bill.<br />
            B : Don’t worry. I can cover it this time.
          </p>
          <p style="line-height: 2;">
            A : 나 지갑 놔두고 왔어!<br />
            B : 진정해. <mark style="background-color: #a7d7c5; color: #d9e7cd;">There’s no need to panic.</mark><br />
            A : 하지만 종업원이 계산서를 가져왔잖아.<br />
            B : 걱정 마. 내가 이번에는 네 것까지 낼 수 있어.<br />
            *calm down 흥분을 가라 앉히다. 진정하다.
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
          <b>233</b> 긴장할 필요 없어. ( nervous ) <br />
        </p>
        <p>
          <b>234</b> 허둥지둥할 거 없어. ( panic ) <br />
        </p>
        <p>
          <b>235</b> 나한테 고마워할 거 없어. ( thank ) <br />
        </p>
        <p>
          <b>236</b> 줄리에 대해 걱정할 필요 없어. ( worry ) <br />
        </p>
        <p>
          <b>237</b> 사과할 거 없어. ( apologize ) <br />
        </p>
        <p>
          <b>238</b>  <br />
        </p>
        <p>
          <b>239</b>  <br />
        </p>
        <p>
          <b>240</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              233 There’s no need to be nervous.<br />
              234 There’s no need to panic.<br />
              235 There’s no need to thank me.<br />
              236 There’s no need to worry about Julie.<br />
              237 There’s no need to apologize.<br />
              238 <br />
              239 <br />
              240 <br />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>

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
