import { Workgallery } from "~/entities/Workgallery";

export interface IWorkgalleryRepository {
  list(work:Workgallery ): Promise<Workgallery[]>;

}