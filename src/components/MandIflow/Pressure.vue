<script>
    import HeaderBar from "../HeaderBar.vue";
    import '@/assets/screen_style.css';
    export default{
        name: "Digital Checking",
        components:{HeaderBar},
        data(){
            return{
                selectedItem : {
                    name:"Pressure",
                    image: "/Images_M&I/pressure.jpg",
                },
                errorMessage : "",
                errorTimeout : null,
                pressure: "",
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
            confirmSelection(){
                if (this.pressure < 30 || this.pressure > 50) {
                    this.showError("Out of Range");
                    this.speak("Out of Range"); 
                }else{
                    this.$router.push("/checklist");
                }
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
            this.speak(`${this.selectedItem.name}`);
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
            <h3 class="code">Tyre Pressure ?</h3>
            <h3 class="code">Input range between 30 PSI - 50 PSI</h3>
            <p>Hint : Check tyre pressure</p>
            <div class="input-wrapper">

                <transition name="fade">
                    <div v-if="errorMessage" class="error-card">
                        {{ errorMessage }}
                    </div>
                </transition>
                <input type="text" class="userinput" v-model="pressure" />
            </div>
            <button class="ready-btn" @click="confirmSelection">SUBMIT</button>
   
        </footer>
    </div>
</template>