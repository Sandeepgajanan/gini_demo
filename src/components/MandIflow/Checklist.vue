<script>
    import HeaderBar from "../HeaderBar.vue";
    import '@/assets/screen_style.css';
    export default{
        name: "Digital Checking",
        components:{HeaderBar},
        data(){
            return{
                selectedItem : {
                    name:"Submit Checklist",
                },
                errorMessage : "",
                errorTimeout : null,
                pressure: "",
                checklist: [
                { question: "Any External damage?", answer: "No", type: "no" },
                { question: "Ignition status?", answer: "Pass", type: "pass" },
                { question: "Headlamps Ok?", answer: "Yes", type: "yes" },
                { question: "Indicator Check", answer: "Pass", type: "pass" },
                { question: "Any Flat tires.", answer: "No", type: "no" },
                { question: "Tyre Pressure ?", answer: "40", type: "value" }
                ],
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
                
                this.$router.push("/inspection1_finish");
                
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

        <div class="card">
            
            <div class="image">
                <div class="checklist-card">
                    <h3>Submit Checklist</h3>
                    <!-- Header -->
                    <div>
                        <div class="header">
                            <span>Checklist Item</span>
                            <span>Answer</span>
                        </div>

                        <!-- Rows -->
                        <div class="row" v-for="(item, i) in checklist" :key="i">
                            <span class="question">{{ i + 1 }}. {{ item.question }}</span>
                            <span class="answer" :class="item.type">
                            {{ item.answer }}
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <footer class="footer">
            <p>Hint : Say Finish to submit</p>
            <button class="ready-btn" @click="confirmSelection">FINISH</button>
        </footer>
    </div>
</template>


<style scoped>
.checklist-card {
  width: 100%;
  max-width: 420px;
  border-radius: 12px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Header */
.header {
  display: grid;
  grid-template-columns: 2fr 1fr 40px;
  background: #f5a800;
  color: #000;
  font-weight: bold;
  padding: 12px;
  align-items: center;
}

/* Rows */
.row {
  display: grid;
  grid-template-columns: 2fr 1fr 40px;
  padding: 10px 12px;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.row:nth-child(even) {
  background: #eef5fb;
}

.question {
  font-size: 14px;

}

.answer {
  font-weight: bold;
    color: green;
}



</style>