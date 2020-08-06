<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/close-up-careful-doctors-helping-injured-cat_23-2148302217.jpg" style="max-width: 100%; display:block; height: auto;">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <transition name="slide-fade">
        <h1 v-if="showTitle" style="background-color: rgb(139, 84, 63, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Should Companies Use Animals To Test New Products?
      </h1>
      </transition>
    </v-layout>
  </v-img>

  <div style=" border-color: #2F4674; border-style: solid; border-width: 2px;">
  </div>

  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Topic</h3>
  <div style = "padding : 16px; line-height: 1.6;">

    <table style = "border-collapse: collapse;">

    <tr>
      <td class = "uppertable" ><b>A :</b></td>
      <td class = "lowertable" >Thanks to vaccines, many people survive chicken pox, Rabies, and smallpox.
      Without animal testing, we wouldn't have safe medication. We shouldn't test new products on humans.
      If using animals to test products is wrong, then we should also stop eating meat.</td>
    </tr>
    <tr style="color:#1565C0;">
      <td class = "uppertable" ><b>B :</b></td>
      <td class = "lowertable" >Meat is part of a balanced diet. But animal testing causes pain intentionally to animals.
      They should be free in the wild, not in a laboratory.
      Plus, results of animal testing don't always apply to humans, because humans and animals are different.</td>
    </tr>

    </table>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #2F4674; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text"
          style="border-radius: 0px 0px 70px 0px;
                 padding-top: 7px;
                 margin-left: -18px;
                 margin-right: -18px;
                 padding-left: 10px;
                 padding-bottom: 10px;
                 padding-top: 0px;
                 margin-top: 0px;">Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>survive</b> 살아남다
        </p>
        <p>
          <b>chicken pox</b> 수두
        </p>
        <p>
          <b>rabies</b> 광견병
        </p>
        <p>
          <b>smallpox</b> 천연두
        </p>
        <p>
          <b>withou</b>t ~ 없이
        </p>
        <p>
          <b>medication</b> 약
        </p>
        <p>
          <b>diet</b> 식사
        </p>
        <p>
          <b>intentionally</b> 고의로 
        </p>
        <p>
          <b>laboratory</b> 실험실
        </p>
        <p>
          <b>apply</b> 적합하다.
        </p>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #2F4674; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text"
          style="border-radius: 0px 0px 70px 0px;
                 padding-top: 7px;
                 margin-left: -18px;
                 margin-right: -18px;
                 padding-left: 10px;
                 padding-bottom: 10px;
                 padding-top: 0px;           
                 margin-top: 0px;
                 width: 100px;">해석</h3>
      <div style="padding : 16px;">

                      <p class = "korean">
                        <b>
                        해석 회사들은 새 상품을 시험하기 위해 동물들을 사용해야만 할까?
                        </b>
                      </p>

                      <table style = "border-collapse: collapse;">

                       <tr>
                        <td class = "uppertable" ><b>A :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >백신 덕분에, 많은 사람들이 수두, 광견병, 천연두에서 살아 남았습니다.
                          동물 실험이 없었다면, 우리는 안전한 약을 가질 수 없었을 것입니다.
                          우리는 인간에게 새로운 제품을 시험해서는 안됩니다.
                          만약 제품을 시험하기 위해 동물을 사용하는 것이 잘못되었다면, 우리는 또한 고기를 먹는 것을 멈춰야 합니다.</td>
                      </tr>
                      <tr style="color:#1565C0;">
                        <td class = "uppertable" ><b>B :</b></td>
                        <td class = "lowertable" style = "word-break: keep-all" >고기는 균형 잡힌 식단의 일부입니다.
                          하지만 동물 실험은 의도적으로 동물들에게 고통을 유발합니다.
                          그들은 실험실이 아니라 야생에서 자유로워야 합니다.
                          게다가, 인간과 동물이 다르기 때문에 동물 실험의 결과가 항상 인간에게 적용되는 것은 아닙니다.</td>
                      </tr>

                    
                      </table>

      


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
      showTitle:false


    }

  },

mounted(){
  this.showTitle=true
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

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}


body{

  font-size: 16px;
}


.border {
  position: relative;
  left: 0px;
  width: 255px;
  height: 40px;
  background: #2F4674;
  padding-left: 10px;

}
.profile {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top : 330px;
  padding-left : 10px;
  padding-bottom: 10px;
}
.uppertable {
  border: 0px solid #dddddd;
  text-align: left; padding: 8px;
  vertical-align:top;
  width: 0%;
  white-space: nowrap;
}

.lowertable {
border: 0px solid #dddddd;
text-align: left;
padding: 8px;
}

.normaltext {
  font-weight: normal;
}

.replace {
  counter-reset: list;
}
.replace > li {
  list-style: none;
  position: relative;
}
.replace > li:before {
  content: counter(list, upper-alpha) ":";
  counter-increment: list;
  position: absolute;
  left: -1.4em;
}

.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


</style>
