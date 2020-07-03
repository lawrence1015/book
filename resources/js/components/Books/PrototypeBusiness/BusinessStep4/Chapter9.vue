<template>
<div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

        <v-layout column>
            <v-img src="https://marketplace.canva.com/MADQ4zRm32o/1/screen_2x/canva-phone-showing-results-for-analytics-search-on-google-MADQ4zRm32o.jpg">

                <v-layout align-end fill-height pa-0 white--text>
                    <h1 style="background-color: rgba(107, 190, 242, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Using the Internet (Website language)
                    </h1>
                </v-layout>
            </v-img>

            <div style=" border-color: #1A6DD9; border-style: solid; border-width: 2px;">
            </div>
            <h3 class="border white--text">Today's topic</h3>
            <div style="padding : 16px;">

                <p>
                    <li style="list-style-type: none;">Three people are talking about what they do on the Internet.</li>
                    <li style="list-style-type: none;">Person1</li>
                    <li style="list-style-type: none;">I think the best thing about the Internet is… the fact that you can find information so easily.
                        You know, you type a keyword into a search engine, and you get a huge list of websites.
                        The worst thing is the problem of viruses. You certainly need antivirus software.
                        And you’ve got to keep it up-to-date as well-keep downloading and installing updates.
                        But, it’s not too much trouble to find a…</li>
                    <li style="list-style-type: none;">Person2</li>
                    <li style="list-style-type: none;">It’s good that you can manage your bank accounts via the Internet. That saves a lot of time.
                        Once you’ve registered, you just… put in your password, log in and…
                        you’ve got access to all your accounts and everything… from home. It’s um… it’s good.
                        I think it took a long time before people were confident with um… secure servers, with the security side of it,
                        but now it’s… it’s just part of everyday life. It’s like paying by credit card online…</li>
                    <li style="list-style-type: none;">Person3</li>
                    <li style="list-style-type: none;">I’m a member of an investment website, which is part of a magazine. I pay ten pounds a month
                        and I get access to articles from the current issue and I can search for articles from previous issues as well.
                        They show current share prices, so you can follow your portfolio. Each time you just log in.
                        with a user name and a password and it automatically lists your shares, show the current price…</li>
                </p>

                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Exercise</h3>
                <div style="padding : 16px;">

                    <p>
                        Answer the questions.
                    </p>

                    <li style="list-style-type: none;">Person1 1 What does he like about the Internet?</li>
                    <li style="list-style-type: none; padding-left : 60px;">2 What’s the problem with using the Internet?</li>
                    <li style="list-style-type: none;">Person2 3 How does the Internet help save her time?</li>
                    <li style="list-style-type: none; padding-left : 60px;">4 What does she think about security online?</li>
                    <li style="list-style-type: none;">Person3 5 What sort of website does he talk about? </li>
                    <li style="list-style-type: none; padding-left : 60px;">6 What can you do at the website?</li>

                    <p>Talk about the Internet</p>

                    <p>
                        How often do you use the Internet?<br />
                        What do you use the Internet for?<br />
                        What websites do you visit most often?<br />
                        How has the Internet made life easier in the last ten years?
                    </p>

                </div>

                <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #1A6DD9; border-style: solid; border-width: 2px;">
                </div>
                <h3 class="border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #1A6DD9;">Self Study</h3>
                <div style="padding : 16px;">


                    <p>
                        Notes
                    </p>

                    <p>

                        <v-container grid-list-md text-xs-left>
                            <v-layout row wrap>


                                <v-flex xs12>
                                    <v-card light color="#2E97F2">
                                        <v-card-text class="px-10">
                                            <p>
                                                Useful language<br />
                                                To register at this, please enter your details on the form below.<br />
                                                To log in, enter your user name and password.<br />
                                                This section is only available to members.<br />
                                                Use the search engine to search for information using keywords.<br />
                                                If you have a question, see our frequently asked questions page.<br />
                                                Click here to download and install the software.
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>

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

    data() {

        return {


        }

    },


    beforeMount() {


    },

    methods: {


    },

    watch: {

        fontSize(current, old) {

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

li{


}

body{

  font-size: 16px;
}

.border:before {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 40px 40px 0px 0px;
  transform: rotate(180deg);
  border-color: transparent #1A6DD9 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #1A6DD9;
  padding-left: 10px;

}
.profile {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top : 330px;
  padding-left : 10px;
  padding-bottom: 10px;
}


</style>
