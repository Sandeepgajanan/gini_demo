<script>
import HeaderBar from '../HeaderBar.vue';
import '@/assets/screen_style.css';
export default {
    name: "Digital Checklist",
    components:{HeaderBar},
    data(){
        return{
            selectedItem:{
                name:"ScanEquipment",
                image: "/Images_M&I/screen1.png",
            },
            scan: "",
            errorMessage: "",
            errorTimeout: null,
            selectedEQP:"",
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
            if(this.selectedEQP === "1"){
                this.$router.push("/inspectionModel1");
            }else if(this.selectedEQP === "2"){
                this.$router.push("/inspectionModel2");
            }else if(this.selectedEQP === "3"){
                this.$router.push("/inspectionModel3");
            }
        },
        showError(message) {
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
    watch: {
        scan(value) {
        const input = value.trim().replace(/\s+/g, ""); 
        if (input === "1") {
            this.selectedEQP = "1";
        } else if(input === "2"){
            this.selectedEQP = "2";
        }else if(input === "3"){
            this.showError("Equipement is out of service");
            this.speak("Equipement is out of service")
        }
        else {
            this.showError("Invalid check digit");
        }
        },
    },
   
}
 

</script>

<template>
    <div class="screen">
        <HeaderBar @menu-action="handleMenuAction" />

        <div class="card">
            <div class="image">
                <img :src="selectedItem.image" alt="ScanEquipment" />
            </div>
        </div>

        <footer class="footer">
            <h3 class="title"></h3>
            <!-- <h1 class="code">{{ selectedItem.name }} 1,2 or 3</h1> -->
            <p>{{ selectedItem.name }} 1,2 or 3</p>
            <div class="input-wrapper">
                <transition name="fade">
                <div v-if="errorMessage" class="error-card">
                    {{ errorMessage }}
                </div>
                </transition>
                <input type="text" v-model="scan" class="userinput" />
            </div>
            <button class="ready-btn" @click="confirmSelection">SCAN</button>
            <p>Hint : Scan Equipment</p>
        </footer>
    </div>
</template>

<style>

</style>