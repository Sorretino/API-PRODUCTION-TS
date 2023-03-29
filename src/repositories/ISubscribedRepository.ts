import { Subscribed } from "~/entities/Subscribed";

export interface ISubscribedRepository {
save(sub: Subscribed): Promise<Subscribed>;
list(work:Subscribed ): Promise<Subscribed[]>;
delete(id: string): Promise<Subscribed>;

}