<script>
import HeaderBar from '../HeaderBar.vue';
import '@/assets/screen_style.css';
export default {
    name: "Digital Checklist",
    components:{HeaderBar},
    data(){
        return{
            selectedItem:{
                name:"HeadLamps",
                image: "/Images_M&I/headLamps.jpg",
            },
            errorMessage : "",
            errorTimeout : null,
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
        confirmSelectionNo() {
            this.showError("Take a picture") 
            this.speak("Take a picture");          
        },
        confirmSelectionYes(){
            this.$router.push("/indicator");
        },
        showError(message){
            this.errorMessage = message;
            if (this.errorTimeout) clearTimeout(this.errorTimeout);
            this.errorTimeout = setTimeout(() => {
                this.errorMessage = "";
            }, 1500);
        },
    },
    mounted() {
        this.speak(`Headlamps okay`);
    },
    
}
 
</script>


<template>
    <div class="screen">
        <HeaderBar @menu-action="handleMenuAction" />
        <div class="model-title">
            <h3 class="title">1</h3>
            <h3 class="title">Araba modeli XV3</h3>
        </div>

        <div class="card">
            <div class="image">
                <img :src="selectedItem.image" alt="HeadLamps" />
            </div>
        </div>

        <footer class="footer">
            <h1 class="code">Headlamps Ok?</h1>            
            <p>Hint : Turn on Headlights and check if they work</p>
            <div class="input-wrapper">
                <Transition name="fade">
                    <div v-if="errorMessage" class="error-card">
                        {{ errorMessage }}
                    </div>
                </Transition>
            </div>
            <div class="buttons">
                <button class="yes-btn" @click="confirmSelectionYes">YES</button>
                <button class="no-btn" @click="confirmSelectionNo">NO</button>
            </div>
        </footer>
    </div>
</template>
