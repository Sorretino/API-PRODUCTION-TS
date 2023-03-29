//import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CompanysRepository } from "../../repositories/implementations/companyRepository";
import { CreateCompanyCase } from "./createCompany.service";
import { CreateCompanyController } from "./createCompany.controller";

const companysRepository = new CompanysRepository();

const createCompanyCase = new CreateCompanyCase(companysRepository);

const createCompanyController = new CreateCompanyController(createCompanyCase);

export { createCompanyCase, createCompanyController };
