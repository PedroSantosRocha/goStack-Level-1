/**
 * Para criar: name, email, password
 */

 interface TechObject {
     title: string;
     experience: number;
 }

 interface CreateUserData {
     name?: string; // "?" significa que a variável não é obrigatória
     email: string;
     password: string;
     techs: Array<string | TechObject>; // Também pode-ser usar o seguinte formato "techs: string[]" quando for um tipo único.
 }

export default function createUser({ name, email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password
    }

    return user;
}