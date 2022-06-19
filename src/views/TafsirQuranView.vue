<template>
  <div class="quran">
    <h3>Tafsir: {{quran.nama_latin}} ({{quran.nama}}) {{quran.jumlah_ayat + ' Ayat'}} - {{quran.arti}}</h3>
    <hr>
    <div class="row">
        <div class="col-md-8 pb-2">
            <div class="ayat py-3" v-for="ayat in quran.tafsir" :key="ayat.ayat">
                <p v-html="ayat.ayat +'. '+ ayat.tafsir" style="font-style: italic;"></p>
                <hr>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            quran: []
        }
    },
    created() {
        axios.get(`https://equran.id/api/tafsir/${this.$route.params.id}`)
        .then(response => {
            // JSON responses are automatically parsed.
            // console.log(response.data)
            this.quran = response.data
        })
        .catch(e => {
            console.log('ada error: '+e)
        })
    }
}
</script>