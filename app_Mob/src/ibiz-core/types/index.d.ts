import { AppEntityServiceConstructor } from '@/app-core/service/app-entity-service-constructor';
import { CounterServiceConstructor } from '@/app-core/counter/counter-service-constructor';
import { AppCommunicationsCenter } from '../app-service/message-center/app-communications-center';

declare global {
    interface Window {
        appEntityServiceConstructor: AppEntityServiceConstructor,
        counterServiceConstructor: CounterServiceConstructor,
        acc: AppCommunicationsCenter
    }
}