<script>

</script>
<template>

    <div id ='signup'>
        <v-container>
            <v-container>

            <v-layout column>
                <v-card 
                   class="mx-auto"
                   width="500"
                >
                <v-toolbar 
                   color="teal"
                   theme="dark"
                >
                   <v-toolbar-tittle class="text-h6">
                       User Registration
                    </v-toolbar-tittle>
                </v-toolbar>
                <v-container>
                    <v-text-field
                      v-modle="first"
                      color="teal"
                      label="First name"
                      variant="underline"
                    ></v-text-field>

                    <v-text-field
                      v-modle="last"
                      color="teal"
                      label="First name"
                      variant="underline"
                    ></v-text-field>

                    <v-text-field
                      v-modle="email"
                      color="teal"
                      label="First name"
                      variant="underline"
                    ></v-text-field>

                    <v-text-field
                      v-modle="phone"
                      color="teal"
                      label="First name"
                      variant="underline"
                      type="number"
                    ></v-text-field>

                    <v-text-field
                      v-modle="password"
                      color="teal"
                      label="First name"
                      placeholder="Enter your password"
                      variant="underline"
                      type="password"
                    ></v-text-field>

                    <v-checkbox
                       v-module="terms"
                       color="secondary"
                       label="I agree to site terms and conditions"
                    ></v-checkbox>
                </v-container>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="success">
                    Complete Registration
                    <v-icon icon="mdi-chevron-right" end></v-icon>
                   </v-btn>
                   </v-card-actions>
                  </v-card>
                 </v-layout>
             </v-container>
        </v-container>
    </div>
</template>
<script>
  export default {
   data: ()=>({
    first: null,
    last: null,
    email: null,
    password: null,
    phone: null,
    terms: null,
   }),
  }
</script>