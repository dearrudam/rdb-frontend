import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";
// RxJS
import { Observable } from 'rxjs';

import { EventosDb } from './fake-db/eventos';
import { ItensDb } from './fake-db/itens';

@Injectable()
export class FakeApiService implements InMemoryDbService {

    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
        const db = {
            eventos: EventosDb.eventos,
            itemdoacao: ItensDb.itens
        };
        return db;
    }

}