<template>
    <base-layout page-title="Biography" defaultBackLink="/member">
        <ion-content v-if="member">
            <h1>{{ member.title }}</h1>
            <ul>
                <li v-for="(item, index) in member.description" :key="index">
                    {{ item }}
                </li>
            </ul>
        </ion-content>
        <ion-content v-else>
            <p>Member not found.</p>
        </ion-content>
    </base-layout>
</template>

<script setup lang="ts">
import {
    IonContent,
} from '@ionic/vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { members } from '@/store/members';

const route = useRoute();
const memberId = route.params.id;
const member = computed(() => members.value.find((m) => m.id === memberId));
</script>