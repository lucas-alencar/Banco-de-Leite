import { Model } from "objection";

class Usuario extends Model {
  id!: number;
  email!: string;
  senha!: string;

  static get tableName() {
    return "usuarios";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "senha"],

      properties: {
        id: { type: "integer" },
        email: {
          type: "string",
          format: "email",
          minLength: 1,
          maxLength: 255,
        },
        senha: { type: "string", minLength: 1, maxLength: 64 },
      },
    };
  }
}

export default Usuario;
