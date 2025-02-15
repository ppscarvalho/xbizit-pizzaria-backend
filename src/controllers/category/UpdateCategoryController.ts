import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/category/UpdateCategoryService"

class UpdateCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name } = req.body;
        const updateCategoryService = new UpdateCategoryService();
        const category = await updateCategoryService.execute({
            id,
            name
        });

        res.json(category)
    }
}

export { UpdateCategoryController }