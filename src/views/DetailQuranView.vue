<template>
  <div class="quran">
    <h3>{{quran.nama_latin}} ({{quran.nama}}) {{quran.jumlah_ayat + ' Ayat'}} - {{quran.arti}}</h3>
    <hr>
    <div class="row">
        <div class="col-md-6 pb-2">
            <div class="ayat py-3" v-for="ayat in quran.ayat" :key="ayat.nomor">
                <p v-html="ayat.ar" style="text-align: right"></p>
                <p v-html="ayat.nomor +'. '+ ayat.tr" style="font-style: italic;"></p>
                <p v-html="ayat.nomor +'. '+ ayat.idn"></p>
                <hr>
            </div>
        </div>
        <div class="col-md-6">
            <div class="container">
                <audio controls>
                    <source :src="`${quran.audio}`" type="audio/mpeg">
                    Browser kamu tidak support audio!
                </audio>
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
        axios.get(`https://equran.id/api/surat/${this.$route.params.id}`)
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