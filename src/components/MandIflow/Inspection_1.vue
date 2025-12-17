<script>
import HeaderBar from '../HeaderBar.vue';
import '@/assets/screen_style.css';
export default {
    name: "Digital Checklist",
    components:{HeaderBar},
    data(){
        return{
            selectedItem:{
                name:"Inspection",
                image: "/Images_M&I/inspection_1.jpg",
            },
        };
    },

    methods: {
        speak(text) {
            const msg = new SpeechSynthesisUtterance(text);
            msg.lang = "en-US";
            msg.rate = 1;
            msg.pitch = 1;
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(msg);
        },
        handleMenuAction(action) {
        if (action === "signoff") this.$router.push("/");
        },
        confirmSelection() {
            this.$router.push("/externalDamage1");            
        },
    },
    mounted() {
        this.speak(`Inspection for Araba modeli XV3`);
    },
    
}
 
</script>


<template>
    <div class="screen">
        <HeaderBar @menu-action="handleMenuAction" />

        <div class="card">
            <div class="image">
                <img :src="selectedItem.image" alt="Inspection" />
            </div>
        </div>

        <footer class="footer">
            <h3 class="title">Inspection for</h3>
            <h1 class="code">Araba modeli XV3</h1>
            <button class="ready-btn" @click="confirmSelection">READY</button>
            <p>Hint : Speak Ready to Proceed</p>
        </footer>
    </div>
</template>
