<template>
  <div class="quran">
    <h1>Daftar Isi</h1>
    <hr>
    <div class="row">
        <div class="col-md-4 py-2" v-for="quran in qurans" :key="quran.nomor">
            <div class="card">
                <div class="card-header">{{quran.nama_latin}} ({{quran.nama}}) - {{quran.arti}}</div>
                <div class="card-body">
                    <ul>
                        <li>{{quran.jumlah_ayat}} Ayat</li>
                        <li>Surah ke-{{quran.nomor}}</li>
                        <li>Turun Di {{quran.tempat_turun}}</li>
                        <div class="d-flex justify-content-end" style="margin-bottom: -20px; margin-top: 10px">
                            <!-- <router-link :to="`/quran/murottal/${quran.nomor}`" class="btn btn-sm btn-danger">Murottal</router-link> -->
                            <router-link :to="`/quran/tafsir/${quran.nomor}`" class="btn btn-sm btn-warning mx-1">Tafsir</router-link>
                            <router-link :to="`/quran/${quran.nomor}`" class="btn btn-sm btn-success">Baca</router-link>
                        </div>
                    </ul>
                </div>
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
            qurans: []
        }
    },
    created() {
        axios.get(`https://equran.id/api/surat`)
        .then(response => {
            // JSON responses are automatically parsed.
            // console.log(response.data)
            this.qurans = response.data
        })
        .catch(e => {
            console.log('ada error: '+e)
        })
    }
}
</script>
<style>
    
</style>