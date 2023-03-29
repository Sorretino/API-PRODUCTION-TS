//import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { SubscribedRepository } from "../../repositories/implementations/subscribedRepository";
import { CreateSubscribedCase } from "./createSubscribed.service";
import { CreateSubscribedController } from "./CreateSubscribed.controller";

const subscribedRepository = new SubscribedRepository();

const createSubscribedCase = new CreateSubscribedCase(
    subscribedRepository
    );

const createSubscribedController = new CreateSubscribedController(createSubscribedCase);

export { createSubscribedCase, createSubscribedController };