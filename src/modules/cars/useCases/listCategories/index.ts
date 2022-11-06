import { CategoriesRepository } from "../../repositories/CatagoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./ListCategoriesController";


const categoriesRepository = CategoriesRepository.getInstace();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);


export { listCategoriesController };
