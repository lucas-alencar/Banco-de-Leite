import { Request, Response } from "express";
import Usuario from "../models/Usuario";
const bcrypt = require("bcrypt");

class UsuarioController {
  static SALT_ROUNDS = 10;

  static async listar(req: Request, res: Response) {
    try {
      const usuarios = await Usuario.query();
      res.json(usuarios);
    } catch (error) {
      res
        .status(500)
        .json({
          error: "Erro ao buscar usuario. \n Definição do erro:" + error,
        });
    }
  }

  static async adicionar(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;

      const usuarioBanco = await Usuario.query().where("email", email).first();
      if(!usuarioBanco){

        //Criptografando a senha
        bcrypt.hash(
            senha,
            UsuarioController.SALT_ROUNDS,
            async (err: Error, hash: string) => {
              if (!err) {
                const novoUsuario: Usuario = await Usuario.query().insert({
                  email: email,
                  senha: hash,
                });
                res.status(201).json(novoUsuario);
              }
            }
          );
      }
      else{
        res.status(409).json({
            error: 'Usuário existente no banco de dados'
        });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar o novo usuário. \n Definição do erro: " + error,});
    }
  }

  static async verificarSenha(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;
      const usuarioBanco = await Usuario.query().where("email", email).first();
      if (usuarioBanco) {
        bcrypt.compare(
          senha,
          usuarioBanco.senha,
          (err: Error, result: boolean) => {
            if (result) {
              res.json({
                mensagem: "Usuário autenticado com sucesso!",
                status: true,
              });
            } else {
              res.status(401).json({
                mensagem: "Senha incorreta.",
                status: false,
              });
            }
          }
        );
      } else {
        res.status(401).json({
          mensagem: "Usuário não identificado",
          status: false,
        });
      }
    } catch (error: any) {
      res.status(500).json({
        erro: "Erro ao verificar Usuário. Definição do erro: " + error,
        status: false
      });
    }
  }

  static async gerarCookie(req:Request, res:Response){

  }

}

export default UsuarioController;
