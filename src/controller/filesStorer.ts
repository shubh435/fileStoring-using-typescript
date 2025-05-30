import FileStore from "../model/filesStorer";
import { Request, Response } from "express";

const toStoreFiles = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const baseUrl = req.protocol + "://" + req.get("host");
    let productFileUrl: {
      fileUrl: string;
      fileType: string;
    }[] = [];
    const filesChangeType = req.files as Express.Multer.File[];
    if (filesChangeType && filesChangeType?.length > 0) {
      productFileUrl = filesChangeType.map((item: Express.Multer.File) => {
        return {
          fileUrl: `${baseUrl}/public/${item.filename}`,
          fileType: item.mimetype,
        };
      });
    }
    const productsObj = {
      name: name ?? undefined,
      files: productFileUrl ?? [],
    };

    const files = new FileStore(productsObj);
    const products = await files.save();
    if (products) {
      res.status(201).json({ files });
      return;
    }
  } catch (error) {
    res.status(400).json({ error: String(error) });
    return;
  }
};

const toGetAllFiles = async (req: Request, res: Response) => {
  try {
    const response = await FileStore.find();
    res.status(200).json({ response });
    return;
  } catch (error) {
    res.status(400).json({ error: String(error) });
    return;
  }
};

const toGetFileById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      throw new Error("Parameter 'productId' is required");
    }

    const product = await FileStore.findById(productId).exec();
    if (!product) {
      throw new Error("File not found");
    }

    res.status(200).json({ product });
    return;
  } catch (error) {
    res.status(400).json({ error: String(error) });
    return;
  }
};

export { toStoreFiles, toGetAllFiles, toGetFileById };
