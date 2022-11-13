import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';


class CategoriesRepository implements ICategoriesRepository{
  private ormRepostory: Repository<Category>;

  constructor() {
    this.ormRepostory = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.ormRepostory.create({
      name,
      description,
    });
    await this.ormRepostory.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.ormRepostory.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.ormRepostory.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };