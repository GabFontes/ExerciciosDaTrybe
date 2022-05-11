import connection from "./connection";
import IUser from "../interfaces/User.interface";
import { ResultSetHeader } from "mysql2/promise";

export default class User {
  public getAll = async (): Promise<IUser[]> => {
    const query = 'SELECT * FROM TypeScriptExpress.Users';
  
    const [users] = await connection.execute(query);
  
    return users as IUser[];
  }

  public getById = async (id: string): Promise<IUser[]> => {
    const query = 'SELECT * FROM TypeScriptExpress.Users WHERE id = ?';

    const [user] = await connection.execute(query, [id]);

    return user as IUser[];
  }

  public create = async ({name, email, password}: IUser): Promise<IUser> => {
    const query = `INSERT INTO TypeScriptExpress.Users
     (name, email, password) VALUES(?, ?, ?)`;

    const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, email, password])
  
    return {
      id: insertId,
      name,
      email,
      password
    } 
  }

}
