import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {

  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExiste = await this.categoriesRepository.findByName(name);
  
    if (categoryAlreadyExiste)
      throw new Error("Category Already Existe!");

    await this.categoriesRepository.create({ name, description });
  }

}

export { CreateCategoryUseCase };