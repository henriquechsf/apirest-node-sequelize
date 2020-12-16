import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Carlos Henrique',
      sobrenome: 'Souza Ferreira',
      email: 'henrique@gmail.com',
      idade: 35,
      peso: 92,
      altura: 178,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
