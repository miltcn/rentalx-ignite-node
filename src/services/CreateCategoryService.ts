import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {

    // Modo simplificado de injeção
  // constructor(private categoriesRepository: ICategoriesRepository) { }

  // Modo detalhado de injeção
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExiste = this.categoriesRepository.findByName(name);
  
    if (categoryAlreadyExiste)
      throw new Error("Category Already Existe!");

    this.categoriesRepository.create({ name, description });
  }

}

export { CreateCategoryService };