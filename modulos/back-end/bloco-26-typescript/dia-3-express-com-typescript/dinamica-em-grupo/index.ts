import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from './models/User';

const app = express();

app.use(express.json());

const PORT = 3000;

const user = new User();

app.get('/users', async (req: Request, res: Response): Promise<Response> => {
    const allUsers = await user.getAll();
    return res.status(StatusCodes.OK).json(allUsers)
});

app.get('/users/:id', async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const [userById] = await user.getById(id)

    return res.status(StatusCodes.OK).json(userById)
})

app.post('/user', async (req: Request, res: Response): Promise<Response> => {

    const newUser = await user.create(req.body);

    return res.status(StatusCodes.CREATED).json(newUser);
})

app.listen(PORT, () => console.log('ouvindo na porta 3000'));