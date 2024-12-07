<template>
    <base-layout page-title="Family Members">
        <ion-list>
            <ion-item v-for="member in members" :key="member.id">
                <ion-thumbnail slot="start">
                    <ion-img :alt="member.title" :src="member.image"></ion-img>
                </ion-thumbnail>
                <router-link :to="{name: 'member-details', params: { id: member.id }}" class="no-link">
                    {{ member.title }}
                </router-link>
            </ion-item>
        </ion-list>
    </base-layout>
</template>

<script setup lang="ts">
import { 
    IonList,
    IonItem,
    IonImg,
    IonThumbnail
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { members } from '@/store/members';

</script>