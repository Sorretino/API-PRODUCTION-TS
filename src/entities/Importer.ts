export type Importer = {
    id?: string;
    name: string;
    phone: string;
    email: string;
    dialog?: Array<any>;
    whitelabel_config?: string;
    last_intent?: string;
    origin?: string;
    status?: string;
    send?: boolean;
    broker:string;
    start_message?: Date
  };