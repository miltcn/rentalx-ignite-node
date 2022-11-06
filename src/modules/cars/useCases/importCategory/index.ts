import { CategoriesRepository } from "../../repositories/implementations/CatagoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstace();

const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };