<script>
import HeaderBar from '../HeaderBar.vue';
import '@/assets/screen_style.css';
export default {
    name: "Digital Checklist",
    components:{HeaderBar},
    data(){
        return{
            selectedItem:{
                name:"ExternalDamage",
                image: "/Images_M&I/external_damage.jpg",
            },
            errorMessage: "",
            errorTimeout: null,
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
        confirmSelectionYes() {
            this.showError("Take a picture");  
            this.speak("Take a picture");          
        },
        confirmSelectionNo() {
            this.$router.push("/ignitionStatus");            
        },
        showError(message) {
            this.errorMessage = message;
            if (this.errorTimeout) clearTimeout(this.errorTimeout);
            this.errorTimeout = setTimeout(() => {
                this.errorMessage = "";
            }, 1500);
        },
        async openCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                this.$refs.video.srcObject = stream;
                this.$refs.video.style.display = 'block'; // show video preview
            } catch (err) {
                console.error('Error accessing camera:', err);
                alert('Camera access denied or not available.');
            }
        },
        
    },
    mounted() {
        this.speak(`Any External Damage`);
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
                <img :src="selectedItem.image" alt="ExternalDamage" />
            </div>
            
        </div>
        
        <footer class="footer">
            <div>
                <button @click="openCamera">cam</button>
            </div>
            <h3 class="code">Any External Damage?</h3>
            <p>Hint : Say yes or no</p>
            <div class="input-wrapper">
                <transition name="fade">
                    <div v-if="errorMessage" class="error-card">
                        {{ errorMessage }}
                    </div>
                </transition>
            </div>
            <div class="buttons">
                <button class="yes-btn" @click="confirmSelectionYes">YES</button>
                <button class="no-btn" @click="confirmSelectionNo">NO</button>
            </div>

        </footer>
    </div>
</template>
