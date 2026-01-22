import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getRoot() {
        return { Hello: 'World' };
    }

    getItem(id: number, q?: string) {
        return {
            item_id: id,
            q: q || null,
        };
    }
}