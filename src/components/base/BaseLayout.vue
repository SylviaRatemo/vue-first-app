<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="defaultBackLink" mode="md" />
                </ion-buttons>      
                <ion-title>{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot />
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { 
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton
    } from '@ionic/vue';

defineProps({
    pageTitle: String,
    defaultBackLink: String
})
</script>