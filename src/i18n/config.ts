import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextPhraseBackend } from "@phrase/i18next-backend";

i18next
.use(I18nextPhraseBackend)
.use(initReactI18next)
.init({
    fallbackLng: 'en-US',
    lng: 'en-US', // if you're using a language detector, do not define the lng option
    debug: true,
    backend: {
        debug: true,
        distribution: 'fc0b1bafdc760a52b6ea85e12686e522',
        secret: '3_icZY4ipjNMwXE5PcyAy29UHywU0C48XHz1JEFxGX4',
        appVersion: '1.0.0',
        host: 'https://ota.us.app.phrase.com',
    },
});