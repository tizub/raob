import {Injectable} from '@angular/core';
import {AO} from './beans/ao';
import {MOCK_AOS} from './mock-aos';

@Injectable()
export class AOService {
    getList() {
        return Promise.resolve(MOCK_AOS);
    }

    getItemFromId(id: number) {
        return Promise.resolve(MOCK_AOS).then(
            response => response.filter(item => item.id === id)[0]
        );
    }
}