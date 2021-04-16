import { Injectable } from '@nestjs/common';
import { Time } from './time';

@Injectable()
export class TimeService {
    times: Time[] = [
        { id: 1, nome: 'Internacional', estadio: 'Beira Rio', corPrincipal: 'Vermelho' },
        { id: 2, nome: 'Palmeiras', estadio: 'Allianz Parque', corPrincipal: 'Verde' },
        { id: 3, nome: 'Boca Juniors', estadio: 'La Bombonera', corPrincipal: 'Azul' }
    ];

    getAll(){
        return this.times;
    }

    getById(id: number){
        return this.times.find( el => el.id == id);
    }

    create(time: Time){
        let lastId = 0;
        if (this.times.length > 0) {
            lastId = this.times[this.times.length -1].id;
        }
        time.id = lastId + 1;
        this.times.push(time);

        return time;
    }

    update(time: Time){
        const timeArray = this.getById(time.id);
        if (timeArray) {
            timeArray.nome = time.nome;
            timeArray.estadio = time.estadio;
            timeArray.corPrincipal = time.corPrincipal;
        }

        return timeArray;
    }

    delete(id: number){
        const index = this.times.findIndex(el => el.id == id);
        this.times.splice(index, 1);
    }
}
