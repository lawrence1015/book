<template>
<div :style="{fontSize: fontSize + 'px'}">

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
                        Using "Prepositions of Place"
                    </p>
                    <p>
                        Prepositions of Place are words that are used to indicate location. See the examples
                    </p>



                    <v-container>
                        <v-layout wrap align-content-center>

                            <v-flex xs12 justify-md8-center>
                                <v-card hover>

                                    <v-img src="images/prep.png" />
                                    <v-card-text>
                                        Familiarize yourself with the prepositions by making a simple sentence for each.
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
