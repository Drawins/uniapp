<template>
    <div>
        <v-app-bar color="teal">
            <v-app-bar-title>Mandela University</v-app-bar-title>

            <v-spacer></v-spacer>
            <div>
                <v-btn to="/" color="white"  dark >Home</v-btn>
            </div>
            <div>
                <v-btn to="/about" color="white" dark > About</v-btn>
            </div>
            <div>
                <v-btn to="/login" color="white" dark > Log In</v-btn>
            </div>
            <div>
                <v-btn to="/signup" color="white" dark > Sign Up</v-btn>
            </div>
            <div>
                <v-btn to="/register" color="white" dark > Register</v-btn>
            </div>
            <div>
                <v-btn to="students" color="white" dark > Students</v-btn>
            </div>
        </v-app-bar>
    </div>
</template>