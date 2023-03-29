import "dotenv/config";
import { Request, Response } from "express";
import { CreateImporterCase } from "./createImporter.service";
import XLSX from 'xlsx';

const LEADS_VALIDATE = {
    NOVO_LEAD: '',
    NUMBER_INVALID: 'INVALID_NUMBER',
    GLOBAL_INVALID:'<< Não informado >>',
    GLOBAL_ANAPRO:'OLD_LEADS_ANAPRO',
    GLOBAL_LISTAGEM:'LISTAGEM',
    NUMBER_ERROR: 'ERROR',

}

let phoneInvalid = '';

export class CreateImporterController {
  constructor(
    private createImporterCase: CreateImporterCase,
  ) {}

  

  private formatPhone(phoneNumber: string) {
    return phoneNumber.replace(/[^0-9]+/g, '')
  }

  private validatePhone(rawPhoneNumber: string, final = false) {
    //const phoneNumber = rawPhoneNumber.replace(/[^0-9]+/g, '');
    const phoneNumber = this.formatPhone(rawPhoneNumber);
    if(  phoneNumber.length === 11) {
       return true;
    } else {
      if (phoneNumber.length > 4)
        phoneInvalid += `${phoneNumber};`;
      return false;
    }
   
  }

  
  async handle(){
    try{
        let filePath = process.env.PATH_FILE || "";
        
        const workbook = XLSX.readFile(`${filePath}Mailing_Jade_Rua_Fabio_Santos_122.xls`);
        let workshet = workbook.Sheets[workbook.SheetNames[0]];
        let data = XLSX.utils.sheet_to_json(workshet);
        
        // if (data.length > 50) {
        //     return console.log('Limite de 50 cadastros atingidos.')
        // }
        const arrayToInsert: Array<object> | any = data.map((lead: any, index) => {
          phoneInvalid = '';

             const mountTel = this.validatePhone(lead.DDD + lead['Tel 1']) 
                              ? this.formatPhone(lead.DDD + lead['Tel 1'])
                              : this.validatePhone(lead.DDD + lead['Tel 2'])
                              ? this.formatPhone(lead.DDD + lead['Tel 2'])
                              : this.validatePhone(lead.DDD + lead['Cel1'])
                              ? this.formatPhone(lead.DDD + lead['Cel1'])
                              : this.validatePhone(lead.DDD + lead['Cel2'], true)
                              ? this.formatPhone(lead.DDD + lead['Cel2'])
                              : '';
  
            
            return { 
                    name: lead.Nome != null ? lead.Nome : "<< Não informado >>",
                    phone: mountTel.length === 11 ? mountTel : phoneInvalid,
                    email: lead.Email !== undefined && lead.Email != null && lead.Email != "" &&
                    lead.Email.length > 0 ?  lead.Email : '<< Não informado >>',
                    origin: LEADS_VALIDATE.GLOBAL_LISTAGEM,
                    status:  mountTel.length === 11 ? LEADS_VALIDATE.NOVO_LEAD: LEADS_VALIDATE.NUMBER_INVALID ,
                    config_id: process.env.SECRETE_CONFIG_ID_PRODUCT,
                    whitelabel_config: process.env.SECRETE_WHITELABEL_CONFIG,
                    broker: '',
                    dialog: []
            }
        });
        //.slice(0, 50)
       
console.log(arrayToInsert)
        await this.createImporterCase.createMany(arrayToInsert);

        let result = {
            status: 'ok',
            message: 'Importation finished with success!',
            messages:  `Completed Import, imported ${arrayToInsert.length} registers`,
        }
        console.log(result);
        process.exitCode = 0;

        return result;
    } catch(error){
        console.error(error)
    }
  }

  async banana(){
    try {
      await this.createImporterCase.updateMany();
      let result = {
        status: 'ok',
        message: 'Updated finished with success!',
        messages: `Completed updateds`,
      }
      console.log(result);
      process.exitCode = 0;
      return result;
    } catch (error) {
      console.error(error)
    }
  }

  async banana2(request: Request, response: Response) {
    try {

      const {status} = request.params;
      console.log(status,'controller')
      if (status !== null) {
      
        const postbase = await this.createImporterCase.updateMany2(status)
        let result = {
          status: 'ok',
          message: 'Updated finished with success!',
          messages: `Completed Import, imported ${postbase} registers`,
        }
        console.log(result);
        process.exitCode = 0;
      } else {
       throw new Error('Id não informado');
      }
      
    } catch (error) {
      console.error(error)
    }
  }
  



}