import { Request, Response } from "express";

let pets = []

export default class PetController {
    createPet(req: Request, res: Response) {
        const newPet = req.body;
        pets.push(newPet);
        return res.status(201).json(newPet);
    }
}