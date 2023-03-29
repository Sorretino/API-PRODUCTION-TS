import { Importer } from "~/entities/Importer";

export interface IImporterRepository {
    //createMany(importer: Importer): Promise<Importer>; 
    createDoc(importer: any ): Promise<any>;
    updateDoc(): Promise<any>;
    updateDoc2(importer:any): Promise<any>;
    findPhone(importer: Importer) : Promise<any>;
   
}