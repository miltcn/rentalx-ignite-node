import { inject, injectable } from 'tsyringe';
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
    ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExiste = await this.categoriesRepository.findByName(name);
  
    if (categoryAlreadyExiste)
      throw new Error("Category Already Existe!");

    await this.categoriesRepository.create({ name, description });
  }

}

export { CreateCategoryUseCase };