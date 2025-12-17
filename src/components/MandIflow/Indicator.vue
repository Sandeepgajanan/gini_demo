<script>
    import HeaderBar from "../HeaderBar.vue";
    import '@/assets/screen_style.css';
    export default{
        name: "Digital Checking",
        components:{HeaderBar},
        data(){
            return{
                selectedItem : {
                    name:"Indicator",
                    image: "/Images_M&I/indicator.jpg",
                },
                errorMessage : "",
                errorTimeout : null,
            }
        },
        methods:{
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
            confirmSelectionYes(){
                this.$router.push("/flatTire");
            },
            confirmSelectionNo(){
                this.showError("Take a picture");
                this.speak("Take a picture"); 
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
        this.speak(`Indicator Check`);
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
                <img :src="selectedItem.image" alt="Indicator" />
            </div>
        </div>

        <footer class="footer">
            <h3 class="code">Indicator Check</h3>
            <p>Hint : Check if both indicators are working</p>
            <div class="input-wrapper">
                <transition name="fade">
                    <div v-if="errorMessage" class="error-card">
                        {{ errorMessage }}
                    </div>
                </transition>
            </div>
            <div class="buttons">
                <button class="yes-btn" @click="confirmSelectionYes">PASS</button>
                <button class="no-btn" @click="confirmSelectionNo">FAIL</button>
            </div>
        </footer>
    </div>
</template>